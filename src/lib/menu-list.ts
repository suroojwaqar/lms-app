import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  ClipboardList
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};



export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "User Management",
          icon: Users,
          submenus: [
            {
              href: "/user-management",
              label: "Users"
            },
            {
              href: "/user-management/roles",
              label: "Role"
            }
          ]
        }
      ]
    },
    {
      groupLabel: "Curriculum Management",
      menus: [
        {
          href: "",
          label: "Curriculum Management",
          icon: ClipboardList,
          submenus: [
            {
              href: "/classes",
              label: "Classes"
            },

            {
              href: "/subjects",
              label: "Subjects"
            },

            {
              href: "/chapters",
              label: "Chapters"
            },
            {
              href: "/lectures",
              label: "Lectures"
            },
            {
              href: "/assessments",
              label: "Assessments"
            }
          ]
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "",
          label: "Meta Data",
          icon: ClipboardList,
          submenus: [
            {
              href: "/attribute-type",
              label: "Attribute Type"
            },
            {
              href: "/section",
              label: "Section"
            },
            {
              href: "/attributes",
              label: "Attributes"
            }
          ]
        }
      ]
    },
  
  ];
}
