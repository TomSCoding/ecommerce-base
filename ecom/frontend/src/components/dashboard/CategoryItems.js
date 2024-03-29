import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import "./../style/dashboard.css";

import { getUserCountries } from "../../actions/dashboard";
import { Fragment } from "react";

class CategoryItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  static propTypes = {
    getUserCountries: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getUserCountries();
    if (this.props.auth.token != null) {
      this.interval = setInterval(() => this.props.getUserCountries(), 5000);
    } else {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div className="salesGraphBaseContainerRight">
          <h4>Customers Per Country</h4>
          <div className="salesGraphSalesContCountry">
            <Fragment>
              {this.props.countries.map((Country) => (
                <div className="salesGraphSalesBoxCont">
                  <div className="salesGraphSalesInnerCont">
                    <h3 className="salesGraphSalesInnerContCountry">
                      {Country.country}
                    </h3>
                    <h3 className="salesGraphSalesInnerContNumber">
                      {Country.user_number}
                    </h3>
                  </div>
                </div>
              ))}
            </Fragment>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countries: state.dashboard.countries,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getUserCountries,
})(CategoryItems);
