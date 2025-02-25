"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Copy, EllipsisVertical, Eye, Pencil, Trash2 } from "lucide-react";
import { DataTableColumnHeader } from "@/components/data-table/DataTableColumnHeader";
import { Checkbox } from "@/components/ui/checkbox";
import { AttributeModal } from "./AttributeModal"; // Import the combined modal
import { AttributeType } from "@/types/attribute-type";
import { format } from "date-fns";

// Define the columns for the data table
export const inColumns = (
  deleteItem: (id: string) => void,
  editItem: (data: { _id: string; name: string }) => void
): ColumnDef<AttributeType>[] => [
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
    ),
    cell: ({ row }) => (
      <div className="flex items-center space-x-3">
        <span>{row.original.name}</span>
      </div>
    )
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as string;
      return <div>{format(new Date(date), "MMM dd, yyyy")}</div>;
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const influencerAction = row.original;

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
              onClick={() =>
                navigator.clipboard.writeText(influencerAction._id)
              }
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            {/* Add the EditAttributeModal */}
            <AttributeModal
              mode="edit"
              attribute={influencerAction}
              onSave={(data) => editItem({ _id: data._id!, name: data.name })}
            >
              <Button variant="ghost" className="w-full justify-start">
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </AttributeModal>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-500"
              onClick={() => deleteItem(influencerAction._id)}
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