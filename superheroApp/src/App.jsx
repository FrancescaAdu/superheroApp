import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import * as Pages from "./pages";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Pages.HomePage />} />
        <Route path="/MyTeam" element={<Pages.MyTeamPage />} />
        <Route path="/HeroSearch" element={<Pages.HeroSearchPage />} />
      </Route>
      <Route path="*" element={<Pages.NotFoundPage />} />
    </Routes>
  );
}

export default App;
