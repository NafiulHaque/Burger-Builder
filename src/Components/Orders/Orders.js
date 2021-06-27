import { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../redux/actionCreators";

const mapStateTopProps = state => {
    return {
        orders: state.orders,
        orderLoading: state.orderLoading,
        orderErr: state.orderErr,
    }
}


const mapDispatchToProps = dispactch => {
    return {
        fetchOrders: () => dispactch(fetchOrders()),
    }
}


class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrders();
    }

    componentDidUpdate() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <p>Orders</p>
            </div>
        )
    }

}

export default connect(mapStateTopProps, mapDispatchToProps)(Orders);