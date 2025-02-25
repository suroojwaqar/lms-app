import type { Section } from "../types/section"
import type { Role } from "../types/role"

const API_BASE_URL = "https://phpstack-732216-5157428.cloudwaysapps.com/api"

export async function fetchSections(): Promise<Section[]> {
  const response = await fetch(`${API_BASE_URL}/sections`)
  if (!response.ok) {
    throw new Error("Failed to fetch sections")
  }
  return response.json()
}

export async function fetchRoles(): Promise<Role[]> {
  const response = await fetch(`${API_BASE_URL}/roles`)
  if (!response.ok) {
    throw new Error("Failed to fetch roles")
  }
  return response.json()
}

export async function updateRolePermissions(roleId: string, permissions: any[]): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/roles/${roleId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ permissions }),
  })
  if (!response.ok) {
    throw new Error("Failed to update role permissions")
  }
}

export async function createRole(name: string): Promise<Role> {
  const response = await fetch(`${API_BASE_URL}/roles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  })
  if (!response.ok) {
    throw new Error("Failed to create role")
  }
  return response.json()
}

export async function deleteRole(roleId: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/roles/${roleId}`, {
    method: "DELETE",
  })
  if (!response.ok) {
    throw new Error("Failed to delete role")
  }
}

export async function saveRole(role: Partial<Role>): Promise<Role> {
  const method = role._id ? "PATCH" : "POST"
  const url = role._id ? `${API_BASE_URL}/roles/${role._id}` : `${API_BASE_URL}/roles`

  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(role),
  })

  if (!response.ok) {
    throw new Error("Failed to save role")
  }
  return response.json()
}

