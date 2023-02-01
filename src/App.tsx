import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./index.d.ts";
import AuthRoutes from "./routes";
import { logoVecchia } from "./assets/index";
import { Nav } from "./components";

const App: React.FC = () => {
  return (
    <Router>
      {
        <div className="App">
          <header className="App-header">
            <Nav />
          </header>
          <div className="content">
            <AuthRoutes />
          </div>
        </div>
      }
    </Router>
  );
};

export default App;
