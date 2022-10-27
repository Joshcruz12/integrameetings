import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components";
import Footer from "../components/Footer";
import AvisoPrivacidad from "../pages/AvisoPrivacidad";
import Homepage from "../pages/Homepage";
import Policy from "../pages/Policy";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aviso" element={<Policy />} />
        <Route path="/aviso/es" element={<AvisoPrivacidad />} />
        <Route path="/aviso/en" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
