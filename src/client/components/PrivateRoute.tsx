import * as React from "react";
import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import { GET, TOKEN_KEY } from "../services/api-service";

/* HOOK REACT EXAMPLE */
const PrivateRoute = () => {
  const nav = useNavigate();
  const [isValid, setIsValid] = useState<boolean>(false);
  const [hasChecked, setHasChecked] = useState<boolean>(false);

  useEffect(() => {
    const TOKEN = localStorage.getItem(TOKEN_KEY);

    GET("/auth/token_status")
      .then(() => setIsValid(true))
      .catch(() => setIsValid(false))
      .finally(() => setHasChecked(true));
  }, []);

  if (!hasChecked) return <></>;

  if (!isValid) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
};

export default PrivateRoute;
