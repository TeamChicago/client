import { Link, Route, Router, Switch } from "react-router-dom";
import './App.css';
import { history } from "./history";

import Apply from "./components/Apply";
import Register from "./components/Register";


function App() {
  return (
    <Router history={history}>
      <div className="App">
        <div className="black-nav">
         <div> Chicago 졸업작품 </div>
        </div>
        <div className="box">
          <Link className="authbox" to={"/register"}>
            채용하기
          </Link>
          <Link className="authbox" to={"/apply"}>
            지원하기
          </Link>
        </div>
      </div>
      <div>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/apply" component={Apply} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
