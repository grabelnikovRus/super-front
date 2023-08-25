import { RouterPath } from "@app/router/config/config";
import HomeIcon from "@shared/assest/icon/home.svg";
import Profile from "@shared/assest/icon/profile.svg";
import About from "@shared/assest/icon/about_us.svg";
import Articles from "@shared/assest/icon/articles.svg";
import { type SideBarItemsType } from "../types";
import { createSelector } from "@reduxjs/toolkit";
import { getAuthData } from "@entities/user";

export const getSideBarItems = createSelector(getAuthData, (authData) => {
  const items: SideBarItemsType[] = [
    {
      path: RouterPath.MAIN,
      title: "main",
      Icon: HomeIcon,
    },
    {
      path: RouterPath.ABOUT,
      title: "about_us",
      Icon: About,
    },
  ];

  if (authData?.id)
    items.push(
      {
        path: RouterPath.PROFILE.replace(":id", String(authData.id)),
        title: "profile",
        Icon: Profile,
      },
      {
        path: RouterPath.ARTICLES,
        title: "articles",
        Icon: Articles,
      }
    );

  return items;
});
