import { Layout, List, Space } from "antd";
import {
  GithubOutlined,
  HomeOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const footerlinks = [
  {
    title: "GitHub",
    href: "https://github.com/Pia-Fierro",
    icon: "GithubOutlined",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/p%C3%ADa-fierro-32442348/",
    icon: "HomeOutlined",
  },
  {
    title: "Stack Overflow",
    href: "https://stackoverflow.com/users/21641013/pia-fierro",
    icon: "LoadingOutlined",
  },
];

function BottomPage() {
  return (
    <Layout className="layout">
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={footerlinks}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                icon={<item.icon />}
              />
            </List.Item>
          )}
        />
      </Footer>
    </Layout>
  );
}
export default BottomPage;
