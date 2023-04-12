import { Layout, Space } from "antd";
const { Footer, Card, List } = Layout;
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
const data = [
  {
    title: "Title 1",
  },
  {
    title: "Title 2",
  },
  {
    title: "Title 3",
  },
  {
    title: "Title 4",
  },
];
function Bottom() {
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Footer style={footerStyle}>
          <List
            grid={{
              gutter: 16,
              column: 4,
            }}
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.title}>Card content</Card>
              </List.Item>
            )}
          />
        </Footer>
      </Layout>
    </Space>
  );
}
export default Bottom;
