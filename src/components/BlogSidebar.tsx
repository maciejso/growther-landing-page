import { Search } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
} from "@/components/ui/sidebar";

export function BlogSidebar() {
  const categories = [
    "Affiliate Marketing",
    "Digital Marketing",
    "Content Creation",
    "SEO",
    "Social Media",
    "Email Marketing",
    "Analytics",
  ];

  const recentPosts = [
    "Maximizing ROI in Affiliate Marketing",
    "Building Strong Partner Relationships",
    "Content Strategy for Affiliates",
    "SEO Best Practices 2024",
  ];

  return (
    <Sidebar className="border-l border-white/20" variant="floating">
      <SidebarHeader className="border-b border-white/20 bg-white/5">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-[#ACCBEE]" />
          <SidebarInput 
            className="glass pl-8 text-white placeholder:text-[#ACCBEE]/70 focus-visible:ring-[#ACCBEE]/50" 
            placeholder="Search articles..." 
          />
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-white/5 backdrop-blur-lg">
        <SidebarGroup>
          <SidebarGroupLabel className="text-[#ACCBEE] font-heading">Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-[#ACCBEE]"
                >
                  {category}
                </button>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-[#ACCBEE] font-heading">Recent Posts</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-1">
              {recentPosts.map((post) => (
                <button
                  key={post}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-[#ACCBEE]"
                >
                  {post}
                </button>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}