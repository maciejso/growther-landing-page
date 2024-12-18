import { Button } from './ui/button';
import Logo from '/logo.svg';

export const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-6 py-3">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-heading font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] tracking-wide [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)] backdrop-blur-[1px]">
            Growther
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#services" className="text-white hover:text-primary transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">Services</a>
          <a href="#about" className="text-white hover:text-primary transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">About</a>
          <a href="#contact" className="text-white hover:text-primary transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">Contact</a>
        </div>

        {/* Call-to-Action Button */}
        <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg backdrop-blur-sm">
          Get Started
        </Button>
      </div>
    </nav>
  );
};