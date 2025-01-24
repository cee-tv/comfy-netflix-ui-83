import { Home, PlayCircle, TrendingUp, Search, BookmarkCheck } from "lucide-react";
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
import { useState } from "react";

const menuItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: PlayCircle, label: "New & Popular", href: "#" },
  { icon: TrendingUp, label: "Trending", href: "#" },
  { icon: Search, label: "Search", href: "#", isSearch: true },
  { icon: BookmarkCheck, label: "My List", href: "#" },
];

export function AppSidebar() {
  const { setOpen } = useSidebar();
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    setOpen(true);
    setShowSearch(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Here you would typically trigger your search functionality
    console.log("Searching for:", e.target.value);
  };

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