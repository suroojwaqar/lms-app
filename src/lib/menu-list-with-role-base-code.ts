import {
  LucideIcon,
  LayoutGrid,
  Users,
  Book,
  FileText,
  ClipboardList,
  BarChart,
  MessageSquare,
  CreditCard,
  LifeBuoy,
  HelpCircle,
  User,
  Settings
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

type Permission = {
  sectionId: {
    _id: string;
    name: string;
    path: string;
    icon: string;
    parentId: string | null;
  };
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
  _id: string;
};

// Fetch user permissions based on roleId
async function fetchUserPermissions(roleId: string) {
  try {
    const userStore = localStorage.getItem("user");
    if (!userStore) {
      throw new Error("No user data found in localStorage. Please log in.");
    }

    const user = JSON.parse(userStore);
    const token = user.access_token;

    if (!token) {
      throw new Error("No token found in user data. Please log in.");
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/roles/${roleId}`, // Fetch permissions for the role
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch user permissions: ${response.statusText}`
      );
    }

    const result = await response.json();
    console.log( "permissions",result);
    
    return result.permissions; // Assuming the API returns permissions in a `permissions` field
  } catch (err) {
    console.error("Error fetching user permissions:", err);
    return []; // Return an empty array in case of error
  }
}

// Map API sections to the required menu format
function mapSectionsToMenu(permissions: Permission[]): Group[] {
  // First, group sections by parentId
  const mainSections = permissions.filter(p => p.sectionId.parentId === null);
  const subSections = permissions.filter(p => p.sectionId.parentId !== null);

  return mainSections
    .filter(mainSection => mainSection.read) // Only include sections user can read
    .map(mainSection => ({
      groupLabel: mainSection.sectionId.name,
      menus: [{
        href: mainSection.sectionId.path,
        label: mainSection.sectionId.name,
        icon: getIconComponent(mainSection.sectionId.icon),
        submenus: subSections
          .filter(sub => 
            sub.sectionId.parentId === mainSection.sectionId._id && 
            sub.read
          )
          .map(sub => ({
            href: sub.sectionId.path,
            label: sub.sectionId.name
          }))
      }]
    }));
}

// Helper function to dynamically import icons based on the icon name from the API
function getIconComponent(iconName: string): LucideIcon {
  const iconMap: { [key: string]: LucideIcon } = {
    LayoutGrid,
    Users,
    Book,
    FileText,
    ClipboardList,
    BarChart,
    MessageSquare,
    CreditCard,
    LifeBuoy,
    HelpCircle,
    User,
    Settings
  };

  return iconMap[iconName] || Settings; // Default to Settings icon if no match is found
}

// Get the dynamic menu list from the API and filter based on user permissions
export async function getMenuList(pathname: string): Promise<Group[]> {
  const userStore = localStorage.getItem("user");
  if (!userStore) {
    throw new Error("No user data found in localStorage. Please log in.");
  }

  const user = JSON.parse(userStore);
  console.log( "user",user);

  const roleId = user.user.roleId; // Update this line to access nested roleId

  if (!roleId) {
    throw new Error("No roleId found in user data. Please log in.");
  }

  // Only fetch permissions since we don't need separate sections anymore
  const permissions = await fetchUserPermissions(roleId);
  
  // Map permissions directly to menu structure
  return mapSectionsToMenu(permissions);
}
