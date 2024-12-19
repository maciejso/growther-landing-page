import { Navbar } from "@/components/Navbar";

const Blog = () => {
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
        <div className="max-w-7xl mx-auto px-4 pt-32 pb-20">
          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-12 text-center text-[#ACCBEE]">
            Latest Blog Posts
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Blog Post Cards */}
            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-heading font-bold mb-4 text-[#E7F0FD]">
                Maximizing Affiliate Marketing ROI
              </h2>
              <p className="text-gray-200 mb-4">
                Learn the best strategies to increase your affiliate marketing return on investment through data-driven decisions.
              </p>
              <span className="text-[#ACCBEE]">Read More →</span>
            </div>

            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-heading font-bold mb-4 text-[#E7F0FD]">
                Building Strong Partner Relationships
              </h2>
              <p className="text-gray-200 mb-4">
                Discover how to cultivate lasting partnerships with top affiliates in your niche market.
              </p>
              <span className="text-[#ACCBEE]">Read More →</span>
            </div>

            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-heading font-bold mb-4 text-[#E7F0FD]">
                Affiliate Marketing Trends 2024
              </h2>
              <p className="text-gray-200 mb-4">
                Stay ahead of the curve with our comprehensive guide to emerging trends in affiliate marketing.
              </p>
              <span className="text-[#ACCBEE]">Read More →</span>
            </div>

            <div className="glass p-6 rounded-xl">
              <h2 className="text-2xl font-heading font-bold mb-4 text-[#E7F0FD]">
                Optimizing Conversion Rates
              </h2>
              <p className="text-gray-200 mb-4">
                Expert tips and techniques to improve your affiliate program's conversion rates and performance.
              </p>
              <span className="text-[#ACCBEE]">Read More →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;