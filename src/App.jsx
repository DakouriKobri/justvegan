import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import CategoryPage from "./pages/category-page/CategoryPage";
import Home from "./pages/home/Home";

export default function App() {
  return (
    <div className="App">
      <h1>
        <span>JustVegan - </span> Eat healthy
      </h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:category" component={CategoryPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
