import React from "react";
import { Card, Space, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import resume from "../../assets/resume/resume.pdf";
const style = {
  myCardContainer: {
    padding: "50px 0 50px 0",
    display: "flex",
    justifyContent: "center",
  },
  myCardStyle: {
    width: 350,
    height: 350,
    fontSize: "20px",
  },
};
const { Title } = Typography;

export default function Resume() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2>Resume:</h2>
        <div
          style={{
            backgroundColor: "#001529",
            width: "fit-content",
            height: "fit-content",
            borderRadius: "3px",
            margin: "10px 15px",
          }}
        >
          <a href={resume} download>
            Download my resume <span> </span>
            <DownloadOutlined />
          </a>
        </div>
      </div>

      <div style={style.myCardContainer}>
        <Space direction="horizontal" size={100}>
          <Card
            bordered={true}
            title={<Title level={3}>Front End Proficiencies</Title>}
            style={style.myCardStyle}
          >
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Responsive Design</li>
            <li>Bootstrap & AntD</li>
            <li>Handlebars</li>
          </Card>
          <Card
            bordered={true}
            title={<Title level={3}>Back End Proficiencies</Title>}
            style={style.myCardStyle}
          >
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Third party & RESTful API's</li>
            <li>MVC</li>
            <li>SQL & Sequilize</li>
            <li>MongoDB(NoSQL) & Mongoose</li>
            <li>GraphQL</li>
            <li>PWA</li>
          </Card>
        </Space>
      </div>
    </div>
  );
}
