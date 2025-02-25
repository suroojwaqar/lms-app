"use client";

import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React, { useEffect, useState } from "react";
import { InDataTable } from "@/components/data-table/InDataTable";
import { inColumns } from "./inColumns";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { AttributeModal } from "./AttributeModal";
import { Button } from "@/components/ui/button";
import { attributeTypeApi } from "@/utils/attribute-type-api";
import type { AttributeType } from "@/types/attribute-type";
import { FormSkeleton } from "@/components/ui/skeleton-form";

export default function AttributeType() {
  const [data, setData] = useState<AttributeType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const deleteItem = async (id: string) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this item?"
      );
      if (!confirmDelete) return;

      await attributeTypeApi.delete(id);
      setData((prevData) => prevData.filter((item) => item._id !== id));
      toast({
        variant: "destructive",
        title: "Success",
        description: "Item deleted successfully!",
      });
    } catch (err) {
      console.error("Error deleting item:", err);
      toast({
        title: "Error",
        description: "Failed to delete item. Please try again.",
        variant: "destructive",
      });
    }
  };

  const addItem = async (newData: { name: string }) => {
    try {
      const result = await attributeTypeApi.create(newData);
      setData((prevData) => [...prevData, result]);
      toast({
        title: "Success",
        description: "Item added successfully!",
      });
    } catch (err) {
      console.error("Error adding item:", err);
      toast({
        title: "Error",
        description: "Failed to add item. Please try again.",
        variant: "destructive",
      });
    }
  };

  const editItem = async (updatedData: { _id: string; name: string }) => {
    try {
      await attributeTypeApi.update(updatedData);
      setData((prevData) =>
        prevData.map((item) =>
          item._id === updatedData._id ? { ...item, name: updatedData.name } : item
        )
      );
      toast({
        title: "Success",
        description: "Item updated successfully!",
      });
    } catch (err) {
      console.error("Error updating item:", err);
      toast({
        title: "Error",
        description: "Failed to update item. Please try again.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await attributeTypeApi.getAll();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 if (loading) {
   return <FormSkeleton />;
 }

  if (error) return <div>Error: {error}</div>;

  return (
    <ContentLayout title="Attribute Types">
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
              <BreadcrumbPage>Attribute Types</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Add the combined modal for "add" mode */}
        <AttributeModal mode="add" onSave={addItem}>
          <Button className="btn-fill primary">Add New</Button>
        </AttributeModal>
      </div>

      <section className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-2xl mb-3">Attribute Types List</h1>
          <p className="text-xs text-muted-foreground">
            All Attribute Types goes here
          </p>
        </div>
      </section>

      <InDataTable columns={inColumns(deleteItem, editItem)} data={data} />
    </ContentLayout>
  );
}