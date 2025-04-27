
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Activity } from "@/lib/types";

interface SuggestedActivitiesCardProps {
  activities: Activity[];
}

const SuggestedActivitiesCard = ({ activities }: SuggestedActivitiesCardProps) => {
  return (
    <Card className="col-span-full md:col-span-2 lg:col-span-1 bg-gradient-to-br from-sinapsis-beige-light to-white">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-sinapsis-green" />
          <h3 className="text-lg font-semibold">Voluntariados sugeridos</h3>
        </div>
        <div className="space-y-4">
          {activities.map(activity => (
            <div key={activity.id} className="bg-white/80 rounded-lg p-4">
              <h4 className="font-medium mb-1">{activity.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{activity.category}</p>
              <Button variant="outline" size="sm">Me interesa</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SuggestedActivitiesCard;
