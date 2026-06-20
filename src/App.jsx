import { useState } from "react";
import Calculator from "./Calculator";
import Hero from "./Hero";
import Info from "./Info";
import Guide from "./Guide";
import Footer from "./Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Calculator />
      <Info />
      <Guide />
      <Footer />
    </div>
  );
}

export default App;
