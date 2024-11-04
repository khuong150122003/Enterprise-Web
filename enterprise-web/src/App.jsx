import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        {" "}
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
