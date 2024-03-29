import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavComponent from "./nav-container/nav-bar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import Mold from "./pages/mold";
import Meth from "./pages/meth";
import TearGas from "./pages/tear-gas";
import Fentanyl from "./pages/fentanyl";
import Ricin from "./pages/ricin";
import Footer from "./containers/footer";
import Formaldehyde from "./pages/formaldehyde";

export default function App() {
  return (
    <div className="app-wrapper">
      <div>
        <NavComponent />
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
        <Route path="/mold" component={Mold} />
        <Route path="/meth" component={Meth} />
        <Route path="/tear-gas" component={TearGas} />
        <Route path="/fentanyl" component={Fentanyl} />
        <Route path="/ricin" component={Ricin} />
        <Route path="/formaldehyde" component={Formaldehyde} />
      </Switch>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}
