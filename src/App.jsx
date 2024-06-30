import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Layout } from "./layouts";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Security } from "./pages/Security";
import { Service } from "./pages/Service";
import { Shoe } from "./pages/Shoe";
import { Cart } from "./pages/Cart";
import { Pay } from "./pages/Pay";

import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index={true} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shoe/:id" element={<Shoe />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Security" element={<Security />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Pay" element={<Pay />} />

        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
