
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Clock, Users } from "lucide-react";
import { Activity } from "@/lib/types";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface ActivityCardProps {
  activity: Activity;
  onInterest?: (activityId: number) => void;
  isInterested?: boolean;
}

const ActivityCard = ({ activity, onInterest, isInterested = false }: ActivityCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "d 'de' MMMM, yyyy", { locale: es });
  };

  const handleInterest = () => {
    if (onInterest) {
      onInterest(activity.id);
    }
  };

  return (
    <Card className="overflow-hidden shadow-sm card-hover">
      <div className="relative h-48">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <Badge className="bg-sinapsis-blue-light text-sinapsis-blue-dark">
            {activity.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-5">
        <h3 className="text-lg font-bold mb-2">{activity.title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {activity.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-2 text-gray-500" />
            <span>{formatDate(activity.date)}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Clock className="w-4 h-4 mr-2 text-gray-500" />
            <span>{activity.duration}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <MapPin className="w-4 h-4 mr-2 text-gray-500" />
            <span>{activity.location}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Users className="w-4 h-4 mr-2 text-gray-500" />
            <span>
              {activity.interestedUsers.length} / {activity.participants} participantes
            </span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">
            Organiza: {activity.organizer}
          </span>
          
          <Button 
            onClick={handleInterest}
            variant={isInterested ? "default" : "outline"}
          >
            {isInterested ? "Interesado" : "Me interesa"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
