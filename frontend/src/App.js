import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./component/homepage.jsx";
import PersonPage from "./component/records/PersonPage.jsx";

function App() {
  return (
    <div className="app">
      <AppRoutes />
    </div>
  );
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/people/:id" element={<PersonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
