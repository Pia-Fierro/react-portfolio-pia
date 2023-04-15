import React from "react";
import { Layout } from "antd";
const myNavBar = {
  padding: "20px 0 20px 0",
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "#001529",
};
function NavHeader({ currentPage, handlePageChange }) {
  return (
    <Layout className="layout">
      <nav style={myNavBar}>
        <a
          href="#About"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>

        <a
          href="#Projects"
          onClick={() => handlePageChange("Projects")}
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
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
