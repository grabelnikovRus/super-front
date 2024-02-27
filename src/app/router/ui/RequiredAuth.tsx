import { getAuthData, isAdmin, isManager } from "@entities/user";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useMemo, type ReactNode } from "react";
import { RouterPath } from "@shared/constants/routerPath";

interface RequiredAuthProps {
  children: ReactNode
  nameComp?: string
}

export const RequiredAuth= ({ children, nameComp }: RequiredAuthProps) => {
  const auth = useSelector(getAuthData);
  const location = useLocation();
  const isAdmn = useSelector(isAdmin);
  const isMng = useSelector(isManager);

  const isVisibleAdminPanel = useMemo(
    () => (isAdmn || isMng), [isAdmn, isMng]
  )

  if (!auth) {
    return <Navigate to={RouterPath.MAIN} state={{ from: location }} />;
  }

  if (!isVisibleAdminPanel && nameComp === "AdminPanelPage") {
    console.log(33, {isAdmn, isMng, nameComp})
    return <Navigate to={RouterPath.FORBIDDEN} state={{ from: location }} />;
  }

  return <>{children}</>;
};
