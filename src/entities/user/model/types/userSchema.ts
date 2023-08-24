export interface UserType {
  id: number;
  username: string;
  avatar?: string;
}

export interface UserSchema {
  authData?: UserType | null;
  _isInit: boolean;
}
