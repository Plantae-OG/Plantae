import React from "react";
import { connect } from "react-redux";
import { fetchSingleOrder } from "../store/singleOrder";

export class SingleOrder extends React.Component {
  componentDidMount() {
    const userId = this.props.auth.id;
    const orderId = this.props.match.params.orderId;
    this.props.getOrder(userId, orderId);
  }

  render() {
    const orderId = this.props.order.id || "";
    const price = this.props.order.totalPrice || "";
    const status = this.props.order.orderStatus || "";
    return (
      <div>
        <h3>ORDER {orderId} </h3>
        <p>
          TOTAL PRICE: {price} <br />
          ORDER STATUS: {status}
          <br />
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.singleOrder,
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getOrder: (userId, orderId) => dispatch(fetchSingleOrder(userId, orderId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleOrder);
