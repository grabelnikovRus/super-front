import { type UserType } from "../../../user/model/types/userSchema"

export interface CommentTypes {
  id: number
  user: UserType
  text: string
}
