"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Bell, User, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Courses", href: "#courses", dropdown: ["Web Development", "AI/ML", "Data Science", "Cloud Computing"] },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg py-2" : "bg-white/90 backdrop-blur-md py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <h1 className="text-2xl font-bold text-gradient">Educate.ai</h1>
          </div>

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    className="flex items-center gap-1 text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name} <ChevronDown size={16} />
                  </button>
                ) : (
                  <a href={item.href} className="text-gray-700 hover:text-purple-600 transition-colors duration-300 font-medium">
                    {item.name}
                  </a>
                )}
                
                {item.dropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((subItem) => (
                      <a key={subItem} href="#" className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors">
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
              <Bell size={20} />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300">
              <User size={18} /> Sign In
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Get Started
            </button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-purple-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <button className="w-full px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-full font-semibold">
                Sign In
              </button>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}