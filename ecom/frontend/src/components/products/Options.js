import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./../style/products.css";

//Images
import Filter from "./../style/images/filter.png";
import Actions from "./../style/images/options.png";
import Add from "./../style/images/plus.png";
import Asc from "./../style/images/asc.png";
import Desc from "./../style/images/desc.png";

import {
  selectAllProducts,
  deleteProducts,
  getProducts
} from "../../actions/products";

export class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAllChecked: [],
      actionMenu: false,
      filterMenu: false,
      products: []
    };
  }
  static propTypes = {
    selectAllChecked: PropTypes.bool.isRequired,
    selectAllProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired,
    deleteProducts: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getProducts();
  }

  handleDeleteProducts(e) {
    //Delete all selected products
    this.props.products.forEach(Product =>
      Product.selected === true ? this.props.deleteProducts(Product.id) : ""
    );
    if (this.props.selectAllChecked === true) {
      this.props.selectAllProducts();
    }
    this.toggleAction();
  }

  handleSelectAll = () => {
    this.props.selectAllProducts();
  };

  toggleAction = () => {
    this.setState({
      actionMenu: !this.state.actionMenu
    });
  };

  toggleFilter = () => {
    this.setState({
      filterMenu: !this.state.filterMenu
    });
  };

  render() {
    return (
      <div className="productOptions">
        <div className="selectBox" onClick={this.handleSelectAll}>
          <div className="selectProductContOpt">
            <div className="selectProductBackOpt">
              <input
                className="selectProductBoxOpt"
                type="checkbox"
                name="Select All"
                checked={this.props.selectAllChecked}
                onChange={this.props.selectAllProducts}
                onClick={this.handleSelectAll}
              />
              <span
                className={
                  this.props.selectAllChecked ? "selectProductCheckOpt" : ""
                }
              />
            </div>
          </div>
          <div className="selectText">
            <h2>Select All</h2>
          </div>
        </div>
        <div className="filterBoxFrame">
          <div className="filterBox" onClick={this.toggleFilter}>
            <img src={Filter} alt="Filter" title="Filter" />
            <div className="actionText">
              <h2>Filter</h2>
            </div>
          </div>
          {this.state.filterMenu ? (
            <div className="filterBoxOptions">
              <div className="filterSearchItem">
                <input type="search" name="" placeholder="Keyword" id="" />
              </div>
              <div className="filterSortTypes">
                <div className="filterSortAsc">
                  <div className="filterAscImg">
                    <img src={Asc} alt="Ascending" title="Ascending" />
                  </div>
                </div>
                <div className="filterSortDesc">
                  <div className="filterDescImg">
                    <img src={Desc} alt="Descending" title="Descending" />
                  </div>
                </div>
              </div>
              <div className="filterSortPrice">
                <div className="filterSortPriceCover">
                  <h2>Price</h2>
                </div>
              </div>
              <div className="filterSortCategory">
                <div className="filterSortCategoryCover">
                  <h2>Category</h2>
                </div>
              </div>
              <div className="filterSortUnits">
                <div className="filterSortUnitsCover">
                  <h2>Units Available</h2>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="actionBoxFrame">
          <div className="actionBox" onClick={this.toggleAction}>
            <img src={Actions} alt="Actions" title="Actions" />
            <div className="actionText">
              <h2>Actions</h2>
            </div>
          </div>
          {this.state.actionMenu ? (
            <div className="actionBoxOptions">
              <div
                className="actionDeleteSelect"
                onClick={this.handleDeleteProducts.bind(this)}
              >
                <h2>Delete Selected</h2>
              </div>
              <div className="actionItemSelect">
                <h2>Apply Discount</h2>
              </div>
              <div className="actionItemSelect">
                <h2>Change Category</h2>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="AddProdBtn">
          <img src={Add} alt="Add" title="Add" />
          <div className="AddProdText">
            <h2>Add Product</h2>
          </div>
        </div>
        <div className="AddProdCatBtn">
          <img src={Add} alt="Add" title="Add" />
          <div className="AddProdCatText">
            <h2>Add Product Category</h2>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectAllChecked: state.products.selectAllChecked,
  products: state.products.products
});

export default connect(
  mapStateToProps,
  { selectAllProducts, deleteProducts, getProducts }
)(Options);
