import React from "react";
import { Card, Layout } from "antd";
const quiz = require("../../images/Coding-Quiz-Challenge.jpg");

const classProjects = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
};
const links = {
  display: "flex",
  justifyContent: "space-around",
};

function Projects() {
  return (
    <div style={classProjects}>
      <Card
        hoverable
        style={{
          width: 600,
          backgroundColor: "#001529",
        }}
        cover={<img alt="Qui" src={quiz} />}
      >
        <div style={links}>
          <a href="https://github.com/Pia-Fierro/quiz-code-pia">
            GitHub Repository
          </a>
          <br />
          <a href="https://pia-fierro.github.io/quiz-code-pia/">
            Deploy application
          </a>
        </div>
      </Card>
    </div>
  );
}

export default Projects;
