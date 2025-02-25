"use client";

// ...existing imports...
import { userApi } from "@/utils/userApi";
import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { useState, useEffect } from "react";
import { InDataTable } from "@/components/data-table/InDataTable";
import { userColumns } from "./userColumns";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { UserModal } from "./UserModal";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { FormSkeleton } from "@/components/ui/skeleton-form";

export default function UserPage() {
    const params = useParams();

    // const typeId = params.id as string;
    // console.log("typeId", typeId);
    

  const [data, setData] = useState<any[]>([]);
  const [roles, setRoles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [users, roles] = await Promise.all([
          userApi.getUsers(),
          userApi.getRoles()
        ]);
        setData(users);
        setRoles(roles);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addItem = async (newData: {
    name: string;
    email: string;
    password?: string;
    type: string;
    roleId: string;
  }) => {
    try {
      const result = await userApi.createUser(newData);
      setData((prevData) => [...prevData, result]);
      toast({
        title: "Success",
        description: "User added successfully!"
      });
    } catch (err) {
      console.error("Error adding user:", err);
      throw err;
    }
  };

  const editItem = async (updatedData: {
    _id?: string;
    name: string;
    email: string;
    type: string;
    roleId: string
  }) => {
    if (!updatedData._id) throw new Error("User ID is required");
    try {
      const result = await userApi.updateUser(updatedData._id, updatedData);
      setData((prevData) =>
        prevData.map((user) =>
          user._id === updatedData._id ? { ...user, ...result } : user
        )
      );
      toast({
        title: "Success",
        description: "User updated successfully!"
      });
    } catch (err) {
      console.error("Error updating user:", err);
      throw err;
    }
  };

  const deleteItem = async (id: string) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this user?"
      );
      if (!confirmDelete) return;

      await userApi.deleteUser(id);
      setData((prevData) => prevData.filter((user) => user._id !== id));
      toast({
        title: "Success",
        description: "User deleted successfully!"
      });
    } catch (err) {
      console.error("Error deleting user:", err);
      toast({
        title: "Error",
        description: "Failed to delete user. Please try again.",
        variant: "destructive"
      });
    }
  };
  if (loading) {
    return <FormSkeleton />;
  }
  // if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ContentLayout title="Users">
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
              <BreadcrumbPage>Users</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <UserModal mode="add" roles={roles} onSave={addItem}>
          <Button className="btn-fill primary">Add New</Button>
        </UserModal>
      </div>

      <section className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-2xl mb-3">User List</h1>
          <p className="text-xs text-muted-foreground">All User go here</p>
        </div>
      </section>

      <InDataTable
        columns={userColumns(deleteItem, editItem, roles)}
        data={data}
      />
    </ContentLayout>
  );
}
