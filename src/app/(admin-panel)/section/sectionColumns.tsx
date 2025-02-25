// sectionColumns.tsx
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Copy, EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import { DataTableColumnHeader } from "@/components/data-table/DataTableColumnHeader";
import { Checkbox } from "@/components/ui/checkbox";
import { SectionModal } from "./SectionModal";
import { Section } from "@/types/section";

export const sectionColumns = (
  onDelete: (id: string) => Promise<void>,
  onEdit: (data: Section) => Promise<void>,
  parentSections: Section[]
): ColumnDef<Section>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    )
  },
  {
    accessorKey: "path",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Path" />
    )
  },
  {
    accessorKey: "parentId",
    header: "Parent Section",
    cell: ({ row }: { row: any }) => {
      const parent = row.original.parentId;
      return parent && typeof parent === "object" && parent.name
        ? parent.name
        : "No Parent";
    }
  },
  {
    accessorKey: "dateCreated",
    header: "Date"
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const section = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <EllipsisVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="p-2">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(section._id)}
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <SectionModal
              mode="edit"
              section={section}
              parentSections={parentSections}
              onSave={async (data) => {
                if (!data._id) {
                  throw new Error("ID is required for edit mode");
                }
                onEdit({
                  _id: data._id,
                  name: data.name,
                  parentId: data.parentId,
                  path: data.path,
                  icon: data.icon,
                  dateCreated: section.dateCreated
                });
              }}
            >
              <Button variant="ghost" className="w-full justify-start">
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </SectionModal>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-500"
              onClick={() => onDelete(section._id)}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];
