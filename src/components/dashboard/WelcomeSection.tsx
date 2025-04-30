
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { User } from "@/lib/types";

interface WelcomeSectionProps {
  user: User | null;
  onSignOut: () => Promise<void>;
  motivationalPhrase: string;
}

const WelcomeSection = ({ user, onSignOut, motivationalPhrase }: WelcomeSectionProps) => {
  if (!user) return null;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold mb-1">¡Bienvenida, {user.name}!</h1>
            <p className="text-gray-600 italic">{motivationalPhrase}</p>
          </div>
        </div>
        <Button variant="outline" onClick={onSignOut} className="flex items-center">
          <LogOut className="mr-2 h-4 w-4" />
          Cerrar sesión
        </Button>
      </div>
    </div>
  );
};

export default WelcomeSection;
