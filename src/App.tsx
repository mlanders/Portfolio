import { useState, useEffect } from "react";

// Project data
import db from "./data";
import { Project } from "./types";

// Components
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
    <div className="min-h-screen bg-white">
      <Header />
      <About />
      <Projects data={data} />
      <Footer />
    </div>
  );
}

export default App;
