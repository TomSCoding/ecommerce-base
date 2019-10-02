import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import { Link } from "react-router-dom";
import "./../style/newcategory.css";
import TopRoute from "./TopRoute";

//Images
import Arrow from "./../style/images/return.png";
//Other imports
import { getCategory } from "../../actions/category";

export class NewCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    };
  }

  state = {
    categoryName: "",
    categoryDescription: ""
  };

  static propTypes = {
    category: PropTypes.array.isRequired,
    getCategory: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getCategory();
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { categoryName, categoryDescription } = this.state;
    const product = {
      categoryName,
      categoryDescription
    };
    //this.props.addTask(task);
    this.setState({
      categoryName: "",
      categoryDescription: ""
    });
  };
  render() {
    const { categoryName, categoryDescription } = this.state;
    return (
      <div className="NewCatBack">
        <div className="col-lg-12">
          <TopRoute />
          <div className="newCatTitle">
            <h3>New Category</h3>
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="newCatTopFields">
              <div className="newCatField">
                <input
                  className=""
                  type="text"
                  name="categoryName"
                  id="label-title"
                  placeholder="Category Name"
                  onChange={this.onChange}
                  value={categoryName}
                />
              </div>
              <div className="newCatField">
                <textarea
                  name="categoryDescription"
                  id="categoryDesc"
                  placeholder="Category Description"
                  onChange={this.onChange}
                  value={categoryDescription}
                />
              </div>
              <div className="newCatLeftButton">
                <Link to="/products"><button>Cancel</button></Link>
              </div>
              <div className="newCatRightButton">
                <button>Create Category</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  category: state.category.category
});

export default connect(
  mapStateToProps,
  {
    getCategory
  }
)(NewCategory);
