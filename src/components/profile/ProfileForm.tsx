
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useProfile } from "@/hooks/useProfile";
import { useAuth } from "@/contexts/AuthContext";

// Update the schema to properly handle the string inputs for arrays
const profileSchema = z.object({
  bio: z.string().max(500, "La biografía no puede exceder 500 caracteres"),
  city: z.string().min(2, "La ciudad debe tener al menos 2 caracteres").max(100),
  // For these fields, we're handling them as strings in the form, but we'll transform them to arrays on submit
  interests: z.string().transform((str) => str.split(',').map((s) => s.trim())),
  skills: z.string().transform((str) => str.split(',').map((s) => s.trim())),
  attitudes: z.string().transform((str) => str.split(',').map((s) => s.trim())),
});

// Define the form values type based on the input values (before transformation)
type ProfileFormValues = {
  bio: string;
  city: string;
  interests: string;
  skills: string;
  attitudes: string;
};

export function ProfileForm() {
  const { user } = useAuth();
  const { updateProfile, getProfile } = useProfile();
  
  // Define the form with correct types
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: async () => {
      // Create a correctly typed empty values object
      const emptyValues: ProfileFormValues = {
        bio: "",
        city: "",
        interests: "",
        skills: "",
        attitudes: ""
      };
      
      if (!user) return emptyValues;
      
      const profile = await getProfile(user.id);
      if (!profile) return emptyValues;
      
      // Format arrays as comma-separated strings for the form inputs
      return {
        bio: profile.bio || "",
        city: profile.city || "",
        interests: Array.isArray(profile.interests) ? profile.interests.join(", ") : "",
        skills: Array.isArray(profile.skills) ? profile.skills.join(", ") : "",
        attitudes: Array.isArray(profile.attitudes) ? profile.attitudes.join(", ") : "",
      };
    },
  });

  // On submit, use the ProfileFormValues type and handle the transformation
  async function onSubmit(formData: ProfileFormValues) {
    if (!user) return;
    
    // Transform the comma-separated strings to arrays
    const transformedData = {
      bio: formData.bio,
      city: formData.city,
      interests: formData.interests.split(',').map(s => s.trim()).filter(Boolean),
      skills: formData.skills.split(',').map(s => s.trim()).filter(Boolean),
      attitudes: formData.attitudes.split(',').map(s => s.trim()).filter(Boolean),
    };
    
    await updateProfile(user.id, transformedData);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Biografía</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Cuéntanos sobre ti..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ciudad</FormLabel>
              <FormControl>
                <Input placeholder="Tu ciudad..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="interests"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Intereses</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Separa tus intereses con comas..." 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Habilidades</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Separa tus habilidades con comas..." 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="attitudes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Actitudes</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Separa tus actitudes con comas..." 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Guardar cambios</Button>
      </form>
    </Form>
  );
}
