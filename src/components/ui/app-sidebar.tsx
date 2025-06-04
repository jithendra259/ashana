import {Search, Share2, Trash2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "chat history1",
    shareIcon: Share2,
    deleteIcon: Trash2
  },
  {
    title: "chat history2",
    shareIcon: Share2,
    deleteIcon: Trash2
  },
  {
    title: "chat history3",
    shareIcon: Share2,
    deleteIcon: Trash2
  },
  {
    title: "chat history4",
    shareIcon: Share2,
    deleteIcon: Trash2
  },
  {
    title: "chat history5",
    shareIcon: Share2,
    deleteIcon: Trash2
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel><a className="font-semibold text-2xl">Ashana ai</a></SidebarGroupLabel>          <SidebarGroupContent>
            <SidebarMenu>
              <div className="px-3 py-2">
                <form className="w-full">   
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input 
                            type="search" 
                            className="w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" 
                            placeholder="Search..." 
                        />
                    </div>
                </form>
              </div> 
              {items.map((item) => {
                const ShareIcon = item.shareIcon;
                const DeleteIcon = item.deleteIcon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href="#" className="flex items-center justify-between">
                        <span>{item.title}</span>
                        <div className="flex gap-2">
                          <button className="hover:text-blue-500 transition-colors" title="Share">
                            <ShareIcon className="h-4 w-4" />
                          </button>
                          <button className="hover:text-red-500 transition-colors" title="Delete">
                            <DeleteIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}