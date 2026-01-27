import { Route, Switch } from "wouter";
import Home from "./pages/home";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route>404 - Page Not Found</Route>
    </Switch>
  );
}

export default App;
