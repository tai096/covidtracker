import { Routes, Route } from "react-router-dom";
import "./input.scss";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Information from "./components/Information";
import TrackerPage from "./components/TrackerPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/information" element={<Information />} />
        <Route path="/tracker" element={<TrackerPage />} />
      </Routes>
    </div>
  );
}

export default App;
