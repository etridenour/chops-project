import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import ClickTrackBuilder from "./components/ClickTrackBuilder/ClickTrackBuilder";
import ExerciseList from "./components/Exercises/List/ExerciseList";
import Landing from "./components/Landing/Landing";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="exercise-list" element={<ExerciseList />}></Route>
          <Route path="click-track-builder" element={<ClickTrackBuilder />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
