import React from "react";
import { Card } from "antd";
import { hover } from "@testing-library/user-event/dist/hover";

const style = {
  myClassProjects: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  myCardStyle: {
    width: 500,
    backgroundColor: "#001529",
    padding: "5px",
    borderColor: "white",
  },
  myLinks: {
    display: "flex",
    justifyContent: "center",
  },
};

export default function Projects(props) {
  return (
    <div style={style.myClassProjects}>
      {/* map thru projects array of objects to populate each project card */}
      {props.projects.map((project) => (
        <Card
          style={style.myCardStyle}
          className="myCard"
          cover={<img alt={project.alt} src={project.src} />}
        >
          <div>
            <h3 style={{ color: "white" }}>{project.name}</h3>
            <div hoverable style={style.myLinks}>
              <a style={{ fontSize: "18px" }} href={project.gitUrl}>
                GitHub Repository
              </a>
              <br />
              <a style={{ fontSize: "18px"}} href={project.deployApp}>
                Deploy application
              </a>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
