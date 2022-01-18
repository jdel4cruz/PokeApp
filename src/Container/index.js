import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import Sidebar from "../Components/Sidebar";
import Pokemon from "../Pokemon";
import Home from "../Home";

//Styles
import { Wrapper } from "./Container.styles";

const Container = () => (
  <Router>
    <Wrapper>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </Wrapper>
  </Router>
);

export default Container;
