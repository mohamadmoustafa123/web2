import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";

function App() {
  return (

    <div className="App">
      <Routes>
        <Route Component={NavBar}>
          <Route path="/HomePage" Component={HomePage} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
