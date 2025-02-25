export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  permissions: string[];
}

export async function getUsers(): Promise<User[]> {
  // Replace this with actual API call
  return [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      permissions: ["read", "write", "delete"],
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Editor",
      permissions: ["read", "write"],
    },
    // Add more mock data
  ];
}

export async function deleteUser(id: string): Promise<void> {
  // Implement delete API call
  console.log(`Deleting user ${id}`);
}

export async function updateUser(user: User): Promise<User> {
  // Implement update API call
  console.log(`Updating user`, user);
  return user;
}

export async function createUser(user: Omit<User, "id">): Promise<User> {
  // Implement create API call
  console.log(`Creating user`, user);
  return { ...user, id: Math.random().toString() };
}
