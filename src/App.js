import React from "react";
import TopBar from "./components/TopBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<TopBar />} path="/">
          <Route element={<Home />} index />
          <Route element={<About />} path="/about" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Shop />} path="/shop" />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
