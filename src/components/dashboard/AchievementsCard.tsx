
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { Recognition } from "@/lib/types";
import { UserProfile } from "@/hooks/useProfile";

interface AchievementsCardProps {
  user: UserProfile | null;
  latestRecognition: Recognition | null;
}

const AchievementsCard = ({ user, latestRecognition }: AchievementsCardProps) => {
  if (!user) return null;

  return (
    <Card className="col-span-full md:col-span-2 lg:col-span-1 bg-gradient-to-br from-sinapsis-green-light to-white">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-8 h-8 text-sinapsis-green" />
          <div>
            <h3 className="text-lg font-semibold">Tus logros</h3>
            <p className="text-2xl font-bold text-sinapsis-green">{user.points || 0} puntos</p>
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

        {!latestRecognition && (
          <div>
            <p className="text-sm text-gray-600">Aún no tienes reconocimientos. ¡Participa en retos para ganar reconocimientos!</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AchievementsCard;
