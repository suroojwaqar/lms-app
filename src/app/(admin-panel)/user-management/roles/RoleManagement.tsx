"use client"

import { useState, useEffect } from "react"
import { fetchRoles, fetchSections, updateRolePermissions, createRole, deleteRole, saveRole } from "./api"
import type { Role } from "./role"
import type { Section } from "./section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Plus, Trash2, Copy, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import PermissionTable from "./PermissionTable"

export default function RoleManagement() {
  const [roles, setRoles] = useState<Role[]>([])
  const [sections, setSections] = useState<Section[]>([])
  const [selectedRole, setSelectedRole] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [newRoleName, setNewRoleName] = useState("")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingRole, setEditingRole] = useState<Role | null>(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      setLoading(true)
      const [rolesData, sectionsData] = await Promise.all([fetchRoles(), fetchSections()])
      setRoles(rolesData)
      setSections(sectionsData)
      if (rolesData.length > 0) {
        setSelectedRole(rolesData[0]._id)
      }
    } catch (err) {
      setError("Failed to fetch data. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handlePermissionChange = async (changes: { sectionId: string; permission: string; value: boolean }[]) => {
    const updatedRoles = roles.map((role) => {
      if (role._id === selectedRole) {
        const updatedPermissions = [...role.permissions]
        changes.forEach(({ sectionId, permission, value }) => {
          const existingPermission = updatedPermissions.find((p) => p.sectionId === sectionId)
          if (existingPermission) {
            existingPermission[permission as keyof typeof existingPermission] = value
          } else {
            updatedPermissions.push({
              sectionId,
              create: permission === "create" ? value : false,
              read: permission === "read" ? value : false,
              update: permission === "update" ? value : false,
              delete: permission === "delete" ? value : false,
            })
          }
        })
        return { ...role, permissions: updatedPermissions }
      }
      return role
    })
    setRoles(updatedRoles)
    try {
      await updateRolePermissions(selectedRole, updatedRoles.find((r) => r._id === selectedRole)?.permissions || [])
    } catch (err) {
      setError("Failed to update permissions. Please try again.")
    }
  }

  const handleCreateRole = async () => {
    try {
      const newRole = await createRole(newRoleName)
      setRoles([...roles, newRole])
      setSelectedRole(newRole._id)
      setNewRoleName("")
      setIsCreateDialogOpen(false)
    } catch (err) {
      setError("Failed to create role. Please try again.")
    }
  }

  const handleDeleteRole = async (roleId: string) => {
    try {
      await deleteRole(roleId)
      const updatedRoles = roles.filter((role) => role._id !== roleId)
      setRoles(updatedRoles)
      if (selectedRole === roleId) {
        setSelectedRole(updatedRoles[0]?._id || "")
      }
    } catch (err) {
      setError("Failed to delete role. Please try again.")
    }
  }

  const handleCloneRole = async (roleId: string) => {
    const roleToClone = roles.find((r) => r._id === roleId)
    if (!roleToClone) return

    try {
      const clonedRole = {
        ...roleToClone,
        _id: undefined,
        name: `${roleToClone.name} - Copy`,
      }
      const newRole = await saveRole(clonedRole)
      setRoles([...roles, newRole])
      setSelectedRole(newRole._id)
    } catch (err) {
      setError("Failed to clone role. Please try again.")
    }
  }

  const handleEditRole = async () => {
    if (!editingRole) return

    try {
      const updatedRole = await saveRole(editingRole)
      setRoles(roles.map((role) => (role._id === updatedRole._id ? updatedRole : role)))
      setIsEditDialogOpen(false)
      setEditingRole(null)
    } catch (err) {
      setError("Failed to update role. Please try again.")
    }
  }

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading...</div>
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Role-Based Access Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Roles</CardTitle>
            <CardDescription>Manage and select roles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full">
                    <Plus className="mr-2 h-4 w-4" /> Create New Role
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Role</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Input
                      id="name"
                      placeholder="Role name"
                      value={newRoleName}
                      onChange={(e) => setNewRoleName(e.target.value)}
                    />
                    <Button onClick={handleCreateRole}>Create</Button>
                  </div>
                </DialogContent>
              </Dialog>
              <ScrollArea className="h-[300px]">
                {roles.map((role) => (
                  <div key={role._id} className="flex items-center mb-2">
                    <Button
                      variant={selectedRole === role._id ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedRole(role._id)}
                    >
                      {role.name}
                    </Button>
                    <div className="flex gap-2 ml-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setEditingRole(role)
                          setIsEditDialogOpen(true)
                        }}
                        title="Edit role"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleCloneRole(role._id)} title="Clone role">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteRole(role._id)}
                        title="Delete role"
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </div>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Permissions</CardTitle>
            <CardDescription>Manage permissions for the selected role</CardDescription>
          </CardHeader>
          <CardContent>
            {selectedRole && (
              <PermissionTable
                sections={sections}
                permissions={roles.find((r) => r._id === selectedRole)?.permissions || []}
                onPermissionChange={handlePermissionChange}
              />
            )}
          </CardContent>
        </Card>
      </div>
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Role</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input
              id="edit-name"
              placeholder="Role name"
              value={editingRole?.name || ""}
              onChange={(e) => setEditingRole((prev) => (prev ? { ...prev, name: e.target.value } : null))}
            />
            <Button onClick={handleEditRole}>Save Changes</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

