export interface UserType {
  id: string;
  username: string;
  role: Array<"ADMIN" | "USER">
  avatar?: string;
}

export interface UserSchema {
  authData?: UserType | null;
  _isInit: boolean;
}
