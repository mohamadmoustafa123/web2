import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";
import Signin from "./components/Singin";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Signin/>}/>
        <Route path="/signup" element={<Signup />}/>
        <Route Component={NavBar}>
          <Route path="/HomePage" Component={HomePage} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
