

"use client";
import ModernProfileCard from "./profile-card";
import AddStudentCard from "./add-profile-card";
import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel-other/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { Button } from "@/components/ui/button";
import DashboardSingleCard from "@/components/dashboard-single-card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { DashboardBarChart } from "@/components/dashboard-bar-chart";
import DashboardRecent from "@/components/dashboard-recent";
import { DashboardAreaChart } from "@/components/dashboard-area-chart";
import { DashboardPieChart } from "@/components/dashboard-pie-chart";
import { DashboardHorizontalBarChart } from "@/components/dashboard-horizontal-bar-chart";

export default function DashboardPage() {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { settings, setSettings } = sidebar;
  return (
    <ContentLayout title="Dashboard">
      <div className="hidden">
        <TooltipProvider>
          <div className="flex gap-6 mt-6">
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="is-hover-open"
                    onCheckedChange={(x) => setSettings({ isHoverOpen: x })}
                    checked={settings.isHoverOpen}
                  />
                  <Label htmlFor="is-hover-open">Hover Open</Label>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>When hovering on the sidebar in mini state, it will open</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="disable-sidebar"
                    onCheckedChange={(x) => setSettings({ disabled: x })}
                    checked={settings.disabled}
                  />
                  <Label htmlFor="disable-sidebar">Disable Sidebar</Label>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Hide sidebar</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>

      <div className="flex flex-wrap gap-8 justify-center max-w-6xl mx-auto">

      <AddStudentCard />
      <ModernProfileCard variant="blue" />
      {/* <ModernProfileCard variant="green" />
      <ModernProfileCard variant="orange" /> */}
      </div>

    </ContentLayout>
  );
}

