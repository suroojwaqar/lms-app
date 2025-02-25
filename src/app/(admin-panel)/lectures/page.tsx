"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lecture } from "@/types/lecture";
import { Chapter } from "@/types/chapter";
import { lectureApi } from "@/utils/lectureApi";
import { chapterApi } from "@/utils/chapterApi";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { InDataTable } from "@/components/data-table/InDataTable";
import { lectureColumns } from "./lectureColumns";
import { LectureModal } from "./LectureModal";
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

export default function LecturesPage() {
  const [data, setData] = useState<Lecture[]>([]);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [lecturesData, chaptersData] = await Promise.all([
        lectureApi.getLectures(),
        chapterApi.getChapters()
      ]);
      setData(lecturesData);
      setChapters(chaptersData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const showSuccessToast = (message: string) => {
    toast({
      title: "Success",
      description: message,
    });
  };

  const handleError = (err: unknown, fallbackMessage: string) => {
    console.error(err);
    toast({
      title: "Error",
      description: err instanceof Error ? err.message : fallbackMessage,
      variant: "destructive"
    });
  };

  const handleAddLecture = async (newData: Omit<Lecture, '_id' | 'dateCreated'>) => {
    try {
      const result = await lectureApi.createLecture(newData);
      setData(prev => [...prev, result]);
      showSuccessToast("Lecture added successfully!");
    } catch (err) {
      handleError(err, "Failed to add lecture");
    }
  };

  const handleEditLecture = async (updatedData: Lecture) => {
    try {
      const result = await lectureApi.updateLecture(updatedData._id, updatedData);
      setData(prev => prev.map(lecture => 
        lecture._id === updatedData._id ? result : lecture
      ));
      showSuccessToast("Lecture updated successfully!");
    } catch (err) {
      handleError(err, "Failed to update lecture");
    }
  };

  const handleDeleteLecture = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this lecture?")) return;

    try {
      await lectureApi.deleteLecture(id);
      setData(prev => prev.filter(lecture => lecture._id !== id));
      showSuccessToast("Lecture deleted successfully!");
    } catch (err) {
      handleError(err, "Failed to delete lecture");
    }
  };

if (loading) {   return <FormSkeleton />; }
  if (error) return <div>Error: {error}</div>;

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <ContentLayout title="Lectures">
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
              <BreadcrumbPage>Lectures</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <LectureModal
          mode="add"
          chapters={chapters}
          onSave={handleAddLecture}
        >
          <Button className="btn-fill primary">Add New</Button>
        </LectureModal>
      </div>

      <section className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-2xl mb-3">Lectures List</h1>
          <p className="text-xs text-muted-foreground">All Lectures go here</p>
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
        columns={lectureColumns(handleDeleteLecture, handleEditLecture, chapters)}
        data={filteredData}
      />
    </ContentLayout>
  );
}
