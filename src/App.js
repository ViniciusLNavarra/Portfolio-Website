import { Route, Switch } from "react-router";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Experience, Main, Personal, Projects } from "./sites/Sites";
import "./App.css";
import logo from "./img/logo.png";

function App() {
  return (
    <div className="App">
      <a href="/">
        <img className="logo" src={logo} alt="Logo" />
      </a>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/personal">
          <Personal />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>

      <footer>
        <p>&copy; Vinicius Navarra 2021 - {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
