import React from "react";
import { Card } from "antd";

const style = {
  myClassProjects: {
    display: "flex",
    flexWrap: "wrap",
  },
  myLinks: {
    display: "flex",
    justifyContent: "center",
  },
};

export default function Projects(props) {
  return (
    <div style={style.myClassProjects}>
      {props.projects.map((project) => (
        <Card
          hoverable
          style={{
            width: 500,
            backgroundColor: "#001529",
            padding: "10px",
          }}
          cover={<img alt={project.alt} src={project.src} />}
        >
          <div>
            <h3 style={{ color: "white" }}>{project.name}</h3>
            <div hoverable style={style.myLinks}>
              <a style={{ fontSize: "15px" }} href={project.gitUrl}>
                GitHub Repository
              </a>
              <br />
              <a style={{ fontSize: "15px" }} href={project.deployApp}>
                Deploy application
              </a>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
