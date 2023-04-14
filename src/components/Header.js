import { Layout, Menu } from "antd";
const logo = require("../images/pia-profile-pic.jpg");
const { Header } = Layout;

const topPage = {
  height: "auto",
};

const items = [
  { title: "About me" },
  { title: "Portfolio" },
  { title: "Contact" },
  { title: "Resume" },
];

function TopPage() {
  return (
    <Layout className="layout">
      <Header style={topPage}>
        <div className="logo">
          <img src={logo} width="200" height="200" />
        </div>
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(4).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: ` ${key}`,
            };
          })}
        /> */}
      </Header>
    </Layout>
  );
}

export default TopPage;
