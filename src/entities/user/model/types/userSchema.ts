export interface UserType {
  id: number;
  username: string;
  role: "ADMIN" | "USER"
  avatar?: string;
}

export interface UserSchema {
  authData?: UserType | null;
  _isInit: boolean;
}
