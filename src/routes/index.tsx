import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home,Main } from "../Pages/index";


const AuthRoutes: React.FC = () => {

  const ProtectedRoute = ({ children }: any) => {
    return children;
  };

  const routes = [
    {
      id: 1,
      path: "/",
      component: <Home />,
    },
    {
      id: 2,
      path: "/main",
      component: <Main />,
    },
    
  ];

  return (
    <Routes>
      {routes.map((route: any) => {
        return (
          <Route path={route.path} element={route.component} key={route.id} />
        );
      })}
    </Routes>
  );
};

export default AuthRoutes;
