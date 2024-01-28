export enum RoleTypes {
  ADMIN = "ADMIN",
  USER = "USER",
  MANAGER = "MANAGER"
}

export interface UserType {
  id: string;
  username: string;
  role: RoleTypes[];
  avatar?: string;
}

export interface UserSchema {
  authData?: UserType | null;
  _isInit: boolean;
}
