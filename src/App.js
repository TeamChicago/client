import { Link, Route, Router, Switch } from "react-router-dom";
import './App.css';
import { history } from "./history";

import Apply from "./components/Apply";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <div className="black-nav">
          <div className="box">
            <Link to={"/"} style={{ color: 'inherit', textDecoration: 'none' }}>
              <a> Chicago 졸업작품 </a>
            </Link>
          </div>
          <>
            <div className="box">
             <Link className="authbox" to={"/register"}>
              채용하기
              </Link>
             <Link className="authbox" to={"/apply"}>
               지원하기
              </Link>
            </div>
          </>
        </div>
      </div>
      <div>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/apply" component={Apply} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
