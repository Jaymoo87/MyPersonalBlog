import * as React from "react";
import { useState } from "react";

/* HOOK REACT EXAMPLE */
const ContactMe = (props: AppProps) => {
  const [from, setFrom] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ from, subject, message }),
    })
      .then((res) => res.json())
      .then((result) => console.log("it worked"));
  };

  return (
    <main className="container my-5">
      <section className="row justify-content-center">
        <div className="col-md-6">
          <form action="" className="form-group p-3 border rounded shadow">
            <input value={from} onChange={(e) => setFrom(e.target.value)} className="form-control mb-3" />
            <input value={subject} onChange={(e) => setSubject(e.target.value)} className="form-control mb-3" />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="form-control mb-3" />
            <button onClick={handleSubmit} className="btn btn-info">
              Hit Me Up
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

interface AppProps {}

export default ContactMe;
