import { useState } from "react";
import reactLogo from "./assets/superhero.png";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import * as Pages from "./pages";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Header logo={reactLogo} />}>
        <Route index element={<Pages.HomePage />} />
        <Route path="/MyTeam" element={<Pages.MyTeam />} />
        <Route path="/HeroSearch" element={<Pages.HeroPage />} />
      </Route>
      <Route path="*" element={<Pages.NotFoundPage />} />
    </Routes>
  );
}

export default App;
