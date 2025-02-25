import ProtectedRoute from "@/components/ProtectedRoute";
import AdminPanelparentLayout from "@/components/admin-panel-other/admin-panel-parent-layout";

export default function DemoLayout({
  children
}: {
  children: React.ReactNode;
}) {
 return (
   <ProtectedRoute>
     <AdminPanelparentLayout>{children}</AdminPanelparentLayout>
   </ProtectedRoute>
 );
}
