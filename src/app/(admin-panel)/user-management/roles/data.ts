import { Users, Briefcase } from "lucide-react"

export type Role = "member" | "manager" | "admin"

export interface Permission {
  id: string
  name: string
  permissions: {
    update: boolean
    view: boolean
    delete: boolean
    add: boolean
  }
}

export interface PermissionGroup {
  id: string
  name: string
  icon: typeof Users | typeof Briefcase
  items: Permission[]
}

export const permissionGroups: PermissionGroup[] = [
  {
    id: "jobs",
    name: "Jobs management",
    icon: Briefcase,
    items: [
      {
        id: "create-job",
        name: "Create new job and stages",
        permissions: {
          update: false,
          view: true,
          delete: false,
          add: true,
        },
      },
      {
        id: "edit-job",
        name: "Edit job and stages",
        permissions: {
          update: true,
          view: true,
          delete: false,
          add: false,
        },
      },
      {
        id: "archive-jobs",
        name: "Archive jobs",
        permissions: {
          update: false,
          view: true,
          delete: true,
          add: false,
        },
      },
      {
        id: "change-status",
        name: "Change job status",
        permissions: {
          update: true,
          view: true,
          delete: false,
          add: false,
        },
      },
    ],
  },
  {
    id: "candidates",
    name: "Candidate management",
    icon: Users,
    items: [
      {
        id: "change-stage",
        name: "Change candidate stage",
        permissions: {
          update: true,
          view: true,
          delete: false,
          add: false,
        },
      },
      {
        id: "move-terminal",
        name: "Move applicant to terminal stage (Hired, Rejected, On hold)",
        permissions: {
          update: true,
          view: true,
          delete: false,
          add: false,
        },
      },
      {
        id: "read-messages",
        name: "Read messages",
        permissions: {
          update: false,
          view: true,
          delete: false,
          add: false,
        },
      },
      {
        id: "send-messages",
        name: "Send ad-hoc messages to candidates",
        permissions: {
          update: false,
          view: true,
          delete: false,
          add: true,
        },
      },
      {
        id: "reschedule",
        name: "Reschedule interviews",
        permissions: {
          update: true,
          view: true,
          delete: false,
          add: false,
        },
      },
      {
        id: "import",
        name: "Import applicants",
        permissions: {
          update: false,
          view: true,
          delete: false,
          add: true,
        },
      },
    ],
  },
]

