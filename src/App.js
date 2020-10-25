import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import styles from "./App.css";
import Nonprofits from "./pages/Nonprofits/index";
import Projects from "./pages/Projects/index";
import Students from "./pages/Students/index";
import About from "./pages/About/index";
import Contact from "./pages/Contact/index";
import Home from "./pages/Home/index";
const App = () => {
	return (
		<BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path = "/about" component={About} />
        <Route exact path = "/contact" component={Contact} />
        <Route exact path = "/students" component={Students} />
        <Route exact path = "/projects" component = {Projects} />
        <Route exact path = "/nonprofits" component = {Nonprofits}/>
				<Route exact path="/" component={Home} />
				<Redirect to="/" />
			</Switch>
      <Footer/>
    </BrowserRouter>
	);
}

export default App;
