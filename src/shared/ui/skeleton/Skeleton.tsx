import { type FC } from "react";
import { classNames } from "@shared/helpers/lib"
import s from "./Skeleton.module.scss";

interface SkeletonProps {
  width?: string
  height?: string
  borderRadius?: string
  className?: string
}

export const Skeleton: FC<SkeletonProps> = ({
  width,
  height,
  borderRadius,
  className
}) => {
  console.log(classNames(s.skeleton, className))
  return (
      <div
        className={classNames(s.skeleton, className)}
        style={{
          width, height, borderRadius
        }}
      />
  );
}