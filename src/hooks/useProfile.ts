
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { toast } from "@/components/ui/use-toast";

export interface UserProfile {
  id: string;
  name: string;
  bio: string | null;
  city: string | null;
  interests: string[] | null;
  skills: string[] | null;
  attitudes: string[] | null;
  points: number | null;
  avatar: string | null;
}

export const useProfile = () => {
  const ensureUserProfile = async (user: User): Promise<boolean> => {
    try {
      // First check if profile exists
      const { data: existingProfile, error: fetchError } = await supabase
        .from('users')
        .select('id')
        .eq('id', user.id)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        throw fetchError;
      }

      if (!existingProfile) {
        // Create new profile if it doesn't exist
        const { error: insertError } = await supabase
          .from('users')
          .insert({
            id: user.id,
            name: user.user_metadata.full_name || user.email?.split('@')[0] || 'User',
            bio: null,
            city: null,
            interests: [],
            skills: [],
            attitudes: [],
            points: 0,
            avatar: user.user_metadata.avatar_url || null
          });

        if (insertError) throw insertError;
        
        toast({
          description: "¡Bienvenido! Tu perfil ha sido creado.",
        });
      }
      
      return true;
    } catch (error) {
      console.error('Error ensuring user profile:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo crear tu perfil. Por favor intenta de nuevo.",
      });
      return false;
    }
  };

  const updateProfile = async (
    userId: string,
    data: Partial<Omit<UserProfile, 'id'>>
  ): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from('users')
        .update(data)
        .eq('id', userId);

      if (error) throw error;

      toast({
        description: "Perfil actualizado exitosamente.",
      });

      return true;
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "No se pudo actualizar tu perfil. Por favor intenta de nuevo.",
      });
      return false;
    }
  };

  const getProfile = async (userId: string): Promise<UserProfile | null> => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      return null;
    }
  };

  return {
    ensureUserProfile,
    updateProfile,
    getProfile,
  };
};
