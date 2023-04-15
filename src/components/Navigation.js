import React from "react";
import { Layout, Anchor } from "antd";

function NavHeader({ currentPage, handlePageChange }) {
  return (
    <Layout className="layout">
      <>
        <div
          style={{
            padding: "20px",
          }}
        >
          <Anchor
            direction="horizontal"
            items={[
              {
                key: "part-1",
                href: "#About",
                title: "About",
              },
              {
                key: "part-2",
                href: "#Projects",
                title: "Projects",
              },
              {
                key: "part-3",
                href: "#Contact",
                title: "Contact",
              },
              {
                key: "part-4",
                href: "#Resume",
                title: "Resume",
              },
            ]}
            onClick={(items) => handlePageChange(items.href)}
            className={
              currentPage === "items.title" ? "nav-link active" : "nav-link"
            }
          />
        </div>
        <div>
          <div
            id="part-1"
            // style={{
            //   width: "100vw",
            //   height: "100vh",
            //   textAlign: "center",
            //   background: "rgba(0,255,0,0.02)",
            // }}
          />
          <div
            id="part-2"
            // style={{
            //   width: "100vw",
            //   height: "100vh",
            //   textAlign: "center",
            //   background: "rgba(0,0,255,0.02)",
            // }}
          />
          <div
            id="part-3"
            // style={{
            //   width: "100vw",
            //   height: "100vh",
            //   textAlign: "center",
            //   background: "#FFFBE9",
            // }}
          />
          <div
            id="part-4"
            // style={{
            //   width: "100vw",
            //   height: "100vh",
            //   textAlign: "center",
            //   background: "#F4EAD5",
            // }}
          />
        </div>
      </>
    </Layout>
  );
}

export default NavHeader;
