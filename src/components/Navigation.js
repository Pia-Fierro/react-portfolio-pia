import React from "react";
import { Layout } from "antd";
const style = {
  myNavBar: {
    alineItems: "right",
    padding: "20px 0 0 0",
    display: "flex",
    justifyContent: "end",
    backgroundColor: "#001529",
  },
};
function NavHeader({ currentPage, handlePageChange }) {
  return (
    <Layout className="layout">
      <nav style={style.myNavBar}>
        <a
          href="#About"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>

        <a
          href="#Portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>

        <a
          href="#Contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>

        <a
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
