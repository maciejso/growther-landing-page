import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { BarChart3, Megaphone, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen relative text-white">
      {/* Background Image with Split Overlays */}
      <div 
        className="absolute inset-0 z-0 flex"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left side overlay */}
        <div className="w-1/2 h-full bg-gradient-to-br from-black/80 via-primary/70 to-primary/50" />
        {/* Right side overlay */}
        <div className="w-1/2 h-full bg-gradient-to-bl from-black/80 via-secondary/70 to-secondary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: "200ms" }}>
            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6">
              Transform Your <span className="gradient-text">Digital Presence</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12">
              We help businesses grow through strategic marketing solutions and data-driven insights.
            </p>
            
            {/* Two CTAs in a centered layout */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="w-full sm:w-auto animate-fade-up opacity-0" style={{ animationDelay: "400ms" }}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity w-full sm:w-auto text-lg font-semibold"
                >
                  For Creators 
                </Button>
              </div>
              <div className="w-full sm:w-auto animate-fade-up opacity-0" style={{ animationDelay: "500ms" }}>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-white hover:bg-white/90 transition-colors w-full sm:w-auto text-lg font-semibold text-gray-800"
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