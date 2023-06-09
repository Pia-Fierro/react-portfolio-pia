import { Layout, Breadcrumb } from "antd";
import {
  GithubFilled,
  LinkedinFilled,
  TwitterCircleFilled,
} from "@ant-design/icons";

const { Footer } = Layout;
const myBreadCrumbStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export default function PageFooter() {
  return (
    <Footer>
      <Breadcrumb
        style={myBreadCrumbStyle}
        items={[
          {
            href: "https://github.com/Pia-Fierro",
            title: (
              <>
                <GithubFilled style={{ fontSize: "20px" }} />
                <span>GitHub</span>
              </>
            ),
          },
          {
            href: "https://www.linkedin.com/in/p%C3%ADa-fierro-32442348/",
            title: (
              <>
                <LinkedinFilled style={{ fontSize: "20px" }} />
                <span>LinkedIn</span>
              </>
            ),
          },
          {
            href: "https://twitter.com/PiaFierro3/",
            title: (
              <>
                <TwitterCircleFilled style={{ fontSize: "20px" }} />
                <span>Twitter</span>
              </>
            ),
          },
        ]}
      />
    </Footer>
  );
}
