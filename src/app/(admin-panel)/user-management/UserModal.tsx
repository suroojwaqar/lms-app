import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface UserModalProps {
  mode: "add" | "edit";
  user?: {
    _id: string;
    name: string;
    email: string;
    type: string;
    roleId: string;  // This remains as string
  };
  roles: { _id: string; name: string }[];
  onSave: (data: {
    _id?: string;
    name: string;
    email: string;
    type: string;
    roleId: string;  // This remains as string
    password?: string;
  }) => Promise<void>;
  children?: React.ReactNode;
}

export function UserModal({
  mode,
  user,
  roles,
  onSave,
  children
}: UserModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [type, setType] = useState(user?.type || "");
  const [roleId, setRoleId] = useState(user?.roleId || "");  // Change
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null); // Track error message

  const { toast } = useToast();

  const validateForm = () => {
    if (!name.trim()) return "Name is required";
    if (!email.trim()) return "Email is required";
    if (!type) return "Type is required";
    if (!roleId) return "Role is required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    
    if (mode === "add") {
      if (!password.trim()) return "Password is required";
      if (password.length < 6) return "Password must be at least 6 characters long";
    }
    
    return null;
  };

  const handleSave = async () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setError(null);
      await onSave({
        _id: user?._id,
        name: name.trim(),
        email: email.trim(),
        type,
        roleId,
        ...(mode === "add" ? { password } : {})
      });

      setIsOpen(false);
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  const resetForm = () => {
    if (mode === "add") {
      setName("");
      setEmail("");
      setType("");
      setRoleId("");
      setPassword("");
    }
  };

  const FormContent = () => (
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
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>
      <div>
        <Label htmlFor="type">Type</Label>
        <Select value={type} onValueChange={(value) => setType(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="teacher">Teacher</SelectItem>
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="parent">Parent</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="roleId">Role</Label>
        <Select
          value={roleId}
          onValueChange={(value) => setRoleId(value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select roles" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role) => (
              <SelectItem key={role._id} value={role._id}>
                {role.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {mode === "add" && (
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
      )}

      {/* Display error message in red if there's any */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button onClick={handleSave} className="btn-fill primary float-right">
        Save
      </Button>
    </div>
  );

  if (isDesktop) {
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
              {mode === "add" ? "Add New User" : "Edit User"}
            </DialogTitle>
          </DialogHeader>
          <FormContent />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {children || (
          <Button variant="default">
            {mode === "add" ? "Add New" : "Edit"}
          </Button>
        )}
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[90%]">
        <SheetHeader>
          <SheetTitle>
            {mode === "add" ? "Add New User" : "Edit User"}
          </SheetTitle>
        </SheetHeader>
        <FormContent />
      </SheetContent>
    </Sheet>
  );
}
