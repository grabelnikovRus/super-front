import { getAuthData } from "@entities/user";
import { type FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RouterPath } from "../config/config";

export const RequiredAuth: FC = ({ children }) => {
  const auth = useSelector(getAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RouterPath.MAIN} state={{ from: location }} />;
  }

  return <>{children}</>;
};
