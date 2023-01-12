import e from "express";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiService, TOKEN_KEY } from "../services/api-service";
import { POST } from "../services/api-service";
import { SwalError, SwalSuccess } from "../services/swal-error-handler";

/* HOOK REACT EXAMPLE */
const Login = (props: LoginProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const nav = useNavigate();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    POST<{ token: string; message: string }>("/auth/login", { email, password })
      .then((data) => {
        const token = data?.token;
        SwalSuccess("Logged In");
        localStorage.setItem(TOKEN_KEY, token!);
        nav("/blogs");
      })
      .catch(SwalError);
  };

  return (
    <main className="container">
      <section className="mt-4 row justify-content-center">
        <div className=" col-12 col-md-4">
          <form action="" className="form-group p-4 rounded-lg bg-secondary rounded shadow-lg">
            <h1 className="text-center text-dark">Log In</h1>
            <label htmlFor="email" className="text-dark">
              Email:
            </label>
            <input
              type="email"
              className="form-control mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password" className="text-dark">
              Password:
            </label>
            <input
              autoComplete="current-password"
              type="password"
              className="form-control mb-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="d-flex justify-content-end ">
              <button onClick={handleLogin} className="btn btn-dark">
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

interface LoginProps {}

export default Login;
