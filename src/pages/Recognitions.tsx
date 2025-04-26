
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecognitionCard from "@/components/RecognitionCard";
import { Badge } from "@/components/ui/badge";
import { recognitions, users } from "@/lib/mock-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Recognitions = () => {
  // Get top users by points
  const topUsers = [...users]
    .sort((a, b) => b.points - a.points)
    .slice(0, 10);
  
  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-4">Reconocimiento público</h1>
          <p className="text-gray-600 mb-8">
            Celebramos a las personas que están generando un impacto positivo en
            el medio ambiente a través de su participación e iniciativa.
          </p>
          
          <Tabs defaultValue="highlights">
            <TabsList className="mb-8">
              <TabsTrigger value="highlights">Destacados</TabsTrigger>
              <TabsTrigger value="leaderboard">Tabla de puntos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="highlights">
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-6">Reconocimientos destacados</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {recognitions.map((recognition) => (
                    <RecognitionCard key={recognition.id} recognition={recognition} />
                  ))}
                </div>
              </div>
              
              <div className="bg-sinapsis-beige-light rounded-lg p-8 mt-12">
                <h2 className="text-xl font-semibold mb-4">¿Cómo obtener reconocimiento?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="w-16 h-16 bg-sinapsis-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-sinapsis-green-dark text-2xl font-bold">1</span>
                    </div>
                    <h3 className="font-semibold mb-2">Participa activamente</h3>
                    <p className="text-gray-600 text-sm">
                      Únete a retos, comparte ideas y contribuye con tus habilidades a
                      proyectos ambientales.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="w-16 h-16 bg-sinapsis-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-sinapsis-blue-dark text-2xl font-bold">2</span>
                    </div>
                    <h3 className="font-semibold mb-2">Genera impacto</h3>
                    <p className="text-gray-600 text-sm">
                      Aporta soluciones innovadoras y efectivas a los retos
                      ambientales propuestos.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="w-16 h-16 bg-sinapsis-beige rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-sinapsis-green-dark text-2xl font-bold">3</span>
                    </div>
                    <h3 className="font-semibold mb-2">Crea conexiones</h3>
                    <p className="text-gray-600 text-sm">
                      Fomenta la colaboración y ayuda a conectar personas y
                      organizaciones con intereses comunes.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="leaderboard">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                  <h2 className="text-xl font-semibold">Tabla de puntos</h2>
                  <p className="text-sm text-gray-600">
                    Los puntos se acumulan por participación en retos, actividades de
                    voluntariado y contribuciones destacadas.
                  </p>
                </div>
                
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">Posición</TableHead>
                        <TableHead>Usuario</TableHead>
                        <TableHead>Intereses</TableHead>
                        <TableHead className="text-right">Puntos</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {topUsers.map((user, index) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">
                            {index + 1}
                            {index < 3 && (
                              <span className="ml-1">
                                {index === 0 && "🥇"}
                                {index === 1 && "🥈"}
                                {index === 2 && "🥉"}
                              </span>
                            )}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Avatar className="h-8 w-8 mr-2">
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-semibold">{user.name}</div>
                                <div className="text-xs text-gray-500">{user.city}</div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {user.interests.slice(0, 2).map((interest, i) => (
                                <Badge
                                  key={i}
                                  variant="outline"
                                  className="text-xs bg-sinapsis-beige-light"
                                >
                                  {interest}
                                </Badge>
                              ))}
                              {user.interests.length > 2 && (
                                <Badge variant="outline" className="text-xs">
                                  +{user.interests.length - 2}
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="text-right font-bold">
                            {user.points}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="p-6 bg-sinapsis-beige-light">
                  <h3 className="font-semibold mb-3">¿Cómo obtener puntos?</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-sinapsis-green-light text-sinapsis-green-dark flex items-center justify-center mr-2 text-xs font-bold">
                        +50
                      </span>
                      Completar tu perfil
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-sinapsis-green-light text-sinapsis-green-dark flex items-center justify-center mr-2 text-xs font-bold">
                        +100
                      </span>
                      Participar en un reto
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-sinapsis-green-light text-sinapsis-green-dark flex items-center justify-center mr-2 text-xs font-bold">
                        +75
                      </span>
                      Asistir a una actividad de voluntariado
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-sinapsis-green-light text-sinapsis-green-dark flex items-center justify-center mr-2 text-xs font-bold">
                        +200
                      </span>
                      Completar un reto exitosamente
                    </li>
                    <li className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-sinapsis-green-light text-sinapsis-green-dark flex items-center justify-center mr-2 text-xs font-bold">
                        +300
                      </span>
                      Recibir un reconocimiento destacado
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Recognitions;
