import React from "react";
import Projects from "./Projects";
import { Layout } from "antd";

import quizImg from "../../images/Coding-Quiz-Challenge.jpg";
import destinationImg from "../../images/Destination-inspiration.jpg";
import noteImg from "../../images/Note-Taker.jpg";
import openImg from "../../images/Open-Chat-Box.jpg";
import weatherImg from "../../images/Weather-Dashboard.jpg";
import workImg from "../../images/Work-Day-Scheduler.jpg";

// projects array data to populate my portfolio

const projects = [
  {
    name: "Open Chat Box:",
    src: openImg,
    alt: "Open Chat Box Project",
    gitUrl: "https://github.com/Pia-Fierro/open-chat-box",
    deployApp: "https://open-chat-box.herokuapp.com/",
  },

  {
    name: "Destination Inspiration:",
    src: destinationImg,
    alt: "Destination project",
    gitUrl: "https://github.com/Pia-Fierro/Destination_Inspiration",
    deployApp: "https://muulinha.github.io/Destination_Inspiration/",
  },

  {
    name: "Note Taker:",
    src: noteImg,
    alt: "Note taker project",
    gitUrl: "https://github.com/Pia-Fierro/note-taker-pia",
    deployApp: "https://sheltered-garden-14412.herokuapp.com/",
  },

  {
    name: "Weather Dashboard:",
    src: weatherImg,
    alt: "Weather Dashboard Project",
    gitUrl: "https://github.com/Pia-Fierro/weather-dashboard-pia",
    deployApp: "https://pia-fierro.github.io/weather-dashboard-pia/",
  },
  {
    name: "Work Day Scheduler:",
    src: workImg,
    alt: "Work Day Scheduler Project",
    gitUrl: "https://github.com/Pia-Fierro/work-day-scheduler-pia",
    deployApp: "https://pia-fierro.github.io/work-day-scheduler-pia/",
  },
  {
    name: "Coding Quiz Challenge:",
    src: quizImg,
    alt: "Quiz Project",
    gitUrl: "https://github.com/Pia-Fierro/quiz-code-pia",
    deployApp: "https://pia-fierro.github.io/quiz-code-pia/",
  },
];

export default function Portfolio() {
  return (
    <Layout>
      <div>
        <h2>Projects:</h2>
        <Projects projects={projects} />
      </div>
    </Layout>
  );
}
