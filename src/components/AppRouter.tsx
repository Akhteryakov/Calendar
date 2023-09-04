import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { RouteNames, privatRoutes, publicRoutes } from "../router";

export const AppRouter: React.FC = () => {
  const auth: boolean = false;
  return auth ? (
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
