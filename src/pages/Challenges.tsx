
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChallengeCard from "@/components/ChallengeCard";
import { challenges, companies } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";

const Challenges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedContributionTypes, setSelectedContributionTypes] = useState<string[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  
  // Extract all unique categories, contribution types, and difficulties
  const allCategories = Array.from(
    new Set(challenges.map((challenge) => challenge.category))
  ).sort();
  
  const allContributionTypes = Array.from(
    new Set(challenges.map((challenge) => challenge.contributionType))
  ).sort();
  
  const allDifficulties = Array.from(
    new Set(challenges.map((challenge) => challenge.difficulty))
  ).sort();
  
  // Filter challenges based on search and filters
  const filteredChallenges = challenges.filter((challenge) => {
    // Search filter
    const searchMatch =
      searchTerm === "" ||
      challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      challenge.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      challenge.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(challenge.category);
    
    // Contribution type filter
    const contributionMatch =
      selectedContributionTypes.length === 0 ||
      selectedContributionTypes.includes(challenge.contributionType);
    
    // Company filter
    const companyMatch =
      selectedCompanies.length === 0 ||
      selectedCompanies.includes(challenge.company);
    
    // Difficulty filter
    const difficultyMatch =
      selectedDifficulties.length === 0 ||
      selectedDifficulties.includes(challenge.difficulty);
    
    return searchMatch && categoryMatch && contributionMatch && companyMatch && difficultyMatch;
  });
  
  // Toggle category filter
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  // Toggle contribution type filter
  const toggleContributionType = (type: string) => {
    if (selectedContributionTypes.includes(type)) {
      setSelectedContributionTypes(selectedContributionTypes.filter((t) => t !== type));
    } else {
      setSelectedContributionTypes([...selectedContributionTypes, type]);
    }
  };
  
  // Toggle company filter
  const toggleCompany = (companyId: string) => {
    if (selectedCompanies.includes(companyId)) {
      setSelectedCompanies(selectedCompanies.filter((id) => id !== companyId));
    } else {
      setSelectedCompanies([...selectedCompanies, companyId]);
    }
  };
  
  // Toggle difficulty filter
  const toggleDifficulty = (difficulty: string) => {
    if (selectedDifficulties.includes(difficulty)) {
      setSelectedDifficulties(selectedDifficulties.filter((d) => d !== difficulty));
    } else {
      setSelectedDifficulties([...selectedDifficulties, difficulty]);
    }
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedContributionTypes([]);
    setSelectedCompanies([]);
    setSelectedDifficulties([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-8">Retos ambientales</h1>
          
          {/* Search and Filter */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {/* Search */}
              <div className="md:col-span-2 lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Buscar retos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              {/* Category filter */}
              <div>
                <Select onValueChange={(value) => toggleCategory(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {allCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Contribution type filter */}
              <div>
                <Select onValueChange={(value) => toggleContributionType(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Tipo de aporte" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {allContributionTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Difficulty filter */}
              <div>
                <Select onValueChange={(value) => toggleDifficulty(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Dificultad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {allDifficulties.map((difficulty) => (
                        <SelectItem key={difficulty} value={difficulty}>
                          {difficulty}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Active filters */}
            {(selectedCategories.length > 0 ||
              selectedContributionTypes.length > 0 ||
              selectedCompanies.length > 0 ||
              selectedDifficulties.length > 0) && (
              <div className="mt-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-gray-500">Filtros activos:</span>
                  
                  {selectedCategories.map((category) => (
                    <Badge
                      key={`category-${category}`}
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => toggleCategory(category)}
                    >
                      {category}
                      <X className="ml-1 w-3 h-3" />
                    </Badge>
                  ))}
                  
                  {selectedContributionTypes.map((type) => (
                    <Badge
                      key={`type-${type}`}
                      variant="outline"
                      className="cursor-pointer"
                      onClick={() => toggleContributionType(type)}
                    >
                      {type}
                      <X className="ml-1 w-3 h-3" />
                    </Badge>
                  ))}
                  
                  {selectedCompanies.map((companyId) => {
                    const company = companies.find((c) => c.id === companyId);
                    return (
                      company && (
                        <Badge
                          key={`company-${companyId}`}
                          variant="outline"
                          className="cursor-pointer bg-sinapsis-blue-light"
                          onClick={() => toggleCompany(companyId)}
                        >
                          {company.name}
                          <X className="ml-1 w-3 h-3" />
                        </Badge>
                      )
                    );
                  })}
                  
                  {selectedDifficulties.map((difficulty) => (
                    <Badge
                      key={`difficulty-${difficulty}`}
                      variant="outline"
                      className="cursor-pointer"
                      onClick={() => toggleDifficulty(difficulty)}
                    >
                      {difficulty}
                      <X className="ml-1 w-3 h-3" />
                    </Badge>
                  ))}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-sm text-gray-500"
                  >
                    Limpiar filtros
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Results */}
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-lg font-semibold">
              {filteredChallenges.length} retos encontrados
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
          
          {filteredChallenges.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">
                No se encontraron retos que coincidan con los filtros seleccionados.
              </p>
              <Button onClick={clearFilters}>Limpiar filtros</Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Challenges;
