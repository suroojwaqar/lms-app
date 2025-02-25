"use client";

import { useState, useEffect } from "react";
import { Lecture } from "@/types/lecture";
import { Chapter } from "@/types/chapter";
import { LectureFormData, lectureFormSchema } from "@/lib/validations/lecture";
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
import { PlusCircle, X } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface LectureModalProps {
  mode: "add" | "edit";
  lecture?: Lecture;
  chapters: Chapter[];
  onSave: (data: LectureFormData) => Promise<void>;
  children?: React.ReactNode;
}

export function LectureModal({ mode, lecture, chapters, onSave, children }: LectureModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [tags, setTags] = useState<string[]>(lecture?.tags || []);
  const [resourceUrls, setResourceUrls] = useState<string[]>(lecture?.metadata?.resourceUrls || []);
  const [attachments, setAttachments] = useState<string[]>(lecture?.metadata?.attachments || []);
  const [prerequisitesOpen, setPrerequisitesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const form = useForm<LectureFormData>({
    resolver: zodResolver(lectureFormSchema),
    defaultValues: {
      title: lecture?.title || "",
      description: lecture?.description || "",
      chapterId: lecture?.chapterId || "",
      order: lecture?.order || 1,
      estimatedDuration: lecture?.estimatedDuration || 30,
      prerequisites: lecture?.prerequisites || [],
      content: {
        type: "video",
        data: {
          videoUrl: lecture?.content?.data?.videoUrl || "",
          duration: lecture?.content?.data?.duration || 0
        }
      },
      isPublished: lecture?.isPublished || false,
      metadata: {
        resourceUrls: lecture?.metadata?.resourceUrls || [],
        attachments: lecture?.metadata?.attachments || [],
        difficulty: lecture?.metadata?.difficulty || "beginner"
      }
    }
  });

  // Fix for chapter select issue
  const [selectedChapter, setSelectedChapter] = useState(lecture?.chapterId || "");

  useEffect(() => {
    if (isOpen && mode === "edit" && lecture) {
      setSelectedChapter(lecture.chapterId);
      setTags(lecture.tags || []);
      setResourceUrls(lecture.metadata?.resourceUrls || []);
      setAttachments(lecture.metadata?.attachments || []);
      form.reset({
        ...lecture,
        prerequisites: lecture.prerequisites || []
      });
    }
  }, [isOpen, mode, lecture, form]);

  // Watch prerequisites changes
  const prerequisites = form.watch("prerequisites", []);

  const filteredChapters = chapters.filter((chapter) =>
    chapter.displayName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePrerequisiteToggle = (chapterId: string) => {
    const currentPrerequisites = form.getValues("prerequisites") || [];
    const isSelected = currentPrerequisites.includes(chapterId);
    
    const newPrerequisites = isSelected
      ? currentPrerequisites.filter(id => id !== chapterId)
      : [...currentPrerequisites, chapterId];
    
    form.setValue("prerequisites", newPrerequisites);
  };

  // Replace the Prerequisites section JSX with this:
  const renderPrerequisites = () => (
    <div className="col-span-2">
      <Label>Prerequisites</Label>
      <Popover open={prerequisitesOpen} onOpenChange={setPrerequisitesOpen}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            role="combobox"
            aria-expanded={prerequisitesOpen}
            className="w-full justify-between"
          >
            {prerequisites.length > 0
              ? `${prerequisites.length} selected`
              : "Select prerequisites..."}
            <PlusCircle className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] p-0" align="start">
          <Command>
            <CommandInput 
              placeholder="Search chapters..." 
              value={searchQuery}
              onValueChange={setSearchQuery}
            />
            <CommandEmpty>No chapter found.</CommandEmpty>
            <CommandGroup className="max-h-[200px] overflow-auto">
              {filteredChapters.map((chapter) => (
                <CommandItem
                  key={chapter._id}
                  onSelect={() => handlePrerequisiteToggle(chapter._id)}
                >
                  <div className="flex items-center gap-2 w-full">
                    <Check
                      className={cn(
                        "h-4 w-4",
                        prerequisites.includes(chapter._id) ? "opacity-100" : "opacity-0"
                      )}
                    />
                    <span>{chapter.displayName}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Selected Prerequisites Display */}
      <div className="mt-2 flex flex-wrap gap-2">
        {prerequisites.map((prerequisiteId) => {
          const chapter = chapters.find((c) => c._id === prerequisiteId);
          return chapter ? (
            <div
              key={prerequisiteId}
              className="flex items-center gap-2 bg-secondary px-3 py-1 rounded-full text-sm"
            >
              <span>{chapter.displayName}</span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="h-auto p-0 hover:bg-transparent"
                onClick={() => handlePrerequisiteToggle(prerequisiteId)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );

  const onSubmit = async (formData: LectureFormData) => {
    try {
      const completeData = {
        ...formData,
        chapterId: selectedChapter,
        tags,
        metadata: {
          ...formData.metadata,
          resourceUrls,
          attachments,
          difficulty: formData.metadata.difficulty
        }
      };

      await onSave(completeData);
      setIsOpen(false);
      
      if (mode === "add") {
        form.reset();
        setTags([]);
        setResourceUrls([]);
        setAttachments([]);
        setSelectedChapter("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>{mode === "add" ? "Add New Lecture" : "Edit Lecture"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Label>Title</Label>
              <Input {...form.register("title")} />
            </div>

            <div className="col-span-2">
              <Label>Description</Label>
              <Textarea {...form.register("description")} />
            </div>

            <div className="col-span-2">
              <Label>Chapter</Label>
              <Select
                value={selectedChapter}
                onValueChange={(value) => {
                  setSelectedChapter(value);
                  form.setValue("chapterId", value);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a chapter" />
                </SelectTrigger>
                <SelectContent>
                  {chapters.map((chapter) => (
                    <SelectItem key={chapter._id} value={chapter._id}>
                      {chapter.displayName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Order</Label>
              <Input type="number" {...form.register("order", { valueAsNumber: true })} />
            </div>

            <div>
              <Label>Estimated Duration (minutes)</Label>
              <Input type="number" {...form.register("estimatedDuration", { valueAsNumber: true })} />
            </div>

            <div className="col-span-2">
              <Label>Video URL</Label>
              <Input {...form.register("content.data.videoUrl")} type="url" />
            </div>

            <div>
              <Label>Video Duration (seconds)</Label>
              <Input {...form.register("content.data.duration", { valueAsNumber: true })} type="number" />
            </div>

            <div>
              <Label>Published</Label>
              <Select
                onValueChange={(value) => form.setValue("isPublished", value === "true")}
                defaultValue={String(form.getValues("isPublished"))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Published</SelectItem>
                  <SelectItem value="false">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2">
              <Label>Tags</Label>
              <div className="flex gap-2 mb-2">
                <Input
                  placeholder="Add a tag"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      const value = (e.target as HTMLInputElement).value;
                      if (value.trim()) {
                        setTags([...tags, value.trim()]);
                        (e.target as HTMLInputElement).value = '';
                      }
                    }
                  }}
                />
                <Button type="button" variant="outline" onClick={() => {
                  const input = document.querySelector('input[placeholder="Add a tag"]') as HTMLInputElement;
                  if (input.value.trim()) {
                    setTags([...tags, input.value.trim()]);
                    input.value = '';
                  }
                }}>
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <div key={index} className="flex items-center gap-2 bg-secondary p-2 rounded">
                    <span>{tag}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setTags(tags.filter((_, i) => i !== index))}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {renderPrerequisites()}

            <div className="col-span-2">
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
              <Label>Resource URLs</Label>
              <div className="flex gap-2 mb-2">
                <Input
                  type="url"
                  placeholder="Add a resource URL"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      const value = (e.target as HTMLInputElement).value;
                      if (value.trim()) {
                        setResourceUrls([...resourceUrls, value.trim()]);
                        (e.target as HTMLInputElement).value = '';
                      }
                    }
                  }}
                />
                <Button type="button" variant="outline" onClick={() => {
                  const input = document.querySelector('input[placeholder="Add a resource URL"]') as HTMLInputElement;
                  if (input.value.trim()) {
                    setResourceUrls([...resourceUrls, input.value.trim()]);
                    input.value = '';
                  }
                }}>
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                {resourceUrls.map((url, index) => (
                  <div key={index} className="flex items-center gap-2 bg-secondary p-2 rounded">
                    <span className="truncate">{url}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setResourceUrls(resourceUrls.filter((_, i) => i !== index))}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-2">
              <Label>Attachments</Label>
              <div className="flex gap-2 mb-2">
                <Input
                  placeholder="Add attachment name"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      const value = (e.target as HTMLInputElement).value;
                      if (value.trim()) {
                        setAttachments([...attachments, value.trim()]);
                        (e.target as HTMLInputElement).value = '';
                      }
                    }
                  }}
                />
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => {
                    const input = document.querySelector('input[placeholder="Add attachment name"]') as HTMLInputElement;
                    if (input.value.trim()) {
                      setAttachments([...attachments, input.value.trim()]);
                      input.value = '';
                    }
                  }}
                >
                  <PlusCircle className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                {attachments.map((attachment, index) => (
                  <div key={index} className="flex items-center gap-2 bg-secondary p-2 rounded">
                    <span>{attachment}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setAttachments(attachments.filter((_, i) => i !== index))}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Button type="submit" className="float-right">Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
