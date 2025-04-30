
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/auth";
import { Card, CardContent } from "@/components/ui/card";
import DashboardFeedEvent from "@/components/DashboardFeedEvent";
import { challenges, activities, recognitions, feedActivities } from "@/lib/mock-data";
import type { Challenge, Activity, Recognition, FeedActivity } from "@/lib/types";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import AchievementsCard from "@/components/dashboard/AchievementsCard";
import ChallengesCard from "@/components/dashboard/ChallengesCard";
import SuggestedActivitiesCard from "@/components/dashboard/SuggestedActivitiesCard";
import RecommendedUsersCard from "@/components/dashboard/RecommendedUsersCard";
import { useProfile, UserProfile } from "@/hooks/useProfile";
import { Loader2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [userChallenges, setUserChallenges] = useState<Challenge[]>([]);
  const [latestRecognition, setLatestRecognition] = useState<Recognition | null>(null);
  const [suggestedActivities, setSuggestedActivities] = useState<Activity[]>([]);
  const [recommendedUsers, setRecommendedUsers] = useState<any[]>([]);
  const [recentActivities, setRecentActivities] = useState<FeedActivity[]>([]);
  
  const { user, signOut } = useAuth();
  const { getProfile } = useProfile();
  const navigate = useNavigate();

  const motivationalPhrases = [
    "Cada pequeña acción cuenta para un futuro mejor",
    "Juntos construimos un mundo más sostenible",
    "Tu compromiso inspira al cambio",
    "Ser parte del cambio comienza hoy"
  ];

  const randomPhrase = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];

  // Fetch user profile and related data
  useEffect(() => {
    const loadUserData = async () => {
      if (!user) {
        navigate('/');
        return;
      }

      setLoading(true);
      try {
        // Get user profile from Supabase
        const profile = await getProfile(user.id);
        if (!profile) {
          toast({
            variant: "destructive",
            title: "Error",
            description: "No se pudo cargar tu perfil. Por favor intenta de nuevo.",
          });
          return;
        }
        setUserProfile(profile);

        // Load other related data from mock data (for now)
        // In a real application, we would fetch this data from Supabase as well
        
        // Get user challenges (using mock data for now)
        const userChallenges = challenges.slice(0, 3);
        setUserChallenges(userChallenges);

        // Get latest recognition (using mock data for now)
        const userRecognitions = recognitions.filter(r => r.user === "1");
        setLatestRecognition(userRecognitions[0] || null);

        // Get suggested activities based on user interests (using mock data for now)
        const suggestedActivities = activities.slice(0, 2);
        setSuggestedActivities(suggestedActivities);

        // Get recommended users (using mock data for now)
        const recommendedUsers = [];
        setRecommendedUsers(recommendedUsers);

        // Get recent activities (using mock data for now)
        const recentActivities = feedActivities.slice(0, 5);
        setRecentActivities(recentActivities);
      } catch (error) {
        console.error("Error loading user data:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Hubo un problema cargando tus datos. Por favor intenta de nuevo.",
        });
      } finally {
        setLoading(false);
      }
    };

    loadUserData();
  }, [user, navigate, getProfile]);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        variant: "destructive",
        title: "Error al cerrar sesión",
        description: "Hubo un problema al cerrar tu sesión. Por favor intenta de nuevo.",
      });
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-sinapsis-green" />
      </div>
    );
  }

  if (!userProfile) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <WelcomeSection 
        user={userProfile}
        onSignOut={handleSignOut}
        motivationalPhrase={randomPhrase}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AchievementsCard user={userProfile} latestRecognition={latestRecognition} />
        <ChallengesCard challenges={userChallenges} />
        <SuggestedActivitiesCard activities={suggestedActivities} />
        <RecommendedUsersCard users={recommendedUsers} />

        {/* Recent Activity Feed Card */}
        <Card className="col-span-full">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Actividad reciente</h3>
            <div className="space-y-4">
              {recentActivities.map(activity => (
                <DashboardFeedEvent key={activity.id} activity={activity} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
