import { Layout, theme, Space } from "antd";
const { Content } = Layout;

const textAboutMe = {
  textAlign: "center",
};

function MiddlePage() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Content
        style={{
          padding: "40px 40px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <h1>ABOUT ME:</h1>
          <p style={textAboutMe}>
            12345dfghuidhfgidfhugdfhugzdsughdfhvg;zdfhg;dfhgdhuishdiusahdfiuahsfiuhfiuhgh
          </p>
        </div>
      </Content>
    </Layout>
  );
}
export default MiddlePage;
