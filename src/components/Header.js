import { Layout } from "antd";
import NavHeader from "./Navigation";
const logo = require("../images/pia-profile-pic.jpg");
const { Header } = Layout;

const topPage = {
  height: "auto",
};
const headerTitle = {
  fontSize: "60px",
  color: "White",
  marginTop: "90px",
  // textAlign: "center"
};

const items = ["About me", "Portfolio", "Contact", "Resume"];

function PageHeader(props) {
  return (
    <Layout className="layout">
      <Header style={topPage}>
        <div className="logo">
          <img src={logo} alt="Pia profile" width="200" height="200" />
        </div>
        <h1 style={headerTitle}>Pia Fierro Portfolio</h1>
        <NavHeader
          currentPage={props.currentPage}
          handlePageChange={props.handlePageChange}
        />
      </Header>
    </Layout>
  );
}

export default PageHeader;
