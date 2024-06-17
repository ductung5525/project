import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
