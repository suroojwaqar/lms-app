"use client";

import Link from "next/link";
import { Ellipsis, LogOut, LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { getMenuList } from "@/lib/menu-list";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CollapseMenuButton } from "@/components/admin-panel/collapse-menu-button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

interface MenuProps {
  isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
  const pathname = usePathname();
  const [menuList, setMenuList] = useState<any[]>([]); // Initialize with an empty array

  // Fetch the menu list asynchronously
  useEffect(() => {
    const fetchMenuList = async () => {
      try {
        const data = await getMenuList(pathname);
        setMenuList(data); // Update state with the fetched menu list
      } catch (error) {
        console.error("Failed to fetch menu list:", error);
        setMenuList([]); // Fallback to an empty array in case of error
      }
    };

    fetchMenuList();
  }, [pathname]); // Re-fetch when pathname changes

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-4 h-[full] w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
          {menuList.map(({ groupLabel, menus }: { groupLabel: string; menus: { href: string; label: string; icon: React.ComponentType; active?: boolean; submenus?: any[] }[] }, index) => (
            <li className={cn("w-full", groupLabel ? "" : "")} key={index}>
              {/* hide menu section title with 'hidden' and from above line removed padding top after groupLable ? ""  */}
              {(isOpen && groupLabel) || isOpen === undefined ? (
                <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate hidden">
                  {groupLabel}
                </p>
              ) : !isOpen && isOpen !== undefined && groupLabel ? (
                <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    {/* 
                    <TooltipTrigger className="w-full">
                      <div className="w-full flex justify-center items-center">
                        <Ellipsis className="h-5 w-5" />
                      </div>
                    </TooltipTrigger> 
                    */}
                    <TooltipContent side="right">
                      <p>{groupLabel}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                ""
                // <p className="pb-2"></p>
              )}
              {menus.map(
                ({ href, label, icon: Icon, active, submenus }: { href: string; label: string; icon: React.ComponentType; active?: boolean; submenus?: any[] }, index) =>
                  !submenus || submenus.length === 0 ? (
                    <div className="w-full " key={index}>
                      <TooltipProvider disableHoverableContent>
                        <Tooltip delayDuration={100}>
                          <TooltipTrigger asChild>
                            <Button
                              variant={
                                (active === undefined &&
                                  pathname.startsWith(href)) ||
                                active
                                  ? "secondary"
                                  : "ghost"
                              }
                              className={`w-full justify-start h-10 mb-1 hover:bg-muted-foreground/10 hover:text-foreground text-muted-foreground ${
                                (active === undefined &&
                                  pathname.startsWith(href)) ||
                                active
                                  ? "bg-white shadow text-black hover:bg-muted-foreground/10 hover:text-foreground "
                                  : "text-muted-foreground"
                              }`}
                              asChild
                            >
                              <Link href={href}>
                                <span
                                  className={cn(isOpen === false ? "" : "mr-4")}
                                >
                                  {React.createElement(Icon as React.ComponentType<{ className: string }>, { className: "h-5 w-5" })}
                                </span>
                                <p
                                  className={cn(
                                    "max-w-[200px] truncate",
                                    isOpen === false
                                      ? "-translate-x-96 opacity-0"
                                      : "translate-x-0 opacity-100"
                                  )}
                                >
                                  {label}
                                </p>
                              </Link>
                            </Button>
                          </TooltipTrigger>
                          {isOpen === false && (
                            <TooltipContent side="right">
                              {label}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  ) : (
                    <div className="w-full" key={index}>
                      <CollapseMenuButton
                        icon={Icon as LucideIcon}
                        label={label}
                        active={
                          active === undefined
                            ? pathname.startsWith(href)
                            : active
                        }
                        submenus={submenus}
                        isOpen={isOpen}
                      />
                    </div>
                  )
              )}
            </li>
          ))}
          {/* 
          <li className="w-full grow flex items-end">
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => {}}
                    variant="outline"
                    className="w-full justify-center h-10 mt-5"
                  >
                    <span className={cn(isOpen === false ? "" : "mr-4")}>
                      <LogOut size={18} />
                    </span>
                    <p
                      className={cn(
                        "whitespace-nowrap",
                        isOpen === false ? "opacity-0 hidden" : "opacity-100"
                      )}
                    >
                      Sign out
                    </p>
                  </Button>
                </TooltipTrigger>
                {isOpen === false && (
                  <TooltipContent side="right">Sign Out</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          </li> 
          */}
        </ul>
      </nav>
    </ScrollArea>
  );
}