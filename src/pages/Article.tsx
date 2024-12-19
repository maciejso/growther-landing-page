import { useParams } from "react-router-dom";

const Article = () => {
  const { slug } = useParams();
  
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
        <div className="max-w-4xl mx-auto px-4 pt-32 pb-20">
          <article className="prose prose-invert glass p-8 rounded-xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-8 text-[#ACCBEE]">
              {/* This would be dynamically filled based on the article */}
              Article Title
            </h1>
            
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="Article header" 
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
            
            <div className="text-gray-200">
              {/* This would be dynamically filled based on the article */}
              <p>Article content would go here...</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Article;