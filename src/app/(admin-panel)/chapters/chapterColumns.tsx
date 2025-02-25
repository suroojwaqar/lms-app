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
import { ChapterModal } from "./ChapterModal";
import { Chapter } from "@/types/chapter";
import { Subject } from "@/types/subject";

export const chapterColumns = (
  onDelete: (id: string) => Promise<void>,
  onEdit: (data: Chapter) => Promise<void>,
  subjects: Subject[]
): ColumnDef<Chapter>[] => [
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
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    )
  },
  {
    accessorKey: "order",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Order" />
    )
  },
  {
    accessorKey: "subjectId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subject" />
    ),
    cell: ({ row }) => {
      const subject = subjects.find(s => s._id === row.getValue("subjectId"));
      return <span>{subject?.displayName || "Unknown Subject"}</span>;
    }
  },
  {
    accessorKey: "displayName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Display Name" />
    )
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    )
  },
  {
    accessorKey: "metadata.difficulty",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Difficulty" />
    ),
    cell: ({ row }) => {
      const difficulty = row.original.metadata.difficulty;
      return (
        <span className={`px-2 py-1 rounded capitalize
          ${difficulty === 'beginner' ? 'bg-green-100 text-green-800' : 
            difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' : 
            'bg-red-100 text-red-800'}`}
        >
          {difficulty}
        </span>
      );
    }
  },
  {
    accessorKey: "metadata.estimatedHours",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Hours" />
    ),
    cell: ({ row }) => `${row.original.metadata.estimatedHours}h`
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const chapter = row.original;

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
              onClick={() => navigator.clipboard.writeText(chapter._id)}
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <ChapterModal
              mode="edit"
              chapter={chapter}
              subjects={subjects}
              onSave={async (data) => {
                onEdit({
                  ...data,
                  _id: chapter._id,
                  dateCreated: chapter.dateCreated
                });
              }}
            >
              <Button variant="ghost" className="w-full justify-start">
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </ChapterModal>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-500"
              onClick={() => onDelete(chapter._id)}
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
