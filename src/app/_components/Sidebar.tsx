import * as React from "react"


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
 

  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { ForkKnife } from "lucide-react"
import Image from "next/image"



// This is sample data.
const data = {
  Versions:["1.0.1","1.1.0-alpha","2.0.0-beta1"],
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Meals",
          url: "/",
          icon:ForkKnife
        },
        {
          title: "Ingrediants",
          url: "/",
          icon:ForkKnife
        },
      ],
    },
   
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
   

<Sidebar{...props}>
<SidebarHeader>

</SidebarHeader>
<SidebarContent className="p-10">

  {/* We create a SidebarGroup for each parent. */}
  {data.navMain.map((item) => (
    <SidebarGroup key={item.title}>
      <SidebarGroupLabel>
        
         <Image src={'/logo.jpg'} alt="logo" width={200} height={200}/>
      
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu className=" mt-10 ">
          {item.items.map((item) => (
            <SidebarMenuItem key={item.title} >
              <SidebarMenuButton  asChild>
                <Link href={item.url} className="text-x1 font-semibold">
                 <item.icon/>
                 {item.title}</Link> 
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  ))}
</SidebarContent>
<SidebarRail/>
</Sidebar>

  )
}











