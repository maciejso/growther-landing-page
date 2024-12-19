import { Search, Sidebar } from 'lucide-react';
import {
  SidebarContent,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
} from './ui/sidebar';
import { SidebarGroup } from './ui/sidebar';

export function BlogSidebar() {
  const categories = [
    'Affiliate Marketing',
    'Digital Marketing',
    'Content Creation',
    'SEO',
    'Social Media',
    'Email Marketing',
    'Analytics',
  ];

  const recentPosts = [
    'Maximizing ROI in Affiliate Marketing',
    'Building Strong Partner Relationships',
    'Content Strategy for Affiliates',
    'SEO Best Practices 2024',
  ];

  return (
    <Sidebar className='border-l border-white/20 mt-[72px] bg-transparent'>
      <SidebarHeader className='border-b border-white/20 bg-transparent'>
        <div className='relative'>
          <Search className='absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-[#ACCBEE]' />
          <SidebarInput
            className='bg-transparent pl-8 text-white placeholder:text-[#ACCBEE]/70 focus-visible:ring-[#ACCBEE]/50'
            placeholder='Search articles...'
          />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className='text-[#ACCBEE] font-heading'>
            Categories
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className='space-y-1'>
              {categories.map((category) => (
                <button
                  key={category}
                  className='w-full rounded-lg px-3 py-2 text-left text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-[#ACCBEE]'
                >
                  {category}
                </button>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className='text-[#ACCBEE] font-heading'>
            Recent Posts
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className='space-y-1'>
              {recentPosts.map((post) => (
                <button
                  key={post}
                  className='w-full rounded-lg px-3 py-2 text-left text-sm text-white/90 transition-colors hover:bg-white/10 hover:text-[#ACCBEE]'
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
