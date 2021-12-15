import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import CategoryPage from "./pages/category-page/CategoryPage";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/product-details/ProductDetails";

export default function App() {
  return (
    <div className="App">
      <h1>
        <span>JustVegan - </span> Eat healthy
      </h1>
      <Router>
        <Switch>
          <Route path="/:category/:slug" component={ProductDetails} />
          <Route path="/:category" component={CategoryPage} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
