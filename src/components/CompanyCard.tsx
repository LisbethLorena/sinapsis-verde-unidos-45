
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Company } from "@/lib/types";
import { MapPin, ExternalLink } from "lucide-react";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="p-6 flex items-center justify-center bg-sinapsis-beige-light">
        <img
          src={company.logo}
          alt={company.name}
          className="h-24 object-contain"
        />
      </div>
      
      <CardContent className="p-5">
        <h3 className="text-lg font-bold mb-1">
          <Link to={`/companies/${company.id}`} className="hover:text-sinapsis-green">
            {company.name}
          </Link>
        </h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{company.city}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {company.description}
        </p>
        
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="bg-sinapsis-beige-light">
            {company.sector}
          </Badge>
          
          <a
            href={company.website.startsWith("http") ? company.website : `http://${company.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-sinapsis-blue hover:text-sinapsis-blue-dark flex items-center"
          >
            Sitio web
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
