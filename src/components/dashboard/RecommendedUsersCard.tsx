
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { User } from "@/lib/types";

interface RecommendedUsersCardProps {
  users: User[];
}

const RecommendedUsersCard = ({ users }: RecommendedUsersCardProps) => {
  return (
    <Card className="col-span-full md:col-span-2 lg:col-span-1">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-sinapsis-blue" />
          <h3 className="text-lg font-semibold">Perfiles recomendados</h3>
        </div>
        <div className="space-y-4">
          {users.map(user => (
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
  );
};

export default RecommendedUsersCard;
