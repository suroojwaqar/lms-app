"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Section } from "@/types/section";
import { sectionApi } from "@/utils/sectionApi";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import { InDataTable } from "@/components/data-table/InDataTable";
import { sectionColumns } from "./sectionColumns";
import { SectionModal } from "./SectionModal";
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


export default function SectionPage() {
  const [data, setData] = useState<Section[]>([]);
  const [parentSections, setParentSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      const sections = await sectionApi.getSections();
      setData(sections);
      setParentSections(sections.filter(section => !section.parentId));
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleAddSection = async (newData: Omit<Section, '_id' | 'dateCreated'>) => {
    try {
      const result = await sectionApi.createSection(newData);
      setData(prev => [...prev, result]);
      showSuccessToast("Section added successfully!");
    } catch (err) {
      handleError(err, "Failed to add section");
    }
  };

  const handleEditSection = async (updatedData: Section) => {
    try {
      const result = await sectionApi.updateSection(updatedData._id, updatedData);
      setData(prev => prev.map(section => 
        section._id === updatedData._id ? result : section
      ));
      showSuccessToast("Section updated successfully!");
    } catch (err) {
      handleError(err, "Failed to update section");
    }
  };

  const handleDeleteSection = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this section?")) return;

    try {
      await sectionApi.deleteSection(id);
      setData(prev => prev.filter(section => section._id !== id));
      showSuccessToast("Section deleted successfully!");
    } catch (err) {
      handleError(err, "Failed to delete section");
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
    <ContentLayout title="Sections">
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
              <BreadcrumbPage>Sections</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <SectionModal
          mode="add"
          parentSections={parentSections}
          onSave={handleAddSection}
        >
          <Button className="btn-fill primary">Add New</Button>
        </SectionModal>
      </div>

      <section className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-2xl mb-3">Sections List</h1>
          <p className="text-xs text-muted-foreground">All Sections go here</p>
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
        columns={sectionColumns(
          handleDeleteSection,
          handleEditSection,
          parentSections
        )}
        data={filteredData}
      />
    </ContentLayout>
  );
}
