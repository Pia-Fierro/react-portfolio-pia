import React from "react";
import { Card } from "antd";

const style = {
  myClassProjects: {
    display: "flex",
    justifyContent: "center",
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
            width: 600,
            backgroundColor: "#001529",
          }}
          cover={<img alt={project.alt} src={project.src} />}
        >
          <div>
            <h2 style={{ color: "white", textAlign: "center" }}>
              {project.name}
            </h2>
            <div hoverable style={style.myLinks}>
              <a href={project.gitUrl}>GitHub Repository</a>
              <br />
              <a href={project.deployApp}>Deploy application</a>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
