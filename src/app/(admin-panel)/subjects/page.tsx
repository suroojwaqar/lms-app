"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Subject } from "@/types/subject";
import { Class } from "@/types/class";
import { subjectApi } from "@/utils/subjectApi";
import { classApi } from "@/utils/classApi"; // You'll need to import your class API
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { InDataTable } from "@/components/data-table/InDataTable";
import { subjectColumns } from "./subjectColumns";
import { SubjectModal } from "./SubjectModal";
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

export default function SubjectsPage() {
  const [data, setData] = useState<Subject[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [subjectsData, classesData] = await Promise.all([
        subjectApi.getSubjects(),
        classApi.getClasses()
      ]);
      setData(subjectsData);
      setClasses(classesData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleAddSubject = async (newData: Omit<Subject, '_id' | 'dateCreated'>) => {
    try {
      const result = await subjectApi.createSubject(newData);
      setData(prev => [...prev, result]);
      showSuccessToast("Subject added successfully!");
    } catch (err) {
      handleError(err, "Failed to add subject");
    }
  };

  const handleEditSubject = async (updatedData: Subject) => {
    try {
      const result = await subjectApi.updateSubject(updatedData._id, updatedData);
      setData(prev => prev.map(subject => 
        subject._id === updatedData._id ? result : subject
      ));
      showSuccessToast("Subject updated successfully!");
    } catch (err) {
      handleError(err, "Failed to update subject");
    }
  };

  const handleDeleteSubject = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this subject?")) return;

    try {
      await subjectApi.deleteSubject(id);
      setData(prev => prev.filter(subject => subject._id !== id));
      showSuccessToast("Subject deleted successfully!");
    } catch (err) {
      handleError(err, "Failed to delete subject");
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
    <ContentLayout title="Subjects">
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
              <BreadcrumbPage>Subjects</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <SubjectModal
          mode="add"
          classes={classes}
          onSave={handleAddSubject}
        >
          <Button className="btn-fill primary">Add New</Button>
        </SubjectModal>
      </div>

      <section className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-2xl mb-3">Subjects List</h1>
          <p className="text-xs text-muted-foreground">All Subjects go here</p>
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
        columns={subjectColumns(handleDeleteSubject, handleEditSubject, classes)}
        data={filteredData}
      />
    </ContentLayout>
  );
}
