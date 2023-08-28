import { type UserType } from "../../../user";

type ArticleBaseBlockType = "IMAGE" | "TEXT" | "CODE";

interface ArticleBaseBlock {
  id: number;
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

type ArticleThemeType = "IT" | "SCIENCE" | "ECONOMY";

export type ArticleViewType = "big" | "small"

export type ArticleBlocksTypes =
  | ArticleTextBlockType
  | ArticleCodeBlockType
  | ArticleImageBlockType;

export interface ArticleType {
  id: number;
  title: string;
  subtitle: string;
  user: UserType,
  img: string;
  views: number;
  createdAt: string;
  type: ArticleThemeType[];
  blocks: ArticleBlocksTypes[];
}
