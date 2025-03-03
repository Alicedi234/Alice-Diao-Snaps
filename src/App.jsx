import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PhotoPage from "./pages/PhotoPage/PhotoPage";
import React from "react";


function App() {
  return (
    <main>
      <Router>
        <Routes>
          {" "}
          */
          {/* "/" -> HomePage */}
          <Route path="/" element={<HomePage />} />
          {/* "/photos/:id" -> PhotoPage*/}
          <Route path="/photos/:id" element={<PhotoPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
