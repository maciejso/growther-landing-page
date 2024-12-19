import { Link } from "react-router-dom";

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
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post Cards */}
            <Link to="/blog/maximizing-roi" className="glass p-6 rounded-xl group">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Maximizing ROI"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4 text-[#E7F0FD]">
                Maximizing Affiliate Marketing ROI
              </h2>
              <p className="text-gray-200 mb-4">
                Learn the best strategies to increase your affiliate marketing return on investment through data-driven decisions.
              </p>
              <span className="text-[#ACCBEE]">Read More →</span>
            </Link>

            <Link to="/blog/partner-relationships" className="glass p-6 rounded-xl group">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                  alt="Partner Relationships"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4 text-[#E7F0FD]">
                Building Strong Partner Relationships
              </h2>
              <p className="text-gray-200 mb-4">
                Discover how to cultivate lasting partnerships with top affiliates in your niche market.
              </p>
              <span className="text-[#ACCBEE]">Read More →</span>
            </Link>

            <Link to="/blog/trends-2024" className="glass p-6 rounded-xl group">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="2024 Trends"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4 text-[#E7F0FD]">
                Affiliate Marketing Trends 2024
              </h2>
              <p className="text-gray-200 mb-4">
                Stay ahead of the curve with our comprehensive guide to emerging trends in affiliate marketing.
              </p>
              <span className="text-[#ACCBEE]">Read More →</span>
            </Link>

            <Link to="/blog/conversion-optimization" className="glass p-6 rounded-xl group">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
                  alt="Conversion Optimization"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4 text-[#E7F0FD]">
                Optimizing Conversion Rates
              </h2>
              <p className="text-gray-200 mb-4">
                Expert tips and techniques to improve your affiliate program's conversion rates and performance.
              </p>
              <span className="text-[#ACCBEE]">Read More →</span>
            </Link>

            <Link to="/blog/content-marketing" className="glass p-6 rounded-xl group">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                  alt="Content Marketing"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4 text-[#E7F0FD]">
                Content Marketing for Affiliates
              </h2>
              <p className="text-gray-200 mb-4">
                Master the art of creating compelling content that drives affiliate sales and engagement.
              </p>
              <span className="text-[#ACCBEE]">Read More →</span>
            </Link>

            <Link to="/blog/social-media" className="glass p-6 rounded-xl group">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Social Media"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4 text-[#E7F0FD]">
                Social Media Strategies
              </h2>
              <p className="text-gray-200 mb-4">
                Leverage social platforms effectively to boost your affiliate marketing presence and reach.
              </p>
              <span className="text-[#ACCBEE]">Read More →</span>
            </Link>

            <Link to="/blog/seo-guide" className="glass p-6 rounded-xl group">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                  alt="SEO Guide"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4 text-[#E7F0FD]">
                SEO for Affiliate Marketers
              </h2>
              <p className="text-gray-200 mb-4">
                Essential SEO techniques to improve your affiliate content's visibility and organic traffic.
              </p>
              <span className="text-[#ACCBEE]">Read More →</span>
            </Link>

            <Link to="/blog/email-marketing" className="glass p-6 rounded-xl group">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                  alt="Email Marketing"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4 text-[#E7F0FD]">
                Email Marketing Excellence
              </h2>
              <p className="text-gray-200 mb-4">
                Build and nurture your email list to create a sustainable affiliate marketing income stream.
              </p>
              <span className="text-[#ACCBEE]">Read More →</span>
            </Link>

            <Link to="/blog/analytics" className="glass p-6 rounded-xl group">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                  alt="Analytics"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="text-2xl font-heading font-bold mb-4 text-[#E7F0FD]">
                Analytics & Tracking
              </h2>
              <p className="text-gray-200 mb-4">
                Master the tools and metrics that matter for measuring and improving your affiliate success.
              </p>
              <span className="text-[#ACCBEE]">Read More →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;