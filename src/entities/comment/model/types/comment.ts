import { type UserType } from "../../../user/model/types/userSchema";

export interface CommentTypes {
  id: string;
  user: UserType;
  text: string;
  articleId: string
  userId: string
}
