import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Router, Route } from "react-router-dom";
import { Header } from "./components";
import * as Pages from "./pages";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <Route path="/" element={<Header />}>
        <Route index element={Pages.HomePage} />
        <Route path="/myTeams" element={Pages.MyTeamPage} />
      </Route>
      <Route path="*" element={<Pages.NotFoundPage />} />
    </Router>
  );
}

export default App;
