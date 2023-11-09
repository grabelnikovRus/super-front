import { type FC } from "react";
import { classNames } from "../../helpers/lib";

import s from "./Text.module.scss";

type theme = "default" | "error";

type align = "center" | "left" | "rigth";

type SizeType = "s" | "m" | "l" | "xl";

type HeaderTagType = "h1" | "h2" | "h3" | "h4";

interface TextProps {
  title?: string | null;
  text?: string | number | null;
  theme?: theme;
  align?: align;
  size?: SizeType
  className?: {
    title?: string;
    text?: string;
  };
}

const mapSizeToHeaderTag: Record<SizeType, HeaderTagType> = {
  s: "h4",
  m: "h3",
  l: "h2",
  xl: "h1"
}

export const Text: FC<TextProps> = ({
  title,
  text,
  size = "l",
  theme = "default",
  align = "left",
  className,
}) => {
  if (!text && !title) return null;

  const Component = mapSizeToHeaderTag[size]

  return (
    <div
      className={classNames(s.root, s[align], {
        [s.root__error]: theme === "error",
      })}
    >
      {title && (
        <Component className={classNames(
          s.root_title, 
          s[`root_${size}`],  
          className?.title)
        }>
          {title}
        </Component>
      )}
      {text && <p className={classNames(s.root_text, className?.text)}>{text}</p>}
    </div>
  );
};
