import React from "react";
import { Layout } from "antd";
const myNavBar = {
  padding: "20px 0 20px 0",
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "#001529",
};
const anchor = {
  color: "white",
  fontSize: "20px",
};

function NavHeader({ currentPage, handlePageChange }) {
  return (
    <Layout className="layout">
      <nav style={myNavBar}>
        <a
          style={anchor}
          href="#About"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>

        <a
          style={anchor}
          href="#Portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>

        <a
          style={anchor}
          href="#Contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>

        <a
          style={anchor}
          href="#Resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </nav>
    </Layout>
  );
}

export default NavHeader;
