import React, {Component} from "../node_modules/react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "../node_modules/react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import Header from "./components/Header";

class App extends Component {
  render() {
    return <> 
    <Router> 
      <div>
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route path="/saved" component={Saved}/>
        </Switch>
      </div>
    </Router>
    </>;
  }
}

export default App;
