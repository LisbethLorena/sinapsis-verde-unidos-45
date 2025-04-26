
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UserProfileCard from "@/components/UserProfileCard";
import ChallengeCard from "@/components/ChallengeCard";
import ActivityCard from "@/components/ActivityCard";
import RecognitionCard from "@/components/RecognitionCard";
import FeedActivity from "@/components/FeedActivity";
import { users, challenges, activities, recognitions, feedActivities } from "@/lib/mock-data";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
            Conecta con el planeta y con quienes lo cuidan
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>
            Une tus habilidades a proyectos ambientales con propósito y forma parte del cambio que el mundo necesita.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" asChild className="bg-sinapsis-green hover:bg-sinapsis-green-dark text-white px-8 py-6 rounded-md">
              <Link to="/explore">Explorar</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-white text-sinapsis-blue hover:bg-gray-100 border-white px-8 py-6 rounded-md">
              <Link to="/register">Únete</Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">¿Cómo funciona Sinapsis?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-sinapsis-green-light flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sinapsis-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Crea tu perfil</h3>
              <p className="text-gray-600">Comparte tus intereses, habilidades y actitudes para conectar con personas afines y causas que te importen.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-sinapsis-blue-light flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sinapsis-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Explora y participa</h3>
              <p className="text-gray-600">Descubre retos ambientales propuestos por empresas con propósito o actividades de voluntariado que te inspiren.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-sinapsis-beige flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sinapsis-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Genera impacto</h3>
              <p className="text-gray-600">Contribuye a causas ambientales, obten reconocimiento por tu participación y acumula puntos por tus acciones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Profiles */}
      <section className="py-16 px-6 bg-sinapsis-beige-light">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-2xl font-bold">Perfiles destacados</h2>
            <Link to="/explore" className="text-sinapsis-green hover:text-sinapsis-green-dark flex items-center mt-4 md:mt-0">
              Ver todos <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {users.slice(0, 4).map((user) => (
              <UserProfileCard key={user.id} user={user} />
            ))}
          </div>
        </div>
      </section>

      {/* Active Challenges */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-2xl font-bold">Retos ambientales activos</h2>
            <Link to="/challenges" className="text-sinapsis-green hover:text-sinapsis-green-dark flex items-center mt-4 md:mt-0">
              Ver todos <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.slice(0, 3).map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Activities */}
      <section className="py-16 px-6 bg-sinapsis-green-light">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-2xl font-bold">Actividades de voluntariado</h2>
            <Link to="/activities" className="text-sinapsis-green hover:text-sinapsis-green-dark flex items-center mt-4 md:mt-0">
              Ver todas <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.slice(0, 3).map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </section>

      {/* Recognitions and Feed */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Actividad reciente</h2>
                <Link to="/feed" className="text-sinapsis-green hover:text-sinapsis-green-dark flex items-center">
                  Ver todo <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
              
              <div className="space-y-4">
                {feedActivities.slice(0, 5).map((activity) => (
                  <FeedActivity key={activity.id} activity={activity} />
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Reconocimientos</h2>
                <Link to="/recognitions" className="text-sinapsis-green hover:text-sinapsis-green-dark flex items-center">
                  Ver todos <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
              
              <div className="space-y-6">
                {recognitions.slice(0, 2).map((recognition) => (
                  <RecognitionCard key={recognition.id} recognition={recognition} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-sinapsis-blue to-sinapsis-green text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Forma parte del cambio</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Une tus habilidades, tiempo e ideas a proyectos ambientales con propósito 
            y conecta con personas que comparten tu visión por un mundo más sostenible.
          </p>
          <Button size="lg" asChild className="bg-white text-sinapsis-green hover:bg-gray-100 px-8">
            <Link to="/register">Únete a Sinapsis</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
