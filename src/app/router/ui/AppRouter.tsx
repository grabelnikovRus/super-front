import { type FC, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "../config/config";
import { PageLoader } from "@widgets/pageLoader";
import { getIsInit, userActions } from "@entities/user";
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { Loader } from "@shared/ui";

export const AppRouter: FC = () => {
  const dispatch = useAppDispatch();
  const isInit = useSelector(getIsInit);

  useEffect(() => {
    dispatch(userActions.initApp());
  }, []);

  if (!isInit) return <Loader />;

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.entries(routerConfig).map(([path, { element }]) => (
          <Route
            path={path}
            key={path}
            element={<div className="content">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
