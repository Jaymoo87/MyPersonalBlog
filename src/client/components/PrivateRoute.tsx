import * as React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import { TOKEN_KEY } from "../services/api-service";

/* HOOK REACT EXAMPLE */
const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const TOKEN = localStorage.getItem(TOKEN_KEY);
  const nav = useNavigate();

  if (!TOKEN) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        {children}
        {<Outlet />}
      </div>
    );
  }
};

interface PrivateRouteProps {
  path: string;
  exact?: boolean;
  children: React.ReactNode;
}

export default PrivateRoute;
