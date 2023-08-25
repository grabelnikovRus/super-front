import { type FC } from "react";

export interface SideBarItemsType {
  Icon: FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  path: string;
}
