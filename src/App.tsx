import { useState, useEffect } from "react";

import db from "./data";
import { Project } from "./types";

import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    setData(db);
  });

  return (
    <div className="min-h-screen bg-base-900 text-base-50 font-sans">
      <Header />
      <About />
      <Projects data={data} />
      <Footer />
    </div>
  );
}

export default App;
