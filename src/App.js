import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
// import Code from "./components/code.jpg";

function App() {
  return (
    // <div  styles={{ backgroundImage:`url(${Code})` }}>
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
    // </div>
  );
}

export default App;
