export function getAuthToken(): string {
  const userStore = localStorage.getItem("user");
  console.log("userStore",userStore);
  
  if (!userStore) throw new Error("No user data found. Please log in.");

  const user = JSON.parse(userStore);
  const token = user.access_token;
  if (!token) throw new Error("No token found. Please log in.");

  return token;
}

export const getUserLogin = () => {
  if (typeof window === 'undefined') return null;
  const user = localStorage.getItem("user");
  return user;
};
