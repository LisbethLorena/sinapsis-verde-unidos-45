export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      activities: {
        Row: {
          activity_type: string | null
          category: string | null
          company_id: string | null
          date: string | null
          description: string | null
          id: string
          image: string | null
          location: string | null
          max_participants: number | null
          title: string
        }
        Insert: {
          activity_type?: string | null
          category?: string | null
          company_id?: string | null
          date?: string | null
          description?: string | null
          id?: string
          image?: string | null
          location?: string | null
          max_participants?: number | null
          title: string
        }
        Update: {
          activity_type?: string | null
          category?: string | null
          company_id?: string | null
          date?: string | null
          description?: string | null
          id?: string
          image?: string | null
          location?: string | null
          max_participants?: number | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "activities_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      applications: {
        Row: {
          application_date: string | null
          challenge_id: string | null
          id: string
          status: string | null
          user_id: string | null
        }
        Insert: {
          application_date?: string | null
          challenge_id?: string | null
          id?: string
          status?: string | null
          user_id?: string | null
        }
        Update: {
          application_date?: string | null
          challenge_id?: string | null
          id?: string
          status?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "applications_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "challenges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      challenges: {
        Row: {
          category: string | null
          company_id: string | null
          contribution_type: string | null
          description: string | null
          difficulty: string | null
          end_date: string | null
          id: string
          image: string | null
          reward: string | null
          start_date: string | null
          status: string | null
          title: string
        }
        Insert: {
          category?: string | null
          company_id?: string | null
          contribution_type?: string | null
          description?: string | null
          difficulty?: string | null
          end_date?: string | null
          id?: string
          image?: string | null
          reward?: string | null
          start_date?: string | null
          status?: string | null
          title: string
        }
        Update: {
          category?: string | null
          company_id?: string | null
          contribution_type?: string | null
          description?: string | null
          difficulty?: string | null
          end_date?: string | null
          id?: string
          image?: string | null
          reward?: string | null
          start_date?: string | null
          status?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "challenges_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          city: string | null
          description: string | null
          id: string
          logo: string | null
          name: string
        }
        Insert: {
          city?: string | null
          description?: string | null
          id?: string
          logo?: string | null
          name: string
        }
        Update: {
          city?: string | null
          description?: string | null
          id?: string
          logo?: string | null
          name?: string
        }
        Relationships: []
      }
      favorites: {
        Row: {
          created_at: string | null
          favorite_profile_id: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          favorite_profile_id?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          favorite_profile_id?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "favorites_favorite_profile_id_fkey"
            columns: ["favorite_profile_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      feed_events: {
        Row: {
          activity_id: string | null
          challenge_id: string | null
          created_at: string | null
          event_type: string
          id: string
          recognition_id: string | null
          user_id: string | null
        }
        Insert: {
          activity_id?: string | null
          challenge_id?: string | null
          created_at?: string | null
          event_type: string
          id?: string
          recognition_id?: string | null
          user_id?: string | null
        }
        Update: {
          activity_id?: string | null
          challenge_id?: string | null
          created_at?: string | null
          event_type?: string
          id?: string
          recognition_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feed_events_activity_id_fkey"
            columns: ["activity_id"]
            isOneToOne: false
            referencedRelation: "activities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feed_events_challenge_id_fkey"
            columns: ["challenge_id"]
            isOneToOne: false
            referencedRelation: "challenges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feed_events_recognition_id_fkey"
            columns: ["recognition_id"]
            isOneToOne: false
            referencedRelation: "recognitions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feed_events_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      recognitions: {
        Row: {
          category: string | null
          date: string | null
          description: string | null
          id: string
          image: string | null
          reason: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          category?: string | null
          date?: string | null
          description?: string | null
          id?: string
          image?: string | null
          reason?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          category?: string | null
          date?: string | null
          description?: string | null
          id?: string
          image?: string | null
          reason?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "recognitions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          attitudes: string[] | null
          avatar: string | null
          bio: string | null
          city: string | null
          id: string
          interests: string[] | null
          name: string
          points: number | null
          skills: string[] | null
        }
        Insert: {
          attitudes?: string[] | null
          avatar?: string | null
          bio?: string | null
          city?: string | null
          id?: string
          interests?: string[] | null
          name: string
          points?: number | null
          skills?: string[] | null
        }
        Update: {
          attitudes?: string[] | null
          avatar?: string | null
          bio?: string | null
          city?: string | null
          id?: string
          interests?: string[] | null
          name?: string
          points?: number | null
          skills?: string[] | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
