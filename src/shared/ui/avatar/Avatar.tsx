import { type ImgHTMLAttributes, type FC } from "react";

import s from "./Avatar.module.scss";
import { classNames } from "../../helpers/lib";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  theme?: "l" | "m" | "s";
}

export const Avatar: FC<AvatarProps> = ({ src, theme = "l", className, ...rest }) => {
  if (!src) return null;
  return <img className={classNames(s.avatar, s[theme], className)} src={src} {...rest} />;
};
