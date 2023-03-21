// import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar';
import { Home } from "./component/Home";
import { About } from "./component/About";

import { Contact } from './component/Contact';
import { Skill } from './component/Skill';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home></Home>
      <About></About>
      <Contact />
      <Skill/>
      
    </div>
  );
}

export default App;
