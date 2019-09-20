import React, { Component } from "react";
import "./../style/products.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewProduct from "./NewProduct";
import NewCategory from "./NewCategory";

import Options from "./Options";
import ProductList from "./ProductList";
import { NewCategory } from "./NewCategory";

temp => {
  /*return(<div className="productLimit">
            <div className="col-lg-12">
              <Options />
            </div>
          </div>
          <ProductList />)*/
};

export default class Products extends Component {
  render() {
    return (
      <Router>
        <div>
          <NewCategory />
          <Route path="newproduct" component={NewProduct} />
        </div>
      </Router>
    );
  }
}
