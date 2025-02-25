import ProtectedRoute from "@/components/ProtectedRoute";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

export default function DemoLayout({
  children
}: {
  children: React.ReactNode;
}) {
 return (
   <ProtectedRoute>
     <AdminPanelLayout>{children}</AdminPanelLayout>
   </ProtectedRoute>
 );
}
