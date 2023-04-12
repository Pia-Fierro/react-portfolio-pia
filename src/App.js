import React from "react";
import Top from "./components/Header";
import Bottom from "./components/Footer";
import Middle from "./components/Content";

const App = () => {
  return (
    <div>
      <Top />
      <Middle />
      <Bottom />
    </div>
  );
};

export default App;
