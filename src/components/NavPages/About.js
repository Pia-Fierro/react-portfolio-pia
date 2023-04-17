import { Layout, theme } from "antd";
const { Content } = Layout;

export default function About() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Content
        style={{
          padding: "40px 40px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          <h1>About me:</h1>
          <p style={{ display: "flex", fontSize: "18px" }}>
            I was born in Chile, but moved to Spain when I was a child. In Spain
            I obtiened a veterinarian degree, followed by a postdegree in exotic
            animals medicine & surgery. After completing my formation I went
            back to Chile where I developed my veterinarian career working with
            exotics pets.
            <br />
            I have always loved to travel and meet new cultures and countries,
            reason why I decided to come to Australia, 4 years ago. I have
            fallen in love with this part of the world and decided to make it my
            home. Here I became a disability support worker; profession I have
            been practicing for the past two years.
            <br />
            I have always felt curios about the software development field hence
            why I decided to enroll in the full stack web developer bootcamp at
            the university of Sydney.
            <br />
            I have strong problem-solving skills and an analytic mind. I am
            organized and methodic what leads me to be able to meet time lines
            and goals both in my professional and personal life. I am
            responsible and committed, also, cheerful, social and easy going. I
            considered myself as a team player, but also I enjoy working on my
            own.
            <br />
            My goal is to keep developing my knowledge and skills to make a
            career as a full stack developer in the IT world.
          </p>
        </div>
      </Content>
    </Layout>
  );
}

