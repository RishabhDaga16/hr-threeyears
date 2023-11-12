import React from "react";
import "./App.css";
import Landing from "./Components/Landing";
import Redirect from "./Components/Redirect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/redirect" element={<Redirect />} />
        </Routes>
      </Router>
      {/* <Landing /> */}
      {/* <Redirect /> */}
    </div>
  );
}

export default App;
