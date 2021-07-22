import "./App.css";
import Header from "./MYComponents/Header";
import { Home } from "./MYComponents/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignIn from "./MYComponents/SignIn";
import SignUp from "./MYComponents/SignUp";
function App() {
  return (
    <div className="app-container">
      <Router>
        <Header title="MYpage" />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/SignIn">
            <SignIn />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
