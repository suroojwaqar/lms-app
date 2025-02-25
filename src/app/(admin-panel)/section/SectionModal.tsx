"use client";

import { useState } from "react";
import { Section, SectionFormData } from "@/types/section";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface SectionModalProps {
  mode: "add" | "edit";
  section?: Section;
  parentSections: Section[];
  onSave: (data: SectionFormData) => Promise<void>;
  children?: React.ReactNode;
}

export function SectionModal({ mode, section, parentSections, onSave, children }: SectionModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<SectionFormData>({
    name: section?.name || "",
    parentId: section?.parentId || null,
    path: section?.path || "",
    icon: section?.icon || "",
  });
  const [error, setError] = useState<string | null>(null);

  const validateForm = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.path.trim()) return "Path is required";
    return null;
  };

  const handleSubmit = async () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      await onSave({
        ...formData,
        ...(mode === "edit" && section?._id ? { _id: section._id } : {})
      });
      setIsOpen(false);
      if (mode === "add") {
        setFormData({
          name: "",
          parentId: null,
          path: "",
          icon: "",
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="default">
            {mode === "add" ? "Add New" : "Edit"}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mode === "add" ? "Add New Section" : "Edit Section"}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter name"
            />
          </div>
          <div>
            <Label htmlFor="path">Path</Label>
            <Input
              id="path"
              value={formData.path}
              onChange={(e) => setFormData({ ...formData, path: e.target.value })}
              placeholder="Enter path"
            />
          </div>
          <div>
            <Label htmlFor="icon">Icon</Label>
            <Input
              id="icon"
              value={formData.icon}
              onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
              placeholder="Enter icon (e.g., 'fa-home')"
            />
          </div>
          <div>
            <Label htmlFor="parentId">Parent Section</Label>
            <Select
              value={formData.parentId || "none"}
              onValueChange={(value) =>
                setFormData({ ...formData, parentId: value === "none" ? null : value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a parent section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                {parentSections.map((section) => (
                  <SelectItem key={section._id} value={section._id}>
                    {section.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Button onClick={handleSubmit} className="btn-fill primary float-right">
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
