import * as React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ContactMe = (props: AppProps) => {
  const [from, setFrom] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const MAX = 400;
  const nav = useNavigate();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ from, subject, message }),
    })
      .then((res) => {
        if (res.ok) {
          Swal.fire({
            customClass: "bg-success",
            backdrop: "#1B4079ab",
            title: "Quit Playin On My PHONE!",
            text: "Keep It Real, 100. ",
            confirmButtonText: "I Heard You",
          });
        } else {
          Swal.fire({
            backdrop: "#c92711",
            customClass: "swal-overlay",
            title: "Fuck!",
            icon: "error",
            text: "Didn't wanna hear that shit anyway. Now it's not coming",
            confirmButtonText: "not cool",
          });
          nav("/contact");
        }
        nav("/");

        res.json();
      })

      .then((result) => console.log("it worked"));
  };

  return (
    <main className="container my-5">
      <section className="row justify-content-center">
        <div className="col-md-6">
          <form action="" className="form-group bg-secondary p-3 border rounded shadow">
            <label className="text-dark ">Email</label>
            <input value={from} onChange={(e) => setFrom(e.target.value)} className="form-control mb-3" />
            <label className="text-dark ">Subject</label>
            <input value={subject} onChange={(e) => setSubject(e.target.value)} className="form-control mb-3" />
            <label className="text-dark ">Message</label>
            <textarea
              rows={6}
              value={message}
              maxLength={MAX}
              onChange={(e) => setMessage(e.target.value)}
              className="form-control mb-3"
            />
            <span className="d-flex text-dark justify-content-end">
              {message.length}/{MAX}
            </span>
            <button onClick={handleSubmit} className="btn btn-info">
              Hit Me Up
            </button>
          </form>
        </div>
      </section>
      <footer className="d-flex justify-content-center text-center">
        contact info: iwillseeherlater@yourmom.com<br></br>
        Address: Your Mom's House
      </footer>
    </main>
  );
};

interface AppProps {}

export default ContactMe;
