"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-users";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Admin Dashboard",
          url: "#",
        },
        {
          title: "Teacher Dashboard",
          url: "#",
        },
        {
          title: "Student Dashboard",
          url: "#",
        },
        {
          title: "Parent Dashboard",
          url: "#",
        },
      ],
    },
  ],
  navPeople: [
    {
      title: "Students",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "All Students",
          url: "#",
        },
        {
          title: "Students List",
          url: "#",
        },
        {
          title: "Students Details",
          url: "#",
        },
        {
          title: "Students Promotion",
          url: "#",
        },
      ],
    },
    {
      title: "Parents",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "All Parents",
          url: "#",
        },
        {
          title: "Parents List",
          url: "#",
        },
      ],
    },
    {
      title: "Guardian",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "All Guardians",
          url: "#",
        },
        {
          title: "Guardian List",
          url: "#",
        },
      ],
    },
    {
      title: "Teachers",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "All Teachers",
          url: "#",
        },
        {
          title: "Teachers List",
          url: "#",
        },
        {
          title: "Teacher Details",
          url: "#",
        },
        {
          title: "Routine",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />

        <NavMain items={data.navPeople} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
