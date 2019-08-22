import React, { Component, Fragment } from "react";
import "./../style/productlist.css";

//Displaying Products
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts, deleteProducts } from "../../actions/products";

//Images
import Case from "./../style/images/case.jpg";

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selectedProducts: []
    };
  }

  static propTypes = {
    products: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired,
    deleteProducts: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getProducts();
  }

  handleSelectChange(e) {
    console.log(this.props.selectAllChecked);
    if (this.state.selectedProducts.indexOf(e) < 0) {
      this.setState({
        selectedProducts: [...this.state.selectedProducts, e]
      });
      console.log("Added = " + e);
    } else {
      var array = [...this.state.selectedProducts]; // make a separate copy of the array
      var index = array.indexOf(e);
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({ selectedProducts: array });
      }
    }
  }

  handleDeleteProducts(e) {
    if (this.state.selectedProducts.length > 0) {
      // Loops through each product id selected by user
      this.state.selectedProducts.forEach(Product => {
        console.log(Product.id);
        this.props.deleteProducts(Product.id);
      });

      // Clears selected list after items are deleted
      this.setState({
        selectedProducts: []
      });
    }
  }
  render() {
    const productMapList = this.props.products ? (
      <div className="plBack">
        <div className="col-lg-12">
          <Fragment>
            {this.props.products.map(Product => (
              <div className="productBack" key={Product.id}>
                <div className="selectProductCont">
                  <div className="selectProductBack">
                    <input
                      className="selectProductBox"
                      type="checkbox"
                      name={Product.product_name}
                      id={Product.id}
                      onClick={this.handleSelectChange.bind(this, Product)}
                    />
                    <span className="selectProductCheck" />
                  </div>
                </div>
                <div className="productImageBox">
                  <img src={Case} alt="Case" title="Case" />
                </div>
                <div className="productDescBack">
                  <div className="productDescTop">
                    <div className="productDescTitle">
                      <h3>{Product.product_name}</h3>
                    </div>
                    <div className="productColor">
                      <h3 className="productBold">Color</h3>
                      <h3 className="productTxt">{Product.color}</h3>
                    </div>
                    <div className="productQuant">
                      <h3 className="productBold">Quantity Per Unit</h3>
                      <h3 className="productTxt">
                        {Product.quantity_per_unit}
                      </h3>
                    </div>
                  </div>
                  <div className="productDescBottom">
                    <div className="productPrice">
                      <div className="productPriceBox">
                        <label className="priceCurrencySign">€</label>
                        <label className="priceAmount">
                          {Product.unit_price}
                        </label>
                      </div>
                    </div>
                    <div className="productDiscountCont">
                      <h3 className="productBold">Discount</h3>
                      <h3 className="productDiscActive">Active</h3>
                    </div>
                    <div className="productOriginalPrice">
                      <h3 className="productBold">Original Price</h3>
                      <h3 className="productTxt">{Product.unit_price}</h3>
                    </div>
                    <div className="productColor">
                      <h3 className="productBold">Size</h3>
                      <h3 className="productTxt">{Product.size}</h3>
                    </div>
                    <div className="productQuant">
                      <h3 className="productBold">Category</h3>
                      <h3 className="productTxt">{Product.category_id}</h3>
                    </div>
                  </div>
                </div>
                <div className="productDivLine" />
                <div className="productDescBack">
                  <div className="productDescTop">
                    <div className="productColor">
                      <h3 className="productBold">Units Available</h3>
                      <h3 className="productTxt">{Product.units_in_stock}</h3>
                    </div>
                    <div className="productColor">
                      <h3 className="productBold">MSRP</h3>
                      <h3 className="productTxt">€{Product.msrp}</h3>
                    </div>
                  </div>
                  <div className="productDescBottom">
                    <div className="productColor">
                      <h3 className="productBold">Units On Order</h3>
                      <h3 className="productTxt">{Product.units_on_order}</h3>
                    </div>
                    <div className="productColor">
                      <h3 className="productBold">Supplier</h3>
                      <h3 className="productTxt" />
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={this.props.deleteProducts.bind(this, Product.id)}
                    >
                      delete product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Fragment>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleDeleteProducts.bind(this)}
        >
          Delete Selected
        </button>
      </div>
    ) : (
      <div>
        <h2>Loading...</h2>
      </div>
    );
    return <div>{productMapList}</div>;
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  selectAllChecked: state.products.selectAllChecked
});

export default connect(
  mapStateToProps,
  { getProducts, deleteProducts }
)(ProductList);
