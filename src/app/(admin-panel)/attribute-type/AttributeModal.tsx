"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { AttributeType } from "@/types/attribute-type";

interface AttributeModalProps {
  mode: "add" | "edit";
  attribute?: AttributeType;
  onSave: (data: { _id?: string; name: string }) => void;
  children?: React.ReactNode; // Trigger button
}

export function AttributeModal({
  mode,
  attribute,
  onSave,
  children,
}: AttributeModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(attribute?.name || "");
  const { toast } = useToast();

  const handleSave = async () => {
    if (!name) {
      toast({
        title: "Error",
        description: "Please fill in the name field.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Call the `onSave` function with the data
      await onSave({ _id: attribute?._id, name });

      // Close the modal
      setIsOpen(false);

      // Clear the form field (only in "add" mode)
      if (mode === "add") {
        setName("");
      }

      // Show a success Toast
      toast({
        title: "Success",
        description:
          mode === "add" ? "Attribute added successfully!" : "Attribute updated successfully!",
      });
    } catch (err) {
      console.error("Error saving attribute:", err);
      toast({
        title: "Error",
        description: `Failed to ${mode === "add" ? "add" : "update"} attribute. Please try again.`,
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || <Button variant="default">{mode === "add" ? "Add New" : "Edit"}</Button>}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{mode === "add" ? "Add New Attribute" : "Edit Attribute"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </div>
          <Button onClick={handleSave} className="btn-fill primary float-right">Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}