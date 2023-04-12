import { Layout, Space } from "antd";
const { Header} = Layout;
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

const Top = () => (
  <Space
    direction="vertical"
    style={{
      width: "100%",
    }}
    size={[0, 48]}
  >
      <Layout>
        <Header style={headerStyle}>Pia Portfolio</Header>
        {/* <Content style={contentStyle}>Content</Content>
        <Footer style={footerStyle}>Footer</Footer> */}
      </Layout>
  </Space>
);
export default Top;
