import { Layout, Space } from "antd";
const { Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

const Middle = () => (
  <Space
    direction="vertical"
    style={{
      width: "100%",
    }}
    size={[0, 48]}
  >
    <Layout>
      <Content style={contentStyle}>
        <h2>About Me</h2>
        <p></p>blablabla
      </Content>
    </Layout>
  </Space>
);
export default Middle;
