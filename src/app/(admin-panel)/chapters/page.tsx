"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Chapter } from "@/types/chapter";
import { Subject } from "@/types/subject";
import { chapterApi } from "@/utils/chapterApi";
import { subjectApi } from "@/utils/subjectApi";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { InDataTable } from "@/components/data-table/InDataTable";
import { chapterColumns } from "./chapterColumns";
import { ChapterModal } from "./ChapterModal";
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

export default function ChaptersPage() {
  const [data, setData] = useState<Chapter[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [chaptersData, subjectsData] = await Promise.all([
        chapterApi.getChapters(),
        subjectApi.getSubjects()
      ]);
      setData(chaptersData);
      setSubjects(subjectsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleAddChapter = async (newData: Omit<Chapter, '_id' | 'dateCreated'>) => {
    try {
      const result = await chapterApi.createChapter(newData);
      setData(prev => [...prev, result]);
      showSuccessToast("Chapter added successfully!");
    } catch (err) {
      handleError(err, "Failed to add chapter");
    }
  };

  const handleEditChapter = async (updatedData: Chapter) => {
    try {
      const result = await chapterApi.updateChapter(updatedData._id, updatedData);
      setData(prev => prev.map(chapter => 
        chapter._id === updatedData._id ? result : chapter
      ));
      showSuccessToast("Chapter updated successfully!");
    } catch (err) {
      handleError(err, "Failed to update chapter");
    }
  };

  const handleDeleteChapter = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this chapter?")) return;

    try {
      await chapterApi.deleteChapter(id);
      setData(prev => prev.filter(chapter => chapter._id !== id));
      showSuccessToast("Chapter deleted successfully!");
    } catch (err) {
      handleError(err, "Failed to delete chapter");
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

 if (loading) {   return <FormSkeleton />; }
  if (error) return <div>Error: {error}</div>;

  return (
    <ContentLayout title="Chapters">
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
              <BreadcrumbPage>Chapters</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <ChapterModal
          mode="add"
          subjects={subjects}
          onSave={handleAddChapter}
        >
          <Button className="btn-fill primary">Add New</Button>
        </ChapterModal>
      </div>

      <section className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-2xl mb-3">Chapters List</h1>
          <p className="text-xs text-muted-foreground">All Chapters go here</p>
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
        columns={chapterColumns(handleDeleteChapter, handleEditChapter, subjects)}
        data={filteredData}
      />
    </ContentLayout>
  );
}
