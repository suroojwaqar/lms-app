import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Section {
  _id: string;
  name: string;
  path: string;
  parentId: Section | null;
  __v: number;
}

interface HierarchicalSection extends Section {
  children?: HierarchicalSection[];
}

interface Permission {
  sectionId: string;
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}

interface RoleFormProps {
  role: any;
  onSave: (updatedRole: any) => void;
  onCancel: () => void;
  isCreatingNewRole: boolean;
}

export function RoleForm({ role, onSave, onCancel, isCreatingNewRole }: RoleFormProps) {
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [sections, setSections] = useState<HierarchicalSection[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize role data when role prop changes
  useEffect(() => {
    if (role) {
      setRoleName(role.name || "");
      // If editing an existing role, use its permissions
      if (!isCreatingNewRole && role.permissions) {
        setPermissions(role.permissions);
      } else {
        // If creating a new role, initialize permissions based on sections
        const initialPermissions = createInitialPermissions(sections);
        setPermissions(initialPermissions);
      }
    }
  }, [role, isCreatingNewRole, sections]);

  // Load sections and initialize permissions
  useEffect(() => {
    const loadSections = async () => {
      const userStore = localStorage.getItem("user");
      if (!userStore) {
        throw new Error("No user data found in localStorage. Please log in.");
      }

      const user = JSON.parse(userStore);
      const token = user.access_token;

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/sections`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const data: Section[] = await response.json();
        const hierarchicalSections = transformSections(data);
        setSections(hierarchicalSections);

        // Only initialize permissions if creating new role or no permissions exist
        if (isCreatingNewRole || !role?.permissions) {
          const initialPermissions = createInitialPermissions(hierarchicalSections);
          setPermissions(initialPermissions);
        }
      } catch (error) {
        console.error("Error fetching sections:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSections();
  }, [role?.permissions, isCreatingNewRole]);

  const createInitialPermissions = (sections: HierarchicalSection[]): Permission[] => {
    return sections.flatMap(section => [
      {
        sectionId: section._id,
        create: false,
        read: false,
        update: false,
        delete: false
      },
      ...(section.children?.map(child => ({
        sectionId: child._id,
        create: false,
        read: false,
        update: false,
        delete: false
      })) || [])
    ]);
  };

  const getPermissionState = (sectionId: string, permissionType: keyof Permission): boolean => {
    const permission = permissions.find(perm => perm.sectionId === sectionId);
    return permission ? Boolean(permission[permissionType]) : false;
  };

  const handlePermissionChange = (sectionId: string, permissionType: keyof Permission, checked: boolean) => {
    setPermissions(prevPermissions =>
      prevPermissions.map(perm =>
        perm.sectionId === sectionId
          ? { ...perm, [permissionType]: checked }
          : perm
      )
    );
  };

  const handleGroupPermissionChange = (section: HierarchicalSection, permissionType: keyof Permission, checked: boolean) => {
    setPermissions(prevPermissions => {
      const updatedPermissions = [...prevPermissions];
      
      // Update parent section
      const parentIndex = updatedPermissions.findIndex(perm => perm.sectionId === section._id);
      if (parentIndex !== -1) {
        updatedPermissions[parentIndex] = {
          ...updatedPermissions[parentIndex],
          [permissionType]: checked
        };
      }

      // Update children sections
      if (section.children) {
        section.children.forEach(child => {
          const childIndex = updatedPermissions.findIndex(perm => perm.sectionId === child._id);
          if (childIndex !== -1) {
            updatedPermissions[childIndex] = {
              ...updatedPermissions[childIndex],
              [permissionType]: checked
            };
          }
        });
      }

      return updatedPermissions;
    });
  };

  const renderSectionRow = (section: HierarchicalSection, index: number) => (
    <React.Fragment key={`section-group-${section._id}-${index}`}>
      <TableRow className="font-medium">
        <TableCell className="flex items-center gap-5 pt-4 pb-4">
          <strong>{section.name}</strong>
        </TableCell>
        {['create', 'read', 'update', 'delete'].map(permissionType => (
          <TableCell key={`${section._id}-${permissionType}`}>
            <Checkbox
              checked={getPermissionState(section._id, permissionType as keyof Permission)}
              onCheckedChange={(checked) => 
                handleGroupPermissionChange(section, permissionType as keyof Permission, checked as boolean)}
            />
          </TableCell>
        ))}
      </TableRow>
      {section.children?.map((child, childIndex) => (
        <TableRow key={`${child._id}-${childIndex}`}>
          <TableCell className="pl-8">{child.name}</TableCell>
          {['create', 'read', 'update', 'delete'].map(permissionType => (
            <TableCell key={`${child._id}-${permissionType}`}>
              <Checkbox
                checked={getPermissionState(child._id, permissionType as keyof Permission)}
                onCheckedChange={(checked) => 
                  handlePermissionChange(child._id, permissionType as keyof Permission, checked as boolean)}
              />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </React.Fragment>
  );

  const handleSubmit = () => {
    const updatedRole = {
      ...(role?._id && { _id: role._id }),
      name: roleName,
      permissions: permissions
    };
    onSave(updatedRole);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-1 p-6 space-y-8 overflow-auto">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            {isCreatingNewRole ? "Add New Role" : "Edit Role"}
          </h2>
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Enter Role Name"
              className="w-full"
              value={roleName}
              onChange={(e) => setRoleName(e.target.value)}
            />
          </div>
        </div>
        <div className="space-x-2">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            Save <Plus className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-medium">All Sections</h3>
          <div className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-600">
            {sections.length}
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Actions</TableHead>
              <TableHead>Create</TableHead>
              <TableHead>Read</TableHead>
              <TableHead>Update</TableHead>
              <TableHead>Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sections.map((section, index) => renderSectionRow(section, index))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const transformSections = (sections: Section[]): HierarchicalSection[] => {
  const sectionMap: { [key: string]: HierarchicalSection } = {};

  sections.forEach(section => {
    sectionMap[section._id] = { ...section, children: [] };
  });

  const hierarchicalSections: HierarchicalSection[] = [];

  sections.forEach(section => {
    if (section.parentId) {
      const parent = sectionMap[section.parentId._id];
      if (parent) {
        parent.children!.push(sectionMap[section._id]);
      }
    } else {
      hierarchicalSections.push(sectionMap[section._id]);
    }
  });

  return hierarchicalSections;
};