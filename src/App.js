import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Images from "./components/pages/Images";
import Portfolio from "./components/pages/portfolio";
import New from "../src/components/pages/Contact";
import RingLoader from "react-spinners/RingLoader";
import ScrollToTop from "./components/ScrollToTop";
import Prewedding from "./components/pages/prewedding";

function App() {
  const [loading, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        {loading ? (
          <div className="App">
            <RingLoader color={"#100101"} loading={loading} size={250} />
          </div>
        ) : (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/images" component={Images} />
            <Route path="/prewedding" component={Prewedding} />
            <Route path="/contact" component={New} />
          </Switch>
        )}
      </Router>
    </>
  );
}

export default App;
