import { type UserType } from "../../../user";

type ArticleBaseBlockType = "IMAGE" | "TEXT" | "CODE";

export type ArticleViewType = "big" | "small"

interface ArticleBaseBlock {
  id: string;
  type: ArticleBaseBlockType;
}

export interface ArticleTextBlockType extends ArticleBaseBlock {
  type: "TEXT";
  title?: string;
  paragraphs: string[];
}

export interface ArticleCodeBlockType extends ArticleBaseBlock {
  type: "CODE";
  code: string;
}

export interface ArticleImageBlockType extends ArticleBaseBlock {
  type: "IMAGE";
  title: string;
  src: string;
}

export type ArticleThemeType = "IT" | "SCIENCE" | "ECONOMY";

export type ArticleBlocksTypes =
  | ArticleTextBlockType
  | ArticleCodeBlockType
  | ArticleImageBlockType;

export interface ArticleType {
  id: string;
  title: string;
  subtitle: string;
  user: UserType,
  userId?: string
  img: string;
  views: number;
  createdAt: string;
  type: ArticleThemeType[];
  blocks: ArticleBlocksTypes[];
}
