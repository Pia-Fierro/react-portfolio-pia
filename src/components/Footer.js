import { Layout, Breadcrumb } from "antd";
import {
  GithubFilled,
  LinkedinFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";

const { Footer } = Layout;
const myBreadCrumbStyle={
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}
function PageFooter() {
  return (
    <Layout className="layout">
      <Footer>
        <Breadcrumb
          style={myBreadCrumbStyle}
          items={[
            {
              href: "https://github.com/Pia-Fierro",
              title: (
                <>
                  <GithubFilled style={{ fontSize: "30px" }} />
                  <span>GitHub</span>
                </>
              ),
            },
            {
              href: "https://www.linkedin.com/in/p%C3%ADa-fierro-32442348/",
              title: (
                <>
                  <LinkedinFilled style={{ fontSize: "30px" }} />
                  <span>LinkedIn</span>
                </>
              ),
            },
            {
              href: "https://twitter.com/PiaFierro3/",
              title: (
                <>
                  <TwitterCircleFilled style={{ fontSize: "30px" }} />
                  <span>Twitter</span>
                </>
              ),
            },
          ]}
        />
      </Footer>
    </Layout>
  );
}
export default PageFooter;
