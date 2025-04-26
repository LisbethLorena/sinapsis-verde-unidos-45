
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { challenges, companies, users } from "@/lib/mock-data";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar, Clock, MapPin, Award } from "lucide-react";

const ChallengeDetail = () => {
  const { id } = useParams();
  const challengeId = parseInt(id || "1");
  const challenge = challenges.find((c) => c.id === challengeId);
  const company = challenge ? companies.find((c) => c.id === challenge.company) : null;
  const participants = challenge
    ? users.filter((user) => challenge.participants.includes(user.id))
    : [];
  
  const [isParticipating, setIsParticipating] = useState(false);
  
  // Format dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "d 'de' MMMM, yyyy", { locale: es });
  };
  
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };
  
  // Calculate duration in days
  const calculateDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
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
  
  // Handle participate button
  const handleParticipate = () => {
    setIsParticipating(!isParticipating);
  };

  if (!challenge || !company) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-6 py-12 flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Reto no encontrado</h1>
            <p className="mb-4 text-gray-600">El reto que buscas no existe o no está disponible.</p>
            <Button asChild>
              <a href="/challenges">Ver otros retos</a>
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
      
      <main className="flex-grow">
        <div className="relative h-80">
          <img
            src={challenge.image}
            alt={challenge.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6">
              <Badge className={`mb-4 ${getStatusColor(challenge.status)}`}>
                {challenge.status}
              </Badge>
              <h1 className="text-4xl font-bold text-white mb-4 max-w-3xl">
                {challenge.title}
              </h1>
              <div className="flex items-center">
                {company && (
                  <>
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-8 h-8 rounded-full bg-white p-1"
                    />
                    <span className="text-white ml-2">{company.name}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Challenge Description */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Descripción del reto</h2>
                <p className="text-gray-700 mb-6">{challenge.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Detalles</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Badge variant="outline" className="mt-0.5 mr-2">
                          Aporte
                        </Badge>
                        <span>{challenge.contributionType}</span>
                      </li>
                      <li className="flex items-start">
                        <Badge variant="outline" className="mt-0.5 mr-2">
                          Categoría
                        </Badge>
                        <span>{challenge.category}</span>
                      </li>
                      <li className="flex items-start">
                        <Badge variant="outline" className="mt-0.5 mr-2">
                          Dificultad
                        </Badge>
                        <span>{challenge.difficulty}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Fechas</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-gray-500" />
                        <div>
                          <span className="text-sm text-gray-500">Inicio: </span>
                          <span>{formatDate(challenge.startDate)}</span>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-gray-500" />
                        <div>
                          <span className="text-sm text-gray-500">Fin: </span>
                          <span>{formatDate(challenge.endDate)}</span>
                        </div>
                      </li>
                      <li className="flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-gray-500" />
                        <div>
                          <span className="text-sm text-gray-500">Duración: </span>
                          <span>
                            {calculateDuration(challenge.startDate, challenge.endDate)} días
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Challenge Rewards */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Recompensas</h2>
                <div className="flex items-start">
                  <Award className="text-yellow-500 w-8 h-8 mr-3" />
                  <div>
                    <h3 className="font-medium mb-1">Reconocimiento por tu contribución:</h3>
                    <p className="text-gray-700">{challenge.reward}</p>
                    <div className="mt-3 text-sm text-gray-500">
                      Además, obtendrás +100 puntos en tu perfil por participar y +200 puntos adicionales por completar el reto exitosamente.
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Participants */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Participantes</h2>
                  <span className="text-sm text-gray-500">
                    {participants.length} participantes
                  </span>
                </div>
                
                <div className="space-y-4">
                  {participants.map((user) => (
                    <div key={user.id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{user.name}</h3>
                          <div className="text-xs text-gray-500 flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {user.city}
                          </div>
                        </div>
                      </div>
                      
                      <div className="hidden md:flex items-center space-x-2">
                        {user.skills.slice(0, 2).map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              {/* Company Info */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Sobre la organización</h2>
                <div className="flex items-center mb-4">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-16 h-16 object-contain mr-4"
                  />
                  <div>
                    <h3 className="font-medium">{company.name}</h3>
                    <p className="text-sm text-gray-500">{company.sector}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{company.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{company.city}</span>
                </div>
                
                <Button variant="outline" className="w-full" asChild>
                  <a
                    href={company.website.startsWith("http") ? company.website : `http://${company.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visitar sitio web
                  </a>
                </Button>
              </div>
              
              {/* Location */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Ubicación</h2>
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 mr-2 text-sinapsis-green" />
                  <span>{challenge.location}</span>
                </div>
                <div className="h-48 bg-gray-200 rounded-md">
                  <div className="h-full w-full flex items-center justify-center text-gray-500">
                    Mapa no disponible
                  </div>
                </div>
              </div>
              
              {/* Participate */}
              <div className="bg-sinapsis-beige-light rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-3">¿Te interesa este reto?</h2>
                <p className="text-gray-700 mb-4">
                  Únete para aportar tus ideas y habilidades a este proyecto ambiental.
                </p>
                
                <Button
                  onClick={handleParticipate}
                  className="w-full"
                  variant={isParticipating ? "outline" : "default"}
                >
                  {isParticipating ? "Ya participas" : "Participar en el reto"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChallengeDetail;
