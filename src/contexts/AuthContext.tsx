
import { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { useProfile } from '@/hooks/useProfile';

type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { ensureUserProfile } = useProfile();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          const profileCreated = await ensureUserProfile(session.user);
          if (!profileCreated && event !== 'SIGNED_OUT') {
            toast({
              variant: "destructive",
              title: "Error al configurar el perfil",
              description: "Hubo un error configurando tu perfil. Por favor intenta de nuevo.",
            });
            await signOut();
          }
        }
        
        setLoading(false);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;
      
      toast({
        title: "Registro exitoso",
        description: "Por favor verifica tu correo para activar tu cuenta.",
      });
      
      navigate('/login');
    } catch (error: any) {
      let message = "Error en el registro";
      
      if (error.message.includes("email already")) {
        message = "Este correo ya está registrado. Por favor intenta iniciar sesión.";
      }
      
      toast({
        variant: "destructive",
        title: "Error al registrarse",
        description: message,
      });
      
      console.error("Error signing up:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSuccessfulAuth = async (session: Session) => {
    if (!session.user) return;
    
    try {
      const profileCreated = await ensureUserProfile(session.user);
      if (!profileCreated) {
        throw new Error('Failed to create user profile');
      }
      
      navigate('/dashboard');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error configurando el perfil",
        description: "Hubo un error configurando tu perfil. Por favor intenta de nuevo.",
      });
      
      await signOut();
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const { error, data: { session } } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      if (session) {
        await handleSuccessfulAuth(session);
      }
    } catch (error: any) {
      let message = "Error al iniciar sesión";
      
      if (error.message.includes("Invalid login")) {
        message = "Email o contraseña incorrectos. Por favor verifica tus datos.";
      }
      
      toast({
        variant: "destructive",
        title: "Error al iniciar sesión",
        description: message,
      });
      
      console.error("Error signing in:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      // The function signInWithOAuth doesn't directly return a session
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`
        }
      });

      if (error) throw error;
      
      // The session will be handled by the onAuthStateChange listener
      // No need to call handleSuccessfulAuth here as it will be triggered automatically
      // after redirect back from OAuth provider
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error al iniciar sesión con Google",
        description: error.message,
      });
      
      console.error("Error signing in with Google:", error.message);
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      navigate('/login');
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error al cerrar sesión",
        description: error.message,
      });
      
      console.error("Error signing out:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    session,
    user,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
