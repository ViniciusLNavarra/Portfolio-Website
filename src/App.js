import { Route, Switch } from "react-router";
import { Experience, Main, Personal, Projects } from "./sites/Sites";
import "./css/App.css";
import logo from "./img/logo.png";

function App() {
  return (
    <>
      <div id="logo" href="/">
        <a href="/"><img id="logo" src={logo} alt="Logo" /></a>
      </div>
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
    </>
  );
}

export default App;