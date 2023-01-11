import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from "react-select";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Navbar from "./components/navbar";
import BlogCard from "./pages/BlogCard";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
import AddNewBlog from "./pages/protectedpages/NewBlog";
import EditBlog from "./pages/protectedpages/EditBlog";
import Donate from "./pages/Donate";
import ContactMe from "./pages/Contact";
import Login from "./pages/Login";

const stripe = loadStripe(
  "pk_test_51MJKUdFPaPHS5QypWHjfAUtLgC0N44YatFtaQWDAVXnoudtlxFDbdf1dnib4afNrzotVpUTurvzkaGlbJN1G6v3b00gQVUooKI"
);

/* HOOK REACT EXAMPLE */
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container mt-5">
        <section className="row justify-content-center">
          <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<h1>Register</h1>}></Route>
            <Route path="/blogs/:id" element={<BlogCard />}></Route>
            <Route path="/blogs/new" element={<AddNewBlog />}></Route>
            <Route path="/blogs/:id/edit" element={<EditBlog />}></Route>
            <Route path="/contact" element={<ContactMe />}></Route>
            <Route
              path="/donate"
              element={
                <>
                  <Elements stripe={stripe}>
                    <Donate />
                  </Elements>
                </>
              }
            ></Route>

            <Route
              path=""
              element={
                <h1>
                  <></>
                </h1>
              }
            ></Route>
            <Route path="*" element={<h1>404 Not Found</h1>}></Route>
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
};

/* CLASS REACT EXAMPLE */
// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }

// export interface IAppProps {}

// export interface IAppState {
// 	name: string;
// }

export default App;
