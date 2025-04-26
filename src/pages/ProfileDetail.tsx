
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { users, challenges } from "@/lib/mock-data";
import { useState } from "react";
import { MapPin, Award, Bookmark } from "lucide-react";
import ChallengeCard from "@/components/ChallengeCard";

const ProfileDetail = () => {
  const { id } = useParams();
  const userId = parseInt(id || "1");
  const user = users.find((u) => u.id === userId);
  const [saved, setSaved] = useState(false);
  
  // Get user's participating challenges
  const userChallenges = challenges.filter((challenge) =>
    user?.participatingChallenges.includes(challenge.id)
  );
  
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };
  
  // Handle save profile
  const handleSave = () => {
    setSaved(!saved);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-6 py-12 flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Usuario no encontrado</h1>
            <p className="mb-4 text-gray-600">El perfil que buscas no existe o no está disponible.</p>
            <Button asChild>
              <a href="/explore">Ver otros perfiles</a>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-6 py-12">
          {/* Profile Header */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            <div className="h-48 bg-gradient-to-r from-sinapsis-green-light to-sinapsis-blue-light relative">
              <div className="absolute -bottom-20 left-8 md:left-12">
                <Avatar className="w-32 h-32 border-4 border-white">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                </Avatar>
              </div>
              
              <div className="absolute top-4 right-4">
                <Button variant="outline" onClick={handleSave} className={`bg-white ${saved ? "text-sinapsis-green" : ""}`}>
                  <Bookmark className={`h-5 w-5 mr-2 ${saved ? "fill-current" : ""}`} />
                  {saved ? "Guardado" : "Guardar perfil"}
                </Button>
              </div>
            </div>
            
            <div className="pt-24 pb-8 px-8 md:px-12">
              <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{user.city}</span>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0 flex items-center">
                  <div className="bg-sinapsis-beige-light px-4 py-2 rounded-lg text-center">
                    <span className="block text-2xl font-bold text-sinapsis-green">{user.points}</span>
                    <span className="text-xs text-gray-500">puntos</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{user.bio}</p>
            </div>
          </div>
          
          {/* Profile Content */}
          <Tabs defaultValue="about">
            <TabsList className="mb-8">
              <TabsTrigger value="about">Perfil</TabsTrigger>
              <TabsTrigger value="challenges">Retos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-2 space-y-8">
                  {/* Interests */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Intereses</h2>
                    <div className="flex flex-wrap gap-2">
                      {user.interests.map((interest, index) => (
                        <Badge key={index} className="bg-sinapsis-green-light text-sinapsis-green-dark">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Habilidades</h2>
                    <div className="flex flex-wrap gap-2">
                      {user.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="bg-sinapsis-blue-light text-sinapsis-blue-dark">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Attitudes */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Actitudes</h2>
                    <div className="flex flex-wrap gap-2">
                      {user.attitudes.map((attitude, index) => (
                        <Badge key={index} variant="secondary" className="bg-sinapsis-beige text-foreground">
                          {attitude}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  {/* Recognition */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-lg font-semibold mb-4">Reconocimientos</h2>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                        <div>
                          <h3 className="font-medium">Participante destacado</h3>
                          <p className="text-sm text-gray-500">Por participación activa en retos ambientales</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-sinapsis-green mr-3 mt-0.5" />
                        <div>
                          <h3 className="font-medium">Creador de soluciones</h3>
                          <p className="text-sm text-gray-500">Por aportar ideas innovadoras en retos de economía circular</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="challenges">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold">Retos en los que participa</h2>
                
                {userChallenges.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userChallenges.map((challenge) => (
                      <ChallengeCard key={challenge.id} challenge={challenge} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-lg">
                    <p className="text-gray-500">
                      Este usuario aún no participa en ningún reto.
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfileDetail;
