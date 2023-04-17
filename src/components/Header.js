import { Layout } from "antd";
import NavHeader from "./Navigation";
const logo = require("../assets/images/pia-profile-pic.jpg");
const { Header } = Layout;

const style = {
  topPage: {
    height: "auto",
    padding: "20px 90px 0 90px",
  },
  headerTitle: {
    fontSize: "80px",
    color: "White",
    marginTop: "150px",
    paddingLeft: "400px",
  },
};

export default function PageHeader(props) {
  return (
    <Layout className="layout">
      <Header style={style.topPage}>
        <div className="logo">
          <img src={logo} alt="Pia profile" width="300" height="300" />
        </div>
        <h1 style={style.headerTitle}>Pia Fierro Portfolio</h1>
        <NavHeader
          currentPage={props.currentPage}
          handlePageChange={props.handlePageChange}
        />
      </Header>
    </Layout>
  );
}
