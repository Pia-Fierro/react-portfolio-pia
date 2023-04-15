import React, { useState } from "react";
import "../App.css";
import PageHeader from "./Header";
import PageFooter from "./Footer.js";
import About from "./NavPages/About.js";
import Projects from "./NavPages/Projects";
import Contact from "./NavPages/Contanct";
import Resume from "./NavPages/Resume";

function Container() {
  const [currentPage, setCurrentPage] = useState("About");
  const renderPage = () => {
    if (currentPage === "About") return <About />;
    if (currentPage === "Portfolio") return <Projects />;
    if (currentPage === "Contact") return <Contact />;
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <PageHeader
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      <PageFooter />
    </div>
  );
}

export default Container;
