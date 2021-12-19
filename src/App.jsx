import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import CategoryPage from "./pages/category-page/CategoryPage";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/product-details/ProductDetails";
import "./scss/styles.scss";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <h1 style={{ backgroundColor: "blue" }}>Hero</h1>

          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/:category/:slug" component={ProductDetails} />
            <Route path="/:category" component={CategoryPage} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}
