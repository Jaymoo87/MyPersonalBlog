import e from "express";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiService, POST, TOKEN_KEY } from "../services/api-service";
import { SwalError } from "../services/swal-error-handler";

/* HOOK REACT EXAMPLE */
const Register = (props: RegisterProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authorname, setAuthorname] = useState<string>("");
  const nav = useNavigate();

  const handleRegistration = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    POST<{ token: string; message: string }>("/auth/register", { authorname, email, password })
      .then((data) => {
        const token = data?.token;
        localStorage.setItem(TOKEN_KEY, token!);
        nav("/login");
      })
      .catch(SwalError);
  };

  return (
    <main className="container">
      <section className="mt-4 row justify-content-center">
        <div className=" col-12 col-md-6">
          <form action="" className="form-group p-4 rounded-lg bg-secondary rounded shadow-lg">
            <h1 className="text-center text-dark">Register</h1>
            <label htmlFor="text" className="text-dark">
              Author Name:
            </label>
            <input
              type="text"
              className="form-control mb-2"
              value={authorname}
              onChange={(e) => setAuthorname(e.target.value)}
            />
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
            />{" "}
            <div className="d-flex justify-content-end">
              <button onClick={handleRegistration} className="btn btn-dark">
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

interface RegisterProps {}

export default Register;
