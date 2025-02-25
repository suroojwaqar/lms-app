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
import { LectureModal } from "./LectureModal";
import { Lecture } from "@/types/lecture";
import { Chapter } from "@/types/chapter";

export const lectureColumns = (
  onDelete: (id: string) => Promise<void>,
  onEdit: (data: Lecture) => Promise<void>,
  chapters: Chapter[]
): ColumnDef<Lecture>[] => [
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
    accessorKey: "estimatedDuration",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Duration" />
    ),
    cell: ({ row }) => `${row.getValue<number>("estimatedDuration")}min`
  },
  {
    accessorKey: "chapterId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Chapter" />
    ),
    cell: ({ row }) => {
      const chapter = chapters.find(c => c._id === row.getValue("chapterId"));
      return <span>{chapter?.displayName || "Unknown Chapter"}</span>;
    }
  },
  {
    accessorKey: "isPublished",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <span className={`px-2 py-1 rounded ${
        row.getValue("isPublished") ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
      }`}>
        {row.getValue("isPublished") ? "Published" : "Draft"}
      </span>
    )
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const lecture = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <EllipsisVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(lecture._id)}>
              <Copy className="mr-2 h-4 w-4" /> Copy ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <LectureModal
              mode="edit"
              lecture={lecture}
              chapters={chapters}
              onSave={async (data) => {
                onEdit({
                  ...data,
                  _id: lecture._id,
                  dateCreated: lecture.dateCreated
                });
              }}
            >
              <Button variant="ghost" className="w-full justify-start">
                <Pencil className="mr-2 h-4 w-4" /> Edit
              </Button>
            </LectureModal>
            <DropdownMenuItem
              className="text-red-500"
              onClick={() => onDelete(lecture._id)}
            >
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];
