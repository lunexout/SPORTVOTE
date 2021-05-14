import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Games } from "./components/Games/Games";
import Signin from "./pages/Signin/Signin";

export const App = () => {
  return (
    <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/games" exact component={Games} />
          <Route path="/signin" exact component={Signin} />
        </Switch>
    </>
  );
};
