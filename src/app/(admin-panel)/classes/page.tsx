"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Class } from "@/types/class";
import { classApi } from "@/utils/classApi"; // Add this import
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { InDataTable } from "@/components/data-table/InDataTable";
import { classColumns } from "./classColumns";
import { ClassModal } from "./ClassModal";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { FormSkeleton } from "@/components/ui/skeleton-form";

export default function ClassPage() {
  const [data, setData] = useState<Class[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const classes = await classApi.getClasses();
      setData(classes);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleAddClass = async (newData: Omit<Class, '_id' | 'dateCreated'>) => {
    try {
      const result = await classApi.createClass(newData);
      setData(prev => [...prev, result]);
      showSuccessToast("Class added successfully!");
    } catch (err) {
      handleError(err, "Failed to add class");
    }
  };

  const handleEditClass = async (updatedData: Class) => {
    try {
      const result = await classApi.updateClass(updatedData._id, updatedData);
      setData(prev => prev.map(cls => 
        cls._id === updatedData._id ? result : cls
      ));
      showSuccessToast("Class updated successfully!");
    } catch (err) {
      handleError(err, "Failed to update class");
    }
  };

  const handleDeleteClass = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this class?")) return;

    try {
      await classApi.deleteClass(id);
      setData(prev => prev.filter(cls => cls._id !== id));
      showSuccessToast("Class deleted successfully!");
    } catch (err) {
      handleError(err, "Failed to delete class");
    }
  };

  const showSuccessToast = (message: string) => {
    toast({ title: "Success", description: message });
  };

  const handleError = (err: unknown, fallbackMessage: string) => {
    console.error(err);
    toast({
      title: "Error",
      description: err instanceof Error ? err.message : fallbackMessage,
      variant: "destructive"
    });
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

   if (loading) {
     return <FormSkeleton />;
   }
  if (error) return <div>Error: {error}</div>;

  return (
    <ContentLayout title="Classes">
      <Toaster />
      <div className="flex justify-between items-center mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Classes</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <ClassModal
          mode="add"
          onSave={handleAddClass}
        >
          <Button className="btn-fill primary">Add New</Button>
        </ClassModal>
      </div>

      <section className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-2xl mb-3">Classes List</h1>
          <p className="text-xs text-muted-foreground">All Classes go here</p>
        </div>
        <div className="flex items-center">
          <Input
            placeholder="Search ..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="max-w-[300px] bg-background dark:bg-gray-950 dark:text-white dark:border-gray-700"
          />
        </div>
      </section>

      <InDataTable
        columns={classColumns(handleDeleteClass, handleEditClass)}
        data={filteredData}
      />
    </ContentLayout>
  );
}
