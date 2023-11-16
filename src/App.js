import NavBar from "./navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import QnA from "./qna";
import Login from "./login";
import NotFound from "./notFound.js";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/qna">
              <QnA />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
