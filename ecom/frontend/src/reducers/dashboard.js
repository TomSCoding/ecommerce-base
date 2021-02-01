import {
  GET_DASHBOARD_STATISTICS,
  GET_DASHBOARD_SALES_GRAPH,
  GET_POPULAR_PRODUCTS,
} from "../actions/types.js";

const initalState = {
  monthly_sales: 0,
  revenue: 0,
  profit: 0,
  monthly_visitors: 0,
  new_customers: 0,
  all_customers: 0,
  options: {
    chart: {
      type: "line",
    },
    xaxis: {
      categories: [],
    },
  },
  series: [
    {
      name: "Sales",
      data: [],
    },
  ],
  popular_options: {
    chart: {
      height: 380,
      type: "bar",
    },
    xaxis: {
      categories: [],
    },
  },
  popular_series: [
    {
      data: [],
    },
  ],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_DASHBOARD_STATISTICS:
      return {
        ...state,
        monthly_sales: action.payload["monthly_sales"],
        revenue: action.payload["revenue"],
        profit: action.payload["profit"],
        monthly_visitors: action.payload["monthly_visitors"],
        new_customers: action.payload["new_customers"],
        all_customers: action.payload["all_customers"],
      };
    case GET_DASHBOARD_SALES_GRAPH:
      return {
        ...state,
        options: {
          chart: {
            type: "line",
          },
          xaxis: {
            categories: action.payload["dates"],
          },
        },
        series: [
          {
            name: "Sales",
            data: action.payload["sales"],
          },
        ],
      };
    case GET_POPULAR_PRODUCTS:
      return {
        ...state,
        popular_options: {
          chart: {
            height: 380,
            type: "bar",
          },
          xaxis: {
            categories: action.payload['product'],
          },
        },
        popular_series: [
          {
            data: action.payload['amount_sold'],
          },
        ],
      };
    default:
      return state;
  }
}
