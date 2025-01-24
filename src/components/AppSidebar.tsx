import { Home, PlayCircle, TrendingUp, Search, BookmarkCheck, Film, Tv } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarInput,
  useSidebar,
} from "@/components/ui/sidebar";
import { useEffect, useState } from "react";

const categories = [
  { icon: Film, label: "Movies", href: "#" },
  { icon: Tv, label: "TV Shows", href: "#" },
];

const menuItems = [
  { icon: Home, label: "Home", href: "#", isHome: true },
  { icon: PlayCircle, label: "New & Popular", href: "#" },
  { icon: TrendingUp, label: "Trending", href: "#" },
  { icon: Search, label: "Search", href: "#", isSearch: true },
  { icon: BookmarkCheck, label: "My List", href: "#" },
];

export function AppSidebar() {
  const { setOpen } = useSidebar();
  const [showSearch, setShowSearch] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    setOpen(true);
    setShowSearch(true);
    setShowCategories(false);
  };

  const handleHomeClick = () => {
    setOpen(true);
    setShowCategories(true);
    setShowSearch(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    console.log("Searching for:", e.target.value);
  };

  // Handle clicking outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.querySelector('[data-sidebar="sidebar"]');
      if (sidebar && !sidebar.contains(event.target as Node)) {
        setOpen(false);
        setShowSearch(false);
        setShowCategories(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setOpen]);

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  {item.isSearch ? (
                    <div className="flex flex-col gap-2 w-full">
                      <SidebarMenuButton
                        onClick={handleSearchClick}
                        className="flex items-center gap-2"
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                      {showSearch && (
                        <div className="px-2">
                          <SidebarInput
                            type="text"
                            placeholder="Titles, people, genres"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            autoFocus
                          />
                        </div>
                      )}
                    </div>
                  ) : item.isHome ? (
                    <div className="flex flex-col gap-2 w-full">
                      <SidebarMenuButton
                        onClick={handleHomeClick}
                        className="flex items-center gap-2"
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                      {showCategories && (
                        <div className="pl-8 flex flex-col gap-2">
                          {categories.map((category) => (
                            <SidebarMenuButton
                              key={category.label}
                              asChild
                              className="flex items-center gap-2 text-sm"
                            >
                              <a href={category.href}>
                                <category.icon className="h-4 w-4" />
                                <span>{category.label}</span>
                              </a>
                            </SidebarMenuButton>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <SidebarMenuButton asChild>
                      <a href={item.href} className="flex items-center gap-2">
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}