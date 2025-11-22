import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">

<Routes>
  <Route path='/HomePage' Component={HomePage}/>
</Routes>
    </div>
  );
}

export default App;
