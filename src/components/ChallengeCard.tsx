
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Challenge } from "@/lib/types";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { companies } from "@/lib/mock-data";

interface ChallengeCardProps {
  challenge: Challenge;
}

const ChallengeCard = ({ challenge }: ChallengeCardProps) => {
  const company = companies.find((c) => c.id === challenge.company);
  
  // Format dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "d 'de' MMMM, yyyy", { locale: es });
  };
  
  // Determine status color
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "activo":
        return "bg-green-100 text-green-800";
      case "próximamente":
        return "bg-blue-100 text-blue-800";
      case "completado":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col card-hover">
      <div className="relative h-48">
        <img
          src={challenge.image}
          alt={challenge.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge className={getStatusColor(challenge.status)}>
            {challenge.status}
          </Badge>
        </div>
      </div>
      
      <CardContent className="flex-grow flex flex-col py-5">
        <div className="mb-3">
          <div className="flex items-center mb-2">
            {company && (
              <img
                src={company.logo}
                alt={company.name}
                className="w-6 h-6 rounded-full mr-2"
              />
            )}
            <span className="text-xs text-gray-500">{company?.name}</span>
          </div>
          
          <h3 className="font-bold text-lg mb-2">
            <Link to={`/challenges/${challenge.id}`} className="hover:text-sinapsis-green">
              {challenge.title}
            </Link>
          </h3>
          
          <p className="text-sm text-gray-600 line-clamp-3 mb-3">
            {challenge.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          <Badge variant="secondary" className="text-xs">
            {challenge.category}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {challenge.contributionType}
          </Badge>
          <Badge variant="outline" className="text-xs">
            {challenge.difficulty}
          </Badge>
        </div>
        
        <div className="flex items-center text-xs text-gray-500 mb-4 mt-auto">
          <Calendar className="w-4 h-4 mr-1" />
          <span>
            {formatDate(challenge.startDate)} - {formatDate(challenge.endDate)}
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">
            {challenge.participants.length} participantes
          </span>
          
          <Button asChild size="sm">
            <Link to={`/challenges/${challenge.id}`}>Ver reto</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChallengeCard;
