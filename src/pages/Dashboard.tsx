import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import DashboardFeedEvent from "@/components/DashboardFeedEvent";
import { users, challenges, activities, recognitions, feedActivities } from "@/lib/mock-data";
import type { User, Challenge, Activity, Recognition, FeedActivity } from "@/lib/types";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import AchievementsCard from "@/components/dashboard/AchievementsCard";
import ChallengesCard from "@/components/dashboard/ChallengesCard";
import SuggestedActivitiesCard from "@/components/dashboard/SuggestedActivitiesCard";
import RecommendedUsersCard from "@/components/dashboard/RecommendedUsersCard";

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userChallenges, setUserChallenges] = useState<Challenge[]>([]);
  const [latestRecognition, setLatestRecognition] = useState<Recognition | null>(null);
  const [suggestedActivities, setSuggestedActivities] = useState<Activity[]>([]);
  const [recommendedUsers, setRecommendedUsers] = useState<User[]>([]);
  const [recentActivities, setRecentActivities] = useState<FeedActivity[]>([]);
  const { signOut } = useAuth();

  const motivationalPhrases = [
    "Cada pequeña acción cuenta para un futuro mejor",
    "Juntos construimos un mundo más sostenible",
    "Tu compromiso inspira al cambio",
    "Ser parte del cambio comienza hoy"
  ];

  const randomPhrase = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];

  useEffect(() => {
    // Simulate fetching user data (Ana Martinez)
    const currentUser = users.find(u => u.id === "1");
    setUser(currentUser || null);

    if (currentUser) {
      // Get user challenges
      const userChallenges = challenges.filter(c => 
        currentUser.participatingChallenges.includes(c.id)
      ).slice(0, 3);
      setUserChallenges(userChallenges);

      // Get latest recognition
      const userRecognitions = recognitions.filter(r => r.user === currentUser.id);
      setLatestRecognition(userRecognitions[0] || null);

      // Get suggested activities based on user interests
      const suggestedActivities = activities
        .filter(activity => 
          currentUser.interests.some(interest => 
            activity.title.toLowerCase().includes(interest.toLowerCase())
          )
        )
        .slice(0, 2);
      setSuggestedActivities(suggestedActivities);

      // Get recommended users based on shared interests
      const recommendedUsers = users
        .filter(u => 
          u.id !== currentUser.id &&
          u.interests.some(interest => 
            currentUser.interests.includes(interest)
          )
        )
        .slice(0, 3);
      setRecommendedUsers(recommendedUsers);

      // Get recent activities
      const recentActivities = feedActivities
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5);
      setRecentActivities(recentActivities);
    }
  }, []);

  const handleSignOut = async () => {
    await signOut();
  };

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <WelcomeSection 
        user={user}
        onSignOut={handleSignOut}
        motivationalPhrase={randomPhrase}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AchievementsCard user={user} latestRecognition={latestRecognition} />
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
