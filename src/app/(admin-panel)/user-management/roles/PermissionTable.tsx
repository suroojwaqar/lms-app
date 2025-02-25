import React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import type { Section } from "./section"
import type { Permission } from "./role"
import { ScrollArea } from "@/components/ui/scroll-area"
import * as Icons from "lucide-react"

interface PermissionTableProps {
  sections: Section[]
  permissions: Permission[]
  onPermissionChange: (changes: { sectionId: string; permission: string; value: boolean }[]) => void
}

export default function PermissionTable({ sections, permissions, onPermissionChange }: PermissionTableProps) {
  const getPermission = (sectionId: string, permission: string) => {
    const sectionPermission = permissions.find((p) => p.sectionId === sectionId)
    return sectionPermission ? sectionPermission[permission as keyof Permission] : false
  }

  const getIcon = (iconName: string | undefined) => {
    if (!iconName) return <Icons.FolderTree className="mr-2" size={16} />

    const Icon = Icons[iconName as keyof typeof Icons] || Icons.FolderTree
    return <Icon className="mr-2" size={16} />
  }

  const getChildSections = (sectionId: string): Section[] => {
    return sections.filter((s) => s.parentId === sectionId)
  }

  const getPermissionState = (section: Section, permission: string): { checked: boolean; indeterminate: boolean } => {
    const childSections = getChildSections(section._id)
    if (childSections.length === 0) {
      return { checked: getPermission(section._id, permission), indeterminate: false }
    }

    const childStates = childSections.map((child) => getPermissionState(child, permission))
    const allChecked = childStates.every((state) => state.checked)
    const someChecked = childStates.some((state) => state.checked || state.indeterminate)
    const noneChecked = !someChecked

    if (allChecked || someChecked) {
      return { checked: true, indeterminate: !allChecked }
    } else {
      return { checked: getPermission(section._id, permission), indeterminate: false }
    }
  }

  const handlePermissionChange = (section: Section, permission: string, checked: boolean) => {
    const changes: { sectionId: string; permission: string; value: boolean }[] = []

    const updatePermissions = (currentSection: Section) => {
      changes.push({ sectionId: currentSection._id, permission, value: checked })
      getChildSections(currentSection._id).forEach(updatePermissions)
    }

    updatePermissions(section)

    // Update parent sections
    const updateParents = (childSection: Section) => {
      const parentSection = sections.find((s) => s._id === childSection.parentId)
      if (parentSection) {
        changes.push({ sectionId: parentSection._id, permission, value: true })
        updateParents(parentSection)
      }
    }
    updateParents(section)

    onPermissionChange(changes)
  }

  const renderSectionRow = (section: Section, level = 0) => {
    const childSections = getChildSections(section._id)

    return (
      <React.Fragment key={section._id}>
        <TableRow className={level === 0 ? "bg-muted/50" : ""}>
          <TableCell className="font-medium" style={{ paddingLeft: `${level * 1.5 + 1}rem` }}>
            <div className="flex items-center">
              {getIcon(section.icon)}
              {section.name}
            </div>
          </TableCell>
          {["read", "create", "update", "delete"].map((permission) => {
            const { checked, indeterminate } = getPermissionState(section, permission)
            return (
              <TableCell key={`${section._id}-${permission}`} className="text-center">
                <Checkbox
                  checked={checked}
                  indeterminate={indeterminate}
                  onCheckedChange={(value) => handlePermissionChange(section, permission, value as boolean)}
                />
              </TableCell>
            )
          })}
        </TableRow>
        {childSections.map((childSection) => renderSectionRow(childSection, level + 1))}
      </React.Fragment>
    )
  }

  return (
    <ScrollArea className="h-[500px] w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Section</TableHead>
            <TableHead className="text-center">View</TableHead>
            <TableHead className="text-center">Create</TableHead>
            <TableHead className="text-center">Edit</TableHead>
            <TableHead className="text-center">Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sections.filter((section) => !section.parentId).map((section) => renderSectionRow(section))}
        </TableBody>
      </Table>
    </ScrollArea>
  )
}

