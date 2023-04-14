import "./App.css";
import TopPage from "./components/Header";
import MiddlePage from "./components/Content";
import BottomPage from "./components/Footer";

const App = () => {
  return (
    <div>
      <TopPage />
      <MiddlePage />
      <BottomPage />
    </div>
  );
};
export default App;
