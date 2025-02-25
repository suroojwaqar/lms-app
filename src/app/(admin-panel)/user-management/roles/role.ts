import { Permission } from "./permission";
  export interface Role {
    _id: string
    name: string
    permissions: Permission[]
  }
  
  