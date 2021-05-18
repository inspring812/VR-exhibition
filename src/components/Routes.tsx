import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import InfoPage from "../pages/InfoPage";
import VRPage from "../pages/VRPage";
import Header from "./Header";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/InfoPage" component={InfoPage} />
          <Route path="/VRPage" component={VRPage} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
