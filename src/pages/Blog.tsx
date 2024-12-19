import { Link } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const ITEMS_PER_PAGE = 9;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sample blog posts data - in a real app, this would come from an API
  const blogPosts = [
    {
      slug: "maximizing-roi",
      title: "Maximizing Affiliate Marketing ROI",
      description: "Learn the best strategies to increase your affiliate marketing return on investment through data-driven decisions.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      slug: "partner-relationships",
      title: "Building Strong Partner Relationships",
      description: "Discover how to cultivate lasting partnerships with top affiliates in your niche market.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      slug: "trends-2024",
      title: "Affiliate Marketing Trends 2024",
      description: "Stay ahead of the curve with our comprehensive guide to emerging trends in affiliate marketing.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      slug: "conversion-optimization",
      title: "Optimizing Conversion Rates",
      description: "Expert tips and techniques to improve your affiliate program's conversion rates and performance.",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
    },
    {
      slug: "content-marketing",
      title: "Content Marketing for Affiliates",
      description: "Master the art of creating compelling content that drives affiliate sales and engagement.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    },
    {
      slug: "social-media",
      title: "Social Media Strategies",
      description: "Leverage social platforms effectively to boost your affiliate marketing presence and reach.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      slug: "seo-guide",
      title: "SEO for Affiliate Marketers",
      description: "Essential SEO techniques to improve your affiliate content's visibility and organic traffic.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
    },
    {
      slug: "email-marketing",
      title: "Email Marketing Excellence",
      description: "Build and nurture your email list to create a sustainable affiliate marketing income stream.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
    },
    {
      slug: "analytics",
      title: "Analytics & Tracking",
      description: "Master the tools and metrics that matter for measuring and improving your affiliate success.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    }
  ];

  const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

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
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {currentPosts.map((post) => (
              <Link 
                key={post.slug}
                to={`/blog/${post.slug}`} 
                className="glass p-6 rounded-xl group"
              >
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h2 className="text-2xl font-heading font-bold mb-4 text-[#E7F0FD]">
                  {post.title}
                </h2>
                <p className="text-gray-200 mb-4">
                  {post.description}
                </p>
                <span className="text-[#ACCBEE]">Read More →</span>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    onClick={() => setCurrentPage(index + 1)}
                    isActive={currentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Blog;
