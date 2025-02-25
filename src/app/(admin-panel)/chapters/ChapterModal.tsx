"use client";

import { useState } from "react";
import { Chapter } from "@/types/chapter";
import { ChapterFormData, chapterFormSchema } from "@/lib/validations/chapter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Subject } from "@/types/subject";
import { PlusCircle, X } from "lucide-react";

interface ChapterModalProps {
  mode: "add" | "edit";
  chapter?: Chapter;
  subjects: Subject[];
  onSave: (data: ChapterFormData) => Promise<void>;
  children?: React.ReactNode;
}

export function ChapterModal({ mode, chapter, subjects, onSave, children }: ChapterModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [objectives, setObjectives] = useState<string[]>(chapter?.metadata.objectives || []);
  
  const form = useForm<ChapterFormData>({
    resolver: zodResolver(chapterFormSchema),
    defaultValues: {
      name: chapter?.name || "",
      displayName: chapter?.displayName || "",
      description: chapter?.description || "",
      subjectId: chapter?.subjectId || "",
      order: chapter?.order || 1,
      metadata: chapter?.metadata || {
        estimatedHours: 1,
        difficulty: "beginner",
        objectives: []
      }
    }
  });

  const addObjective = (objective: string) => {
    if (objective.trim()) {
      setObjectives([...objectives, objective.trim()]);
      form.setValue("metadata.objectives", [...objectives, objective.trim()]);
    }
  };

  const removeObjective = (index: number) => {
    const newObjectives = objectives.filter((_, i) => i !== index);
    setObjectives(newObjectives);
    form.setValue("metadata.objectives", newObjectives);
  };

  const onSubmit = async (data: ChapterFormData) => {
    try {
      await onSave(data);
      setIsOpen(false);
      if (mode === "add") {
        form.reset();
        setObjectives([]);
      }
    } catch (err) {
      form.setError("root", {
        message: err instanceof Error ? err.message : "An error occurred"
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>{mode === "add" ? "Add New Chapter" : "Edit Chapter"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Name</Label>
              <Input {...form.register("name")} />
            </div>

            <div>
              <Label>Display Name</Label>
              <Input {...form.register("displayName")} />
            </div>

            <div className="col-span-2">
              <Label>Subject</Label>
              <Select
                onValueChange={(value) => form.setValue("subjectId", value)}
                defaultValue={form.getValues("subjectId")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject._id} value={subject._id}>
                      {subject.displayName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2">
              <Label>Description</Label>
              <Textarea {...form.register("description")} />
            </div>

            <div>
              <Label>Order</Label>
              <Input 
                type="number" 
                {...form.register("order", { valueAsNumber: true })} 
              />
            </div>

            <div>
              <Label>Difficulty</Label>
              <Select
                onValueChange={(value: "beginner" | "intermediate" | "advanced") => 
                  form.setValue("metadata.difficulty", value)
                }
                defaultValue={form.getValues("metadata.difficulty")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2">
              <Label>Estimated Hours</Label>
              <Input 
                type="number" 
                {...form.register("metadata.estimatedHours", { valueAsNumber: true })} 
              />
            </div>

            <div className="col-span-2">
              <Label>Learning Objectives</Label>
              <div className="flex gap-2 mb-2">
                <Input
                  placeholder="Add an objective"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      addObjective((e.target as HTMLInputElement).value);
                      (e.target as HTMLInputElement).value = '';
                    }
                  }}
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    const input = document.querySelector('input[placeholder="Add an objective"]') as HTMLInputElement;
                    addObjective(input.value);
                    input.value = '';
                  }}
                >
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-center gap-2 bg-secondary p-2 rounded">
                    <span>{objective}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeObjective(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {form.formState.errors.root && (
            <p className="text-red-500">{form.formState.errors.root.message}</p>
          )}
          
          <Button type="submit" className="btn-fill primary float-right">
            Save
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
