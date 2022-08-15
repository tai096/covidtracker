import { Routes, Route } from "react-router-dom";
import "./input.scss";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import InformationPage from "./components/InformationPage";
import TrackerPage from "./components/TrackerPage";
import TodoListPage from "./components/TodoListPage";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/information" element={<InformationPage />} />
        <Route path="/tracker" element={<TrackerPage />} />
        <Route path="/todo_list" element={<TodoListPage />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </div>
  );
}

export default App;
