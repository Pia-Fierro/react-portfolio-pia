import React from "react";
import { Layout, Card, Space, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import cv from "../../assets/resume/cv.pdf";
const style = {
  myCardContainer: {
    display: "flex",
    justifycontent: "center",
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
    <Layout>
      <h2>Resume:</h2>
      <div style={{ backgroundColor: "blue" }}>
        <a href={cv} download>
          <DownloadOutlined />
          Download my resume
        </a>
      </div>

      <div style={style.myCardContainer}>
        <Space direction="horizontal" size={100}>
          <Card
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
    </Layout>
  );
}
