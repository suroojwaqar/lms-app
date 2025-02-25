"use client";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";

interface GlobalSearchProps {
  onSearchOpen: (isOpen: boolean) => void;
}

export function GlobalSearch({ onSearchOpen }: GlobalSearchProps) {
  const [open, setOpen] = React.useState(false);
  interface Section {
    id: string;
    _id?: string;
    name: string;
    path: string;
  }

  const [sections, setSections] = React.useState<Section[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchSections = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}sections`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch sections");
        }
        const data = await response.json();
        setSections(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.addEventListener("keydown", down);
      } else {
        document.removeEventListener("keydown", down);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", down);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    onSearchOpen(open);
  }, [open, onSearchOpen]);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative w-full justify-start text-sm text-muted-foreground sm:pr-12 hover:bg-background/80",
          "hidden md:inline-flex"
        )}
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">Search sections...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search sections..." />
        <CommandList>
          {loading && <CommandEmpty>Loading sections...</CommandEmpty>}
          {error && <CommandEmpty>Error: {error}</CommandEmpty>}
          {!loading && !error && (
            <>
              <CommandEmpty>No sections found.</CommandEmpty>
              <CommandGroup heading="Sections">
                {sections.map((section) => (
                  <CommandItem
                    key={section.id || section._id}
                    onSelect={() =>
                      runCommand(() => {
                        window.location.href = section.path;
                      })
                    }
                  >
                    <Search className="mr-2 h-4 w-4" />
                    <span>{section.name}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}
          <CommandGroup heading="Settings">
            <CommandItem
              onSelect={() => runCommand(() => console.log("Profile"))}
            >
              <Search className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => console.log("Billing"))}
            >
              <Search className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => console.log("Settings"))}
            >
              <Search className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
