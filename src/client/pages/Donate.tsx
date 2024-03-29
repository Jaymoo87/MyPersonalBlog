import * as React from "react";
import Swal from "sweetalert2";

import { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Donate = (props: DonateProps) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const nav = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmitButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name,
      },
    });

    if (error) {
      console.log("error:", error);
    } else {
      console.log("paymentMethod", paymentMethod);

      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, paymentMethod: paymentMethod }),
      });

      if (!res.ok) {
        Swal.fire({
          title: "Fuck!",
          icon: "error",
          text: "You Don't Really Want To Donate.",
          confirmButtonText: "not cool",
        });
      } else {
        const paymentDone = await res.json();
        console.log(paymentDone.result);
        Swal.fire({
          title: "Success!",
          text: "Thanks For The Chedda",
          confirmButtonText: "Cool",
        });
        nav("/");
      }
    }
  };
  return (
    <main className="container d-flex justify-content-center">
      <section className="row mt-5 justify-content-center col-6 col-md-6">
        <form className="form-group p-4 rounded-lg bg-secondary rounded shadow-lg">
          <h3 className="text-center text-dark">Donate</h3>
          <label className="text-dark ">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control mb-2" />
          <label className="text-dark ">Donation Amount</label>
          <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} className="form-control mb-2" />
          <label className="text-dark ">Card Information</label>
          <CardElement className="form-control mb-2" />
          <div className=" d-flex justify-content-end">
            <button onClick={handleSubmitButton} className="btn btn-warning">
              Donate!
            </button>
          </div>
        </form>
        <footer></footer>
      </section>
    </main>
  );
};

interface DonateProps {}

export default Donate;
