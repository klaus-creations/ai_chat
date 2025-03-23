import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "./ui/button";
import { PencilLine } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar className="bg-slate-950">
      <SidebarContent>
        <SidebarGroup className="flex flex-col items-center gap-4">
          <SidebarGroupLabel className="flex items-center gap-2">
            <Image
              src={"/kde.svg"}
              width={20}
              height={20}
              alt="logo"
              className="size-6 lg:size-8"
            />
            <span className="text-xl lg:text-2xl font-extrabold tracking-[1px] text-purple-600 ">
              klaus - AI
            </span>
          </SidebarGroupLabel>
          <Button className=" border-[1px] border-purple-700/[.5] bg-purple-700/[.05] hover:bg-purple-700/[.1] flex items-center gap-2 cursor-pointer">
            <span className="text-base lg:text-xl tracking-[1px]">
              New Chat
            </span>
            <PencilLine className="size-4" />
          </Button>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
