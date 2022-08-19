import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import ClickTrackBuilder from "./components/ClickTrackBuilder/ClickTrackBuilder";
import ExerciseList from "./components/Exercises/List/ExerciseList";
import Landing from "./components/Landing/Landing";
import Session from "./components/Session/Session";
import Layout from "./shared/Layout/Layout";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/dashboard" element={<Landing />}></Route>
            <Route path="exercise-list" element={<ExerciseList />}></Route>
            <Route
              path="click-track-builder/*"
              element={<ClickTrackBuilder />}
            ></Route>
            <Route path="session/*" element={<Session />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
