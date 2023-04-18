import React, { useState } from "react";
import "../index.css";
import PageHeader from "./Header";
import PageFooter from "./Footer.js";
import About from "./NavPages/About.js";
import Portfolio from "./NavPages/Portfolio.js";
import Contact from "./NavPages/Contact";
import Resume from "./NavPages/Resume";
import Layout from "antd/es/layout/layout";

// function to changed the section. Set About section as default.
export default function Container() {
  const [currentPage, setCurrentPage] = useState("About");
  const renderPage = () => {
    if (currentPage === "About") return <About />;
    if (currentPage === "Portfolio") return <Portfolio />;
    if (currentPage === "Contact") return <Contact />;
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Layout className="layout">
        <PageHeader
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {/* callin render page function to display each section when selected from nav bar */}
        {renderPage()}
        <PageFooter />
      </Layout>
    </div>
  );
}
