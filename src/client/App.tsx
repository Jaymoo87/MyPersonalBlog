import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react';




import Navbar from "./components/Navbar";
import Blogs from './components/Blogs';

/* HOOK REACT EXAMPLE */
const App = () => {
	return (
	  <BrowserRouter>
		<Navbar />
		<main className="container mt-5">
		  <section className="row justify-content-center">
			<Routes>
			  <Route path="/db/blogs" element={<Blogs />}></Route>
			  <Route path="" element></Route>
			  <Route path="" element></Route>
			  <Route
				path=""
				element={
				  <h1>
					<></>
				  </h1>
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
