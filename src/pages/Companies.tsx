
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanyCard from "@/components/CompanyCard";
import { companies } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter companies based on search
  const filteredCompanies = companies.filter((company) => {
    return (
      searchTerm === "" ||
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.sector.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12 gap-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Empresas con propósito</h1>
              <p className="text-gray-600">
                Organizaciones comprometidas con el medio ambiente que proponen retos a la comunidad.
              </p>
            </div>
            
            <Button size="lg" asChild>
              <a href="/company-register">Registra tu empresa</a>
            </Button>
          </div>
          
          {/* Search */}
          <div className="mb-8 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Buscar empresas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
          
          {filteredCompanies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">
                No se encontraron empresas que coincidan con tu búsqueda.
              </p>
              <Button variant="outline" onClick={() => setSearchTerm("")}>
                Ver todas las empresas
              </Button>
            </div>
          )}
          
          {/* Join as company */}
          <div className="mt-16 bg-gradient-to-r from-sinapsis-blue to-sinapsis-green rounded-lg p-8 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">¿Tienes una empresa con propósito?</h2>
                <p className="max-w-2xl">
                  Únete a Sinapsis para publicar retos ambientales, conectar con personas
                  talentosas y comprometidas, y potenciar el impacto positivo de tu organización.
                </p>
              </div>
              
              <Button size="lg" variant="outline" className="bg-white text-sinapsis-green hover:bg-gray-100" asChild>
                <a href="/company-register">Registrar mi empresa</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Companies;
