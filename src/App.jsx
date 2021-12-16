import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import CategoryPage from "./pages/category-page/CategoryPage";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/product-details/ProductDetails";

export default function App() {
  return (
    <div className="App">
      <h1>
        <span>JustVegan - </span> Eat healthy
      </h1>
      <h1 style={{ backgroundColor: "aqua" }}>Hero</h1>
      <Router>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/:category/:slug" component={ProductDetails} />
          <Route path="/:category" component={CategoryPage} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
      <h1 style={{ backgroundColor: "aqua" }}>Footer</h1>
    </div>
  );
}
