import { Button } from './ui/button';
import Logo from '/logo.svg';

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-6 py-3">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-heading font-bold text-[#ACCBEE]">Growther</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        {/* Call-to-Action Button */}
        <Button className="bg-[#ACCBEE] hover:bg-[#E7F0FD] text-[#243949] transition-opacity">
          Get Started
        </Button>
      </div>
    </nav>
  );
};