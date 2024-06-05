// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route, NavLink } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import User from "./pages/User";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink className="App-link" to="/">
          Accueil
        </NavLink>
        <NavLink className="App-link" to="/user">
          Ajouter un utilisateur
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
