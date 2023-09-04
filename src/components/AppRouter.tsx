import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RouteNames, privatRoutes, publicRoutes } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const AppRouter: React.FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return isAuth ? (
    <Routes>
      {privatRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.Event} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.Login} replace />} />
    </Routes>
  );
};
