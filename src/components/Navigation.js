import React from "react";
import { Layout, Menu } from "antd";
const items = ["About me", "Portfolio", "Contact", "Resume"];

const myNavStyle = {
  fontSize: "20px",
  display: "flex",
  justifyContent: "end",
};

function NavHeader() {
  return (
    <Layout className="layout">
      <Menu
        style={myNavStyle}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items.map((item, index) => {
          const key = index + 1;
          return {
            key,
            label: `${item}`,
          };
        })}
      />
    </Layout>
  );
}

export default NavHeader;
