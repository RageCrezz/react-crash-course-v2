import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ReactDOM from "react-dom/client";

// Pages
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Todo from "./pages/Todo";
import Pokedex from "./pages/Pokedex";
import ArraySearch from "./pages/ArraySearch";
import CollapsibleBox from "./pages/CollapsibleBox";

// Style import
import "./styles/index.scss";

function BackHome() {
  const location = useLocation();

  if (location.pathname !== "/") {
    return (
      <a href="/" className="link-root-constant">
        Go Back
      </a>
    );
  } else return null;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <BackHome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/search-list" element={<ArraySearch />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/collapsible-box" element={<CollapsibleBox />} />
      </Routes>
    </Router>
  </>
);
