import { useParams } from "react-router-dom";

const Article = () => {
  const { slug } = useParams();
  
  // Sample blog posts data - in a real app, this would come from an API
  const blogPosts = [
    {
      slug: "maximizing-roi",
      title: "Maximizing Affiliate Marketing ROI",
      description: "Learn the best strategies to increase your affiliate marketing return on investment through data-driven decisions.",
      content: "FIRST BLOG POST\n\n[... rest of the content ...]",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      slug: "partner-relationships",
      title: "Building Strong Partner Relationships",
      description: "Discover how to cultivate lasting partnerships with top affiliates in your niche market.",
      content: "SECOND BLOG POST\n\n[... rest of the content ...]",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      slug: "trends-2024",
      title: "Affiliate Marketing Trends 2024",
      description: "Stay ahead of the curve with our comprehensive guide to emerging trends in affiliate marketing.",
      content: "THIRD BLOG POST\n\n[... rest of the content ...]",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    }
  ];

  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen relative text-white">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-[#243949] via-[#517fa4] to-[#517fa4] opacity-95">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
          </div>
        </div>
        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 pt-32 pb-20">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-8 text-[#ACCBEE]">
              Article not found
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative text-white">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#243949] via-[#517fa4] to-[#517fa4] opacity-95">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 pt-32 pb-20">
          <article className="prose prose-invert glass p-8 rounded-xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-8 text-[#ACCBEE]">
              {post.title}
            </h1>
            
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            
            <div className="text-gray-200 whitespace-pre-wrap">
              {post.content}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Article;