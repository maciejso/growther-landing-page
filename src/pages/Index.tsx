import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { BarChart3, Megaphone, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen relative text-white">
      {/* Gradient Background with Split Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#4CAF50] via-[#81C784] to-[#66BB6A] opacity-90">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 text-gray-800 drop-shadow-[0_4px_3px_rgba(255,255,255,0.4)] [text-shadow:_2px_2px_2px_rgb(255_255_255_/_30%)]">
              Transform Your <span className="gradient-text font-extrabold [text-shadow:_1px_1px_2px_rgb(255_255_255_/_30%)]">Digital Presence</span>
            </h1>
            <p className="text-xl text-gray-800 font-medium mb-12 drop-shadow-[0_2px_2px_rgba(255,255,255,0.3)] tracking-wide [text-shadow:_1px_1px_1px_rgb(255_255_255_/_20%)] backdrop-blur-[2px]">
              We help businesses grow through strategic marketing solutions and data-driven insights.
            </p>
            
            {/* Two CTAs in a centered layout */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="w-full sm:w-auto animate-fade-up opacity-0" style={{ animationDelay: "400ms" }}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity w-full sm:w-auto text-lg font-semibold text-white shadow-lg backdrop-blur-sm"
                >
                  For Creators 
                </Button>
              </div>
              <div className="w-full sm:w-auto animate-fade-up opacity-0" style={{ animationDelay: "500ms" }}>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-800 bg-white hover:bg-white/90 transition-colors w-full sm:w-auto text-lg font-semibold text-gray-800 shadow-lg backdrop-blur-sm"
                >
                  For Enterprises
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "400ms" }}>
              <ServiceCard
                icon={<Megaphone />}
                title="Digital Marketing"
                description="Strategic campaigns that drive engagement and conversions"
              />
            </div>
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "500ms" }}>
              <ServiceCard
                icon={<BarChart3 />}
                title="Analytics"
                description="Data-driven insights to optimize your marketing efforts"
              />
            </div>
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "600ms" }}>
              <ServiceCard
                icon={<Target />}
                title="Brand Strategy"
                description="Build a compelling brand that resonates with your audience"
              />
            </div>
            <div className="animate-fade-up opacity-0" style={{ animationDelay: "700ms" }}>
              <ServiceCard
                icon={<TrendingUp />}
                title="Growth Marketing"
                description="Scalable solutions for sustainable business growth"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
