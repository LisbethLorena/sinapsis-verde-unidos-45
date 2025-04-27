
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

export const useProfile = () => {
  const ensureUserProfile = async (user: User) => {
    try {
      // First check if profile exists
      const { data: existingProfile } = await supabase
        .from('users')
        .select('id')
        .eq('id', user.id)
        .single();

      if (!existingProfile) {
        // Create new profile if it doesn't exist
        const { error: insertError } = await supabase
          .from('users')
          .insert({
            id: user.id,
            name: user.user_metadata.full_name || user.email?.split('@')[0] || 'User',
            interests: [],
            skills: [],
            attitudes: [],
            points: 0
          });

        if (insertError) throw insertError;
      }
      
      return true;
    } catch (error) {
      console.error('Error ensuring user profile:', error);
      return false;
    }
  };

  return { ensureUserProfile };
};
