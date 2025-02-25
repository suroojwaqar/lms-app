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
import { SubjectModal } from "./SubjectModal";
import { Subject } from "@/types/subject";
import { Class } from "@/types/class";

export const subjectColumns = (
  onDelete: (id: string) => Promise<void>,
  onEdit: (data: Subject) => Promise<void>,
  classes: Class[]
): ColumnDef<Subject>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
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
    accessorKey: "displayName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Display Name" />
    )
  },
  {
    accessorKey: "classId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Class" />
    ),
    cell: ({ row }) => {
      const classItem = classes.find(c => c._id === row.getValue("classId"));
      return <span>{classItem?.displayName || "Unknown Class"}</span>;
    }
  },
  {
    accessorKey: "metadata.credits",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Credits" />
    )
  },
  {
    accessorKey: "currentVersion",
    header: "Version"
  },
  {
    accessorKey: "isActive",
    header: "Status",
    cell: ({ row }) => (
      <span className={`px-2 py-1 rounded ${row.original.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {row.original.isActive ? 'Active' : 'Inactive'}
      </span>
    )
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const subject = row.original;

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
              onClick={() => navigator.clipboard.writeText(subject._id)}
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <SubjectModal
              mode="edit"
              subject={subject}
              classes={classes}
              onSave={async (data) => {
                if (!data._id) throw new Error("ID is required for edit mode");
                onEdit({
                  ...data,
                  _id: data._id,
                  dateCreated: subject.dateCreated
                } as Subject);
              }}
            >
              <Button variant="ghost" className="w-full justify-start">
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </SubjectModal>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-500"
              onClick={() => onDelete(subject._id)}
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
