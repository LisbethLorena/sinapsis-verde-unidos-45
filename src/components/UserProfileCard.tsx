
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { User } from "@/lib/types";

interface UserProfileCardProps {
  user: User;
  isSaved?: boolean;
  onSave?: (userId: string) => void;
}

const UserProfileCard = ({ user, isSaved = false, onSave }: UserProfileCardProps) => {
  const [saved, setSaved] = useState(isSaved);
  
  const handleSave = () => {
    setSaved(!saved);
    if (onSave) {
      onSave(user.id);
    }
  };

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative">
        <div className="h-24 bg-gradient-to-r from-sinapsis-green-light to-sinapsis-blue-light"></div>
        <Avatar className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 border-4 border-white">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
        </Avatar>
      </div>
      
      <CardContent className="pt-14 pb-6">
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold">
            <Link to={`/profile/${user.id}`} className="hover:text-sinapsis-green">
              {user.name}
            </Link>
          </h3>
          <p className="text-sm text-gray-500">{user.city}</p>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{user.bio}</p>
        
        <div className="mb-4">
          <h4 className="text-xs font-semibold mb-1 uppercase text-gray-500">Intereses</h4>
          <div className="flex flex-wrap gap-1">
            {user.interests.slice(0, 3).map((interest, i) => (
              <Badge key={i} variant="outline" className="text-xs bg-sinapsis-beige-light">
                {interest}
              </Badge>
            ))}
            {user.interests.length > 3 && (
              <Badge variant="outline" className="text-xs bg-sinapsis-beige-light">
                +{user.interests.length - 3}
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-5">
          <div className="text-sm">
            <span className="font-semibold">{user.points}</span>{" "}
            <span className="text-xs text-gray-500">puntos</span>
          </div>
          
          <Button variant="ghost" size="sm" onClick={handleSave} className={saved ? "text-sinapsis-green" : ""}>
            <Bookmark className={`h-5 w-5 ${saved ? "fill-current" : ""}`} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
