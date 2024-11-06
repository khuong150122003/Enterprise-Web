import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import CoordinatorPage from "./pages/CoordinatorPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/usermanagement/coordinator"
              element={<CoordinatorPage />}
            />{" "}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
