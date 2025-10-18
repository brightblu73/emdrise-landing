import { Route, Switch } from "wouter";
import Home from "./pages/home";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>404 - Page Not Found</Route>
    </Switch>
  );
}

export default App;
