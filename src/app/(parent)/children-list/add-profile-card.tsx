import { PlusCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import AddStudentForm from "./addstudentform";

export default function AddStudentCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card 
        className="w-full max-w-xs overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
        onClick={() => setIsOpen(true)}
      >
        <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-6 pb-24">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
          <div className="relative flex justify-center items-center h-48">
            <PlusCircle className="w-24 h-24 text-white/90" />
          </div>
        </div>

        <CardContent className="relative -mt-20 bg-white dark:bg-gray-900 rounded-t-3xl px-6 pt-6 pb-4">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">Add New Student</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Click here to add a new student to the system
            </p>
            <Button className="w-full">Add Student</Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add New Student</DialogTitle>
          </DialogHeader>
          <AddStudentForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
