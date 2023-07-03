export interface UserType {
  id: number
  username: string
  password: string
}

export interface UserSchema {
  authData?: UserType | null
}
