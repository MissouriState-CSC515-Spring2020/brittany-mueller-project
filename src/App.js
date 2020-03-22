import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App() {
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
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/travel"  component={Travel} />
      <Route path="/details"  component={Details} />
    </Switch>
    </main>
  </Router>
  );
}

// Recent Photos
const Home = () => (
  <Fragment>
    <title>Recent Photos</title>
    <p></p>
    <center>
      <h1 >Recent Photos</h1>
      <p></p>
      <div>
        <Link to="/details">
        <img src='t1.jpg'></img></Link>
      </div>
      <p></p>
      <div>
        <Link to="/details">
        <img src='f.jpg'></img></Link>
      </div>
      <p></p>
      <div>
        <Link to="/details">
        <img src='t2.jpg'></img></Link>
      </div>
      <p></p>
      <div>
        <Link to="/details">
        <img src='a.jpg'></img></Link>
      </div>
      <p></p>
      <div>
        <Link to="/details">
        <img src='t3.jpg'></img></Link>
      </div>
      <p></p>
    </center>
  </Fragment>
  );

// Travel Page
const Travel = () => (
  <Fragment>
  <title>Travel Photos</title>
  <p></p>
    <center>
      <h1 >Travel</h1>
      <p></p>
      <div>
        <Link to="/details">
          <img src='t1.jpg'></img>
        </Link>
      </div>
    
      <p></p>
      <div>
        <Link to="/details">
        <img src='t2.jpg'></img>
        </Link>
      </div>
      
      <p></p>
      <div>
        <Link to="/details">
          <img src='t3.jpg'></img>
        </Link>
      </div>
      <p></p>
    </center>
  </Fragment>
  );

// Details Page
const Details = () => (
  <Fragment>
  <title>Bahamas Photo</title>
    <p></p>
    <center>

      <p></p>
      <div>
        <img class="pad" src='t1.jpg'></img>
      </div>
    
      <p></p>
      <div>A beautiful boat ride in the Bahamas.</div>
      
    </center>
  </Fragment>
  );
