import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

export default function NotFound() {
  return (
    <AdminPanelLayout>
      <ContentLayout title="404 Not Found">
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              404
            </h1>
            <h2 className="text-xl font-semibold">Page not found</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
          </div>
          <Button asChild>
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </ContentLayout>
    </AdminPanelLayout>
  );
}
