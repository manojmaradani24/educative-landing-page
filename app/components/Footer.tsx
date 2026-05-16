import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Courses", href: "#courses" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#careers" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "#help" },
    { name: "Contact Us", href: "#contact" },
    { name: "FAQs", href: "#faqs" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { icon: Github, href: "#", color: "hover:text-gray-400" },
    { icon: Youtube, href: "#", color: "hover:text-red-500" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <h3 className="text-2xl font-bold text-gradient">Educate.ai</h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Revolutionizing education with AI technology to make quality learning accessible for everyone worldwide.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>123 Innovation Hub, Silicon Valley, CA 94025</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:hello@educate.ai" className="hover:text-purple-400">hello@educate.ai</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-purple-400">+1 (234) 567-890</a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-2">Subscribe to Newsletter</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-sm font-semibold hover:shadow-lg transition-all">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2026 Educate.ai. All rights reserved. Made with ❤️ for learners worldwide.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}