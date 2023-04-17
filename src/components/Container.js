import React, { useState } from "react";
import "../App.css";
import PageHeader from "./Header";
import PageFooter from "./Footer.js";
import About from "./NavPages/About.js";
import Projects from "./NavPages/Project";
import Contact from "./NavPages/Contact";
import Resume from "./NavPages/Resume";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("About");
  const renderPage = () => {
    if (currentPage === "About") return <About />;
    if (currentPage ==="Projects") return <Projects />;
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