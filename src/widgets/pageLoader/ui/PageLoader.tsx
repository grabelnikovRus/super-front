import { type FC } from "react";
import { Loader } from "@shared/ui";

import s from "./PageLoader.module.scss";
import { classNames } from "@shared/helpers/lib";

interface PageLoaderProps {
  appLoad?: boolean;
}

export const PageLoader: FC<PageLoaderProps> = ({ appLoad = false }) => (
  <div className={classNames(s.loader, { [s.wrapper]: appLoad })}>
    <Loader />
  </div>
);
