"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/admin-panel/user-nav";
import { SheetMenu } from "@/components/admin-panel/sheet-menu";
import { useStore } from "@/hooks/use-store";
import { useSidebar } from "@/hooks/use-sidebar";
import { SidebarToggle } from "./sidebar-toggle";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "../ui/breadcrumb";
import { GlobalSearch } from "../GlobalSearch";

interface NavbarProps {
  title: string;
}

export function 
Navbar({ title }: NavbarProps) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const sidebar = useStore(useSidebar, (x) => x);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      // router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!sidebar || !isAuthenticated) return null;

  const { isOpen, toggleOpen } = sidebar;

  return (
    <>
      <header
        className="sticky top-0 z-10 w-full bg-muted/50 backdrop-blur rounded-t-2xl dark:bg-dashboard-background"
        style={{ backdropFilter: "blur(20px)" }}
      >
        <div className="mx-4 sm:mx-8 flex h-14 items-center">
          <div className="flex items-center space-x-4 lg:space-x-0">
            <SheetMenu />
            <SidebarToggle isOpen={isOpen} setIsOpen={toggleOpen} />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center justify-center absolute left-[50%] translate-x-[-50%] w-[40%]">
            <div className="w-full md:flex-none">
              <GlobalSearch onSearchOpen={setIsSearchOpen} />
            </div>
          </div>

          <div className="flex flex-1 items-center justify-end">
            <ModeToggle />
            <UserNav />
          </div>
        </div>
      </header>
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-20"
          onClick={() => setIsSearchOpen(false)}
        />
      )}
    </>
  );
}
