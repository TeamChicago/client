
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import { history } from "./history";

import logo from "./images/logo.png"

import PostNews from "./components/PostNews";
import Home from "./components/Home";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <div className="black-nav">
          <div className="box">
            <Link to={"/"} style={{ color: 'inherit', textDecoration: 'none' }}>
              <img src={logo}/>
            </Link>
          </div>
          <>
            <div className="box">
              <Link className="authbox" to={"/register"}>
                뉴스 올리기
              </Link>
            </div>
          </>
        </div>
      </div>
      <div>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path="/register" component={PostNews} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
