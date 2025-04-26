
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ActivityCard from "@/components/ActivityCard";
import { activities } from "@/lib/mock-data";
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

const Activities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [interestedActivities, setInterestedActivities] = useState<string[]>([]);
  
  // Extract all unique categories and locations
  const allCategories = Array.from(
    new Set(activities.map((activity) => activity.category))
  ).sort();
  
  const allLocations = Array.from(
    new Set(activities.map((activity) => activity.location))
  ).sort();
  
  // Filter activities based on search and filters
  const filteredActivities = activities.filter((activity) => {
    // Search filter
    const searchMatch =
      searchTerm === "" ||
      activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(activity.category);
    
    // Location filter
    const locationMatch =
      selectedLocations.length === 0 ||
      selectedLocations.includes(activity.location);
    
    return searchMatch && categoryMatch && locationMatch;
  });
  
  // Toggle category filter
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  // Toggle location filter
  const toggleLocation = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter((l) => l !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };
  
  // Handle interest in activity
  const handleInterest = (activityId: string) => {
    if (interestedActivities.includes(activityId)) {
      setInterestedActivities(interestedActivities.filter((id) => id !== activityId));
    } else {
      setInterestedActivities([...interestedActivities, activityId]);
    }
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedLocations([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-8">Voluntariados ambientales</h1>
          
          {/* Search and Filter */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Search */}
              <div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Buscar actividades..."
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
              
              {/* Location filter */}
              <div>
                <Select onValueChange={(value) => toggleLocation(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Ubicación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {allLocations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Active filters */}
            {(selectedCategories.length > 0 || selectedLocations.length > 0) && (
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
                  
                  {selectedLocations.map((location) => (
                    <Badge
                      key={`location-${location}`}
                      variant="outline"
                      className="cursor-pointer"
                      onClick={() => toggleLocation(location)}
                    >
                      {location}
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
              {filteredActivities.length} actividades encontradas
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                onInterest={handleInterest}
                isInterested={interestedActivities.includes(activity.id)}
              />
            ))}
          </div>
          
          {filteredActivities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">
                No se encontraron actividades que coincidan con los filtros seleccionados.
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

export default Activities;
