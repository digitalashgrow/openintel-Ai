"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Globe,
  User,
  Mail,
  Network,
  Building2,
  Share2,
  Bot,
  FileText,
  History,
  Settings,
} from "lucide-react";
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
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

const items = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/domain", label: "Domain Intelligence", icon: Globe },
  { href: "/dashboard/username", label: "Username Intelligence", icon: User },
  { href: "/dashboard/email", label: "Email Intelligence", icon: Mail },
  { href: "/dashboard/ip", label: "IP Intelligence", icon: Network },
  { href: "/dashboard/company", label: "Company Intelligence", icon: Building2 },
  { href: "/dashboard/graph", label: "Intelligence Graph", icon: Share2 },
  { href: "/dashboard/investigator", label: "AI Investigator", icon: Bot },
  { href: "/dashboard/reports", label: "Reports", icon: FileText },
  { href: "/dashboard/history", label: "Investigation History", icon: History },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <Link href="/dashboard" className="flex items-center gap-2 px-2 py-1.5 font-semibold">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-primary ring-1 ring-primary/30 text-xs">
            OI
          </span>
          <span>OpenIntel AI</span>
          <Badge variant="outline" className="ml-auto text-[10px]">
            Phase 0
          </Badge>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton render={<Link href={item.href} />} isActive={pathname === item.href}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-sidebar-border p-3 text-xs text-muted-foreground">
        Integrations: unavailable (demo)
      </SidebarFooter>
    </Sidebar>
  );
}