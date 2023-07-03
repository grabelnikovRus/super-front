import { RouterPath } from "@app/router/config/config"
import HomeIcon from "@shared/assest/icon/home.svg"
import Profile from "@shared/assest/icon/profile.svg"
import About from "@shared/assest/icon/about_us.svg"
import { type FC } from "react"

export interface SideBarItemsType {
  Icon: FC<React.SVGProps<SVGSVGElement>>
  title: string
  path: string
}

export const configSideBar: SideBarItemsType[] = [
  {
    path: RouterPath.MAIN,
    title: "main",
    Icon: HomeIcon
  },
  {
    path: RouterPath.PROFILE,
    title: "profile",
    Icon: Profile
  },
  {
    path: RouterPath.ABOUT,
    title: "about_us",
    Icon: About
  },
]
