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
    <Sidebar className="border-r border-gray-200">
      <SidebarHeader className="border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
          <SidebarInput className="pl-8" placeholder="Search articles..." />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100"
                >
                  {category}
                </button>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Recent Posts</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-1">
              {recentPosts.map((post) => (
                <button
                  key={post}
                  className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-gray-100"
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