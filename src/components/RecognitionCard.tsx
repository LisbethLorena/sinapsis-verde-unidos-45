
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Recognition } from "@/lib/types";
import { users } from "@/lib/mock-data";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Link } from "react-router-dom";
import { Award } from "lucide-react";

interface RecognitionCardProps {
  recognition: Recognition;
}

const RecognitionCard = ({ recognition }: RecognitionCardProps) => {
  const user = users.find((u) => u.id === recognition.user);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "MMMM yyyy", { locale: es });
  };
  
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  if (!user) return null;

  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative">
        <div className="h-32 bg-gradient-to-r from-sinapsis-blue-light to-sinapsis-green-light flex items-center justify-center">
          <Award className="w-16 h-16 text-white opacity-25" />
        </div>
      </div>
      
      <CardContent className="p-6 relative">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1 border border-gray-100">
          <Avatar className="w-14 h-14">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
        </div>
        
        <div className="text-center pt-8 mb-4">
          <Badge className="mb-2 bg-sinapsis-beige-light text-sinapsis-green-dark">
            {recognition.category}
          </Badge>
          <h3 className="text-lg font-bold">{recognition.title}</h3>
          <p className="text-sm text-gray-500">{formatDate(recognition.date)}</p>
        </div>
        
        <p className="text-sm text-gray-600 text-center mb-4">{recognition.description}</p>
        
        <div className="text-center">
          <Link
            to={`/profile/${user.id}`}
            className="text-sm font-medium text-sinapsis-blue hover:text-sinapsis-blue-dark"
          >
            {user.name}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecognitionCard;
