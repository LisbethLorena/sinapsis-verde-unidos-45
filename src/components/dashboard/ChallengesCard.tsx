
import { Card, CardContent } from "@/components/ui/card";
import { Star, Calendar } from "lucide-react";
import { Challenge } from "@/lib/types";
import { Link } from "react-router-dom";

interface ChallengesCardProps {
  challenges: Challenge[];
}

const ChallengesCard = ({ challenges }: ChallengesCardProps) => {
  return (
    <Card className="col-span-full md:col-span-2 lg:col-span-1">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-sinapsis-blue" />
          <h3 className="text-lg font-semibold">Mis retos</h3>
        </div>
        <div className="space-y-4">
          {challenges.map(challenge => (
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
  );
};

export default ChallengesCard;
