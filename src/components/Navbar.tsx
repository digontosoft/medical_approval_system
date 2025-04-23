import React, { useState, useEffect } from "react";
import { Activity, Menu, X, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "statistics", label: "Statistics" },
    { id: "about", label: "About" },
    { id: "submission", label: "Submit Software" },
    { id: "faq", label: "FAQ" },
    { id: "outcome", label: "Recommendation" },
  ];

  // Check authentication status
  useEffect(() => {
    const userData = JSON.parse(
      localStorage.getItem("medApprovalUserAuth") || "{}"
    );
    const adminData = JSON.parse(
      localStorage.getItem("medApprovalAdminAuth") || "{}"
    );

    // Check either user or admin authentication
    const isUserAuthenticated =
      userData.username === "user" && userData.password === "password123";
    const isAdminAuthenticated =
      adminData.username === "admin" && adminData.password === "password123";

    setIsLoggedIn(isUserAuthenticated || isAdminAuthenticated);
  }, []);

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to login page
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const handleLogout = () => {
    // Remove all authentication data
    localStorage.removeItem("medApprovalUserAuth");
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home page after logout
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-teal-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              MedApproval BD
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`text-base font-medium transition-colors duration-300 ${
                      activeSection === link.id
                        ? "text-teal-600"
                        : "text-gray-700 hover:text-teal-600"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <Link to="/admin">
                <li>
                  <button className="flex items-center text-base font-medium text-gray-700 hover:text-teal-600 transition-colors duration-300">
                    <Shield className="h-4 w-4 mr-1" />
                    Admin
                  </button>
                </li>
              </Link>

              <li>
                <button
                  onClick={isloggedIn ? handleLogout : handleLoginClick}
                  className="text-base font-medium text-gray-700 hover:text-teal-600 transition-colors duration-300"
                >
                  {isloggedIn ? "Logout" : "Login"}
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                  activeSection === link.id
                    ? "text-teal-600 bg-gray-100"
                    : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </button>
            ))}
            <Link to="/admin">
              <li className="list-none px-2">
                <button className="flex items-center text-base font-medium text-gray-700 hover:text-teal-600 transition-colors duration-300">
                  <Shield className="h-4 w-4 mr-1" />
                  Admin
                </button>
              </li>
            </Link>
            <li className="list-none px-3">
              <button
                onClick={isloggedIn ? handleLogout : handleLoginClick}
                className="text-base font-medium text-gray-700 hover:text-teal-600 transition-colors duration-300"
              >
                {isloggedIn ? "Logout" : "Login"}
              </button>
            </li>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
