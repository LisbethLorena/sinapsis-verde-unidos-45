
import { useState } from "react";
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
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UserProfileCard from "@/components/UserProfileCard";
import { users } from "@/lib/mock-data";
import { Search, X } from "lucide-react";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  
  // Extract all unique interests and skills
  const allInterests = Array.from(
    new Set(users.flatMap((user) => user.interests))
  ).sort();
  
  const allSkills = Array.from(
    new Set(users.flatMap((user) => user.skills))
  ).sort();
  
  // Filter users based on search and filters
  const filteredUsers = users.filter((user) => {
    // Search filter
    const searchMatch =
      searchTerm === "" ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.bio.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Interest filter
    const interestMatch =
      selectedInterests.length === 0 ||
      selectedInterests.some((interest) => user.interests.includes(interest));
    
    // Skill filter
    const skillMatch =
      selectedSkills.length === 0 ||
      selectedSkills.some((skill) => user.skills.includes(skill));
    
    return searchMatch && interestMatch && skillMatch;
  });
  
  // Add or remove interest from filter
  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };
  
  // Add or remove skill from filter
  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };
  
  // Save user as favorite
  const handleSaveUser = (userId: string) => {
    console.log(`User ${userId} saved as favorite`);
    // In a real app, this would save to user data
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedInterests([]);
    setSelectedSkills([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-8">Explora perfiles</h1>
          
          {/* Search and Filter */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Search */}
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Buscar por nombre, ciudad o biografía..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              {/* Interest filter */}
              <div>
                <Select onValueChange={(value) => toggleInterest(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filtrar por interés" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {allInterests.map((interest) => (
                        <SelectItem key={interest} value={interest}>
                          {interest}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Skill filter */}
              <div>
                <Select onValueChange={(value) => toggleSkill(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filtrar por habilidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {allSkills.map((skill) => (
                        <SelectItem key={skill} value={skill}>
                          {skill}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Active filters */}
            {(selectedInterests.length > 0 || selectedSkills.length > 0) && (
              <div className="mt-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-gray-500">Filtros activos:</span>
                  
                  {selectedInterests.map((interest) => (
                    <Badge
                      key={`interest-${interest}`}
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => toggleInterest(interest)}
                    >
                      {interest}
                      <X className="ml-1 w-3 h-3" />
                    </Badge>
                  ))}
                  
                  {selectedSkills.map((skill) => (
                    <Badge
                      key={`skill-${skill}`}
                      variant="outline"
                      className="cursor-pointer"
                      onClick={() => toggleSkill(skill)}
                    >
                      {skill}
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
              {filteredUsers.length} perfiles encontrados
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredUsers.map((user) => (
              <UserProfileCard
                key={user.id}
                user={user}
                onSave={handleSaveUser}
              />
            ))}
          </div>
          
          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">
                No se encontraron perfiles que coincidan con los filtros seleccionados.
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

export default Explore;
