import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ApplicationsPage from "./Components/ApplicationsPage";
import HomePage from "./Components/HomePage";
import JournalingPage from './Components/JournalingPage';
import StatsPage from './Components/StatsPage';

function App() {
  return (
    <>
        {/* This is the alias of BrowserRouter i.e. Router */}
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<HomePage />}
                />
                <Route
                    path="/applications"
                    element={<ApplicationsPage />}
                />
                <Route
                    path="/journaling"
                    element={<JournalingPage />}
                />
                <Route
                    path="/stats"
                    element={<StatsPage />}
                />
                <Route
                    path="*"
                    element={<Navigate to="/" />}
                />
            </Routes>
        </Router>
    </>
);
}

export default App;
