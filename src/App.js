import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Games } from "./components/Games/Games";
export const App = () => {
  return (
    <>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/games" exact component={Games} />
        </Switch>
      </div>
    </>
  );
};
