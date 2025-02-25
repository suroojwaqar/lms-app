"use client";

import Link from "next/link";
import { Home, MessageCircle, PlusCircle, Menu, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function FloatingNav() {
  const [activeTab, setActiveTab] = useState<number>(3); // Menu icon is active by default

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: MessageCircle, label: "Messages", href: "/attribute-type" },
    { icon: PlusCircle, label: "Add", href: "/section" },
    { icon: Menu, label: "Menu", href: "/menu" },
    { icon: User, label: "Profile", href: "/profile" }
  ];

  return (
    <TooltipProvider>
      <Card className="fixed bottom-4 left-1/2 -translate-x-1/2 p-1.5 shadow-lg rounded-full dark:bg-black-10 bg-black/10 backdrop-blur-lg border dark:border-gray-800">
        <nav className="flex items-center gap-4 px-4">
          {navItems.map((item, index) => (
            <Tooltip key={item.label}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "p-2.5 rounded-full transition-all duration-200",
                    activeTab === index
                      ? "bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 shadow-sm"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100/80 dark:hover:bg-gray-800/80"
                  )}
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </Card>
    </TooltipProvider>
  );
}
