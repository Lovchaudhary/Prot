import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold cursor-pointer" onClick={() => scrollToSection('hero')}>
            JOEWARD PERALTA
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-blue-500 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="hover:text-blue-500 transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="hover:text-blue-500 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-blue-500 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left hover:text-blue-500 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="text-left hover:text-blue-500 transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-left hover:text-blue-500 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left hover:text-blue-500 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
