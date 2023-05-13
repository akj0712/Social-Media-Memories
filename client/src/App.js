import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/auth" exact Component={Auth} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
