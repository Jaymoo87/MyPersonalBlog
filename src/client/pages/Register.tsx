import e from "express";
import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiService, TOKEN_KEY } from "../services/api-service";

/* HOOK REACT EXAMPLE */
const Register = (props: RegisterProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authorname, setAuthorname] = useState<string>("");
  const nav = useNavigate();

  const handleRegistration = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    apiService("/auth/register", "POST", { authorname, email, password })
      .then((data) => {
        localStorage.setItem(TOKEN_KEY, data.token);
        nav("/login");
      })
      .catch(() => console.log("oops!"));
  };

  return (
    <main className="container">
      <section className="mt-4 row justify-content-center">
        <div className=" col-12 col-md-4">
          <form action="" className="form-group border rounded shadow p-4">
            <h1 className="text-center">Log In</h1>
            <label htmlFor="email">Author Name:</label>
            <input
              type="text"
              className="form-control mb-2"
              value={authorname}
              onChange={(e) => setAuthorname(e.target.value)}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              autoComplete="current-password"
              type="password"
              className="form-control mb-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegistration} className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

interface RegisterProps {}

export default Register;
