
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-sinapsis-beige py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sinapsis</h3>
            <p className="text-gray-600 mb-4">
              Conectando personas con propósito a causas ambientales que
              importan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-sinapsis-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-sinapsis-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-sinapsis-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-sinapsis-green">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/explore" className="text-gray-600 hover:text-sinapsis-green">
                  Explorar personas
                </Link>
              </li>
              <li>
                <Link to="/challenges" className="text-gray-600 hover:text-sinapsis-green">
                  Retos ambientales
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-gray-600 hover:text-sinapsis-green">
                  Voluntariado
                </Link>
              </li>
              <li>
                <Link to="/recognitions" className="text-gray-600 hover:text-sinapsis-green">
                  Reconocimientos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Participa</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/register" className="text-gray-600 hover:text-sinapsis-green">
                  Registro personal
                </Link>
              </li>
              <li>
                <Link to="/company-register" className="text-gray-600 hover:text-sinapsis-green">
                  Registro de empresa
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-sinapsis-green">
                  Inicia sesión
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-sinapsis-green">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sinapsis-green">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sinapsis-green">
                  Aviso legal
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sinapsis-green">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} Sinapsis Verde Unidos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
