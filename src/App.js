import Dashboard from "./components/Dashboard";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleAuth from "./components/GoogleAuth";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/' element={<GoogleAuth/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
