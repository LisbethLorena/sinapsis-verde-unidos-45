
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Calendar, Star, Users } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import DashboardFeedEvent from "@/components/DashboardFeedEvent";
import { users, challenges, activities, recognitions, feedActivities } from "@/lib/mock-data";
import type { User, Challenge, Activity, Recognition, FeedActivity } from "@/lib/types";
import { useEffect, useState } from "react";

const Dashboard = () => {
  // Using Ana Martinez's data (id: "1")
  const [user, setUser] = useState<User | null>(null);
  const [userChallenges, setUserChallenges] = useState<Challenge[]>([]);
  const [latestRecognition, setLatestRecognition] = useState<Recognition | null>(null);
  const [suggestedActivities, setSuggestedActivities] = useState<Activity[]>([]);
  const [recommendedUsers, setRecommendedUsers] = useState<User[]>([]);
  const [recentActivities, setRecentActivities] = useState<FeedActivity[]>([]);

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

  const motivationalPhrases = [
    "Cada pequeña acción cuenta para un futuro mejor",
    "Juntos construimos un mundo más sostenible",
    "Tu compromiso inspira al cambio",
    "Ser parte del cambio comienza hoy"
  ];

  const randomPhrase = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold mb-1">¡Bienvenida, {user.name}!</h1>
            <p className="text-gray-600 italic">{randomPhrase}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Points and Recognition Card */}
        <Card className="col-span-full md:col-span-2 lg:col-span-1 bg-gradient-to-br from-sinapsis-green-light to-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-sinapsis-green" />
              <div>
                <h3 className="text-lg font-semibold">Tus logros</h3>
                <p className="text-2xl font-bold text-sinapsis-green">{user.points} puntos</p>
              </div>
            </div>
            
            {latestRecognition && (
              <div>
                <h4 className="text-sm font-medium mb-2">Último reconocimiento:</h4>
                <div className="bg-white/80 rounded-lg p-4">
                  <Badge className="mb-2">{latestRecognition.category}</Badge>
                  <p className="font-medium">{latestRecognition.title}</p>
                  <p className="text-sm text-gray-600">{latestRecognition.description}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* My Challenges Card */}
        <Card className="col-span-full md:col-span-2 lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-sinapsis-blue" />
              <h3 className="text-lg font-semibold">Mis retos</h3>
            </div>
            <div className="space-y-4">
              {userChallenges.map(challenge => (
                <div key={challenge.id} className="group hover:bg-gray-50 rounded-lg p-3 transition-colors">
                  <h4 className="font-medium group-hover:text-sinapsis-green">{challenge.title}</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Inicio: {new Date(challenge.startDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Suggested Activities Card */}
        <Card className="col-span-full md:col-span-2 lg:col-span-1 bg-gradient-to-br from-sinapsis-beige-light to-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-sinapsis-green" />
              <h3 className="text-lg font-semibold">Voluntariados sugeridos</h3>
            </div>
            <div className="space-y-4">
              {suggestedActivities.map(activity => (
                <div key={activity.id} className="bg-white/80 rounded-lg p-4">
                  <h4 className="font-medium mb-1">{activity.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{activity.category}</p>
                  <Button variant="outline" size="sm">Me interesa</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommended Users Card */}
        <Card className="col-span-full md:col-span-2 lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-sinapsis-blue" />
              <h3 className="text-lg font-semibold">Perfiles recomendados</h3>
            </div>
            <div className="space-y-4">
              {recommendedUsers.map(user => (
                <div key={user.id} className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-medium">{user.name}</h4>
                    <p className="text-sm text-gray-600">{user.city}</p>
                  </div>
                  <Button variant="ghost" size="sm">Ver perfil</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

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
