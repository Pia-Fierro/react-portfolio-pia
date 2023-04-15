import { Layout, List, Avatar } from "antd";
import {
  GithubOutlined,
  HomeOutlined,
  LoadingOutlined,
  UserOutlined,
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

function PageFooter() {
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
          renderItem={(footerlinks, index) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <a href={footerlinks.href}>
                    {footerlinks.title}
                    {<br />}
                    {<GithubOutlined />}
                    {/* footerlinkd.icon not working */}
                    {<footerlinks.icon />}
                  </a>
                }
                avatar={<Avatar icon={<GithubOutlined />} />}
                // avatar={<Avatar icon={<footerlinks.icon />} />}
              />
            </List.Item>
          )}
        />
      </Footer>
    </Layout>
  );
}
export default PageFooter;
