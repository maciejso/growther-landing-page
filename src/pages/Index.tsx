import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { BarChart3, Megaphone, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen relative text-white">
      {/* Gradient Background with Split Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#243949] via-[#517fa4] to-[#517fa4] opacity-95">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 text-white drop-shadow-[0_4px_3px_rgba(0,0,0,0.3)] [text-shadow:_2px_2px_2px_rgb(0_0_0_/_30%)]">
              Transform Your <span className="text-[#ACCBEE] font-extrabold [text-shadow:_1px_1px_2px_rgb(0_0_0_/_30%)]">Digital Presence</span>
            </h1>
            <p className="text-xl text-gray-100 font-medium mb-12 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] tracking-wide [text-shadow:_1px_1px_1px_rgb(0_0_0_/_20%)] backdrop-blur-[2px]">
              We help businesses grow through strategic marketing solutions and data-driven insights.
            </p>
            
            {/* Two CTAs in a centered layout */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="w-full sm:w-auto animate-fade-up opacity-0" style={{ animationDelay: "400ms" }}>
                <Button 
                  size="lg"
                  className="bg-[#ACCBEE] hover:bg-[#E7F0FD] text-[#243949] transition-all hover:scale-105 w-full sm:w-auto text-lg font-semibold shadow-lg backdrop-blur-sm"
                >
                  For Creators 
                </Button>
              </div>
              <div className="w-full sm:w-auto animate-fade-up opacity-0" style={{ animationDelay: "500ms" }}>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#ACCBEE] bg-transparent hover:bg-[#ACCBEE]/10 text-white transition-all hover:scale-105 w-full sm:w-auto text-lg font-semibold shadow-lg backdrop-blur-sm"
                >
                  For Enterprises
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section id="services" className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-4xl font-heading font-bold mb-12 text-center text-[#ACCBEE]">Our Affiliate Marketing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "400ms" }}>
              <ServiceCard
                icon={<Megaphone />}
                title="Affiliate Program Setup"
                description="Launch your affiliate program with our comprehensive setup and management solutions"
              />
            </div>
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "500ms" }}>
              <ServiceCard
                icon={<BarChart3 />}
                title="Performance Tracking"
                description="Advanced analytics and tracking systems for monitoring affiliate success"
              />
            </div>
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "600ms" }}>
              <ServiceCard
                icon={<Target />}
                title="Partner Recruitment"
                description="Strategic recruitment of high-quality affiliates for your program"
              />
            </div>
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "700ms" }}>
              <ServiceCard
                icon={<TrendingUp />}
                title="Commission Management"
                description="Flexible commission structures and automated payment systems"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="max-w-7xl mx-auto px-4 py-20 glass my-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-heading font-bold mb-8 text-[#ACCBEE]">About Our Platform</h2>
            <p className="text-lg mb-8 text-gray-100">
              Growther is revolutionizing the affiliate marketing landscape by providing cutting-edge tools and technologies
              that empower businesses to scale their affiliate programs effectively.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="glass p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#ACCBEE]">Smart Automation</h3>
                <p className="text-gray-200">Automated tracking and payment systems for seamless operation</p>
              </div>
              <div className="glass p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#ACCBEE]">Real-time Analytics</h3>
                <p className="text-gray-200">Comprehensive dashboards for performance monitoring</p>
              </div>
              <div className="glass p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-[#ACCBEE]">Partner Network</h3>
                <p className="text-gray-200">Access to a vast network of pre-vetted affiliates</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto glass p-8 rounded-xl">
            <h2 className="text-4xl font-heading font-bold mb-8 text-center text-[#ACCBEE]">Get Started Today</h2>
            <p className="text-center mb-8 text-gray-100">
              Ready to transform your affiliate marketing strategy? Contact us to learn how Growther can help scale your business.
            </p>
            <div className="flex flex-col gap-4">
              <Button 
                size="lg"
                className="bg-[#ACCBEE] hover:bg-[#E7F0FD] text-[#243949] transition-all hover:scale-105 w-full text-lg font-semibold"
              >
                Schedule a Demo
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[#ACCBEE] bg-transparent hover:bg-[#ACCBEE]/10 text-white transition-all hover:scale-105 w-full text-lg font-semibold"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
