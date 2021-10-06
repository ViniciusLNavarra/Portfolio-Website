import { Route, Switch } from 'react-router';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Experience, Main, Personal, Projects } from './sites/Sites';
import './App.css';
import logo from './img/logo.png'

function App() {
  return (
    <div className="App"> 
      <Router>
        <Switch>
          <Link to="/">
            <img className="logo" src={logo} alt="Logo"/>
          </Link>
          <Route exact path="/" component={<Main/>}/>
          <Route exact path="/experience" component={<Experience/>}/>
          <Route exact path="/personal" component={<Personal/>}/>
          <Route exact path="/projects" component={<Projects/>}/>
          <footer>
            <p>&copy; Vinicius Navarra 2021 - {new Date().getFullYear()}</p>
          </footer>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
