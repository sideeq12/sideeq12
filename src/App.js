import './App.css';
import Experience  from './Experience';
import Profile from "./Profile"
import About from "./about"
import Project from "./project"
import Contact from './contact';
import Navbar from "./navbar"
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
     <Switch>
       <Route path="/experience" exact component={Experience} />
       <Route path="/about" exact component={About} />
       <Route path="/contact" exact component={Contact} />
       <Route path="/project" exact component={Project} />
       <Route path="/" exact component={Profile} />
     </Switch>
     </Router>
    </div>
  );
}

export default App;
