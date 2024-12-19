import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-6 py-3">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3">
          <Link to="/" className="text-2xl font-heading font-bold text-[#ACCBEE]">Growther</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link to="/" className="hover:text-[#ACCBEE] transition-colors">Home</Link>
          <a href="/#services" className="hover:text-[#ACCBEE] transition-colors">Services</a>
          <a href="/#about" className="hover:text-[#ACCBEE] transition-colors">About</a>
          <a href="/#contact" className="hover:text-[#ACCBEE] transition-colors">Contact</a>
          <Link to="/blog" className="hover:text-[#ACCBEE] transition-colors">Blog</Link>
        </div>

        {/* Call-to-Action Button */}
        <Button className="bg-[#ACCBEE] hover:bg-[#517fa4] text-[#243949] hover:text-white transition-all">
          Get Started
        </Button>
      </div>
    </nav>
  );
};