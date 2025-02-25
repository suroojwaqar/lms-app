"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";

interface Role {
  _id: string;
  name: string;
  permissions: Array<{
    sectionId: string;
    create: boolean;
    read: boolean;
    update: boolean;
    delete: boolean;
  }>;
}

interface RoleListProps {
  onRoleSelect: (role: Role) => void;
  onCreateNewRole: () => void;
}

export function RoleList({ onRoleSelect, onCreateNewRole }: RoleListProps) {
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    const loadRoles = async () => {
      const userStore = localStorage.getItem("user");
      if (!userStore) {
        throw new Error("No user data found in localStorage. Please log in.");
      }

      const user = JSON.parse(userStore);
      const token = user.access_token;

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/roles`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setRoles(data);
      } catch (error) {
        console.error("Error fetching roles:", error);
        setRoles([]);
      }
    };

    loadRoles();
  }, []);

  const handleRoleSelect = async (role: Role) => {
    const userStore = localStorage.getItem("user");
    if (!userStore) {
      throw new Error("No user data found in localStorage. Please log in.");
    }
  
    const user = JSON.parse(userStore);
    const token = user.access_token;
  
    try {
      // Fetch the complete role data including permissions
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/roles/${role._id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const completeRole = await response.json();
      onRoleSelect(completeRole); // Pass the complete role data to the parent component
    } catch (error) {
      console.error("Error fetching role details:", error);
    }
  };

  return (
    <div className="w-[200px] border-r">
      <div className="p-4 font-semibold">Roles</div>
      <ScrollArea className="h-[calc(100vh-120px)]">
        <div className="space-y-1 p-2">
          {roles.map((role) => (
            <Button
              key={role._id}
              variant="ghost"
              className="w-full justify-start font-normal"
              onClick={() => handleRoleSelect(role)}
            >
              {role.name}
            </Button>
          ))}
        </div>
      </ScrollArea>

      <div className="p-2">
        <Button className="w-full" onClick={onCreateNewRole}>
          Add New Role
        </Button>
      </div>
    </div>
  );
}