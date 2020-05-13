import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./index.css";
//import Home from "./shelbizleee.js";
//import Travel from "./megan.js";

const Home = lazy(() => import('./shelbizleee.js'));
const Travel = lazy(() => import('./megan.js'));



export default class App extends React.Component {
  render(){
    return(
      <Router>
        <main>
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link to="/" className="navbar-brand">Categories</Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav"></div>
                <Link to="/travel" className="nav-item nav-link active">Travel</Link>
                <Link to="/travel" className="nav-item nav-link">Food</Link>
                <Link to="/travel" className="nav-item nav-link">Art</Link>
            </div>
          </nav>
        <Suspense fallback = {<div>Loading...</div>}>  
        <Switch>
            <Route path="/" exact component={Home} /> 
            <Route path="/travel"  component={Travel} />
        </Switch>
        </Suspense>
        </main>
      </Router>
    );
  }
};
