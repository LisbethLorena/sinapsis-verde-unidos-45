
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, LogIn } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white bg-opacity-95 backdrop-blur-sm shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-sinapsis-green flex items-center">
          <span className="text-sinapsis-green-dark">Sinap</span>
          <span className="text-sinapsis-blue">sis</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/explore" className="navbar-link">
            Explorar
          </Link>
          <Link to="/challenges" className="navbar-link">
            Retos
          </Link>
          <Link to="/activities" className="navbar-link">
            Voluntariado
          </Link>
          <Link to="/recognitions" className="navbar-link">
            Reconocimientos
          </Link>
          <Link to="/companies" className="navbar-link">
            Empresas
          </Link>

          <div className="flex space-x-3">
            <Button variant="outline" size="sm" asChild>
              <Link to="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Entrar
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/register">
                <User className="mr-2 h-4 w-4" />
                Registro
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-16 px-6">
          <div className="flex flex-col space-y-6 text-lg">
            <Link
              to="/explore"
              className="py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Explorar
            </Link>
            <Link
              to="/challenges"
              className="py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Retos
            </Link>
            <Link
              to="/activities"
              className="py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Voluntariado
            </Link>
            <Link
              to="/recognitions"
              className="py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Reconocimientos
            </Link>
            <Link
              to="/companies"
              className="py-2 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Empresas
            </Link>

            <div className="flex flex-col space-y-4 pt-4">
              <Button variant="outline" asChild>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <LogIn className="mr-2 h-4 w-4" />
                  Entrar
                </Link>
              </Button>
              <Button asChild>
                <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                  <User className="mr-2 h-4 w-4" />
                  Registro
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
