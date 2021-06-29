import { Component } from "react";
import { Button, ModalBody, Modal } from "reactstrap";
import { resetIngredients } from "../../../redux/actionCreators";
import axios from "axios";

import Spinner from "../../Spinner/Spinner";


import { connect } from "react-redux";

const mapStateTopProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.totalPrice,
        userId: state.userId,
        token: state.token,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetIngredients: () => dispatch(resetIngredients()),
    }
}

class Checkout extends Component {

    state = {
        values: {
            deliveryAddress: "",
            phone: "",
            paymentType: "Cash on Delivery",
        },
        isLoading: false,
        isModalOpen: false,
        modalMsg: "",
    }

    goBack = () => {
        this.props.history.goBack("/");
    }

    inputChangeHandler = (e) => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value,
            }
        })
    }

    submitHandler = () => {

        this.setState({ isLoading: true })
        const order = {
            ingredients: this.props.ingredients,
            customer: this.state.values,
            price: this.props.totalPrice,
            orderTime: new Date(),
            userId: this.props.userId,
        }
        axios.post("https://burger-builder-13ccf-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json?auth=" + this.props.token, order)
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalMsg: "Order Placed Successfully",
                    })
                    this.props.resetIngredients();
                } else {
                    this.setState({
                        isLoading: false,
                        isModalOpen: true,
                        modalMsg: "Something went wrong! Order Again ",

                    })
                }
            })
            .catch(err => {
                this.setState({
                    isLoading: false,
                    isModalOpen: true,
                    modalMsg: "Order Placed Error ",
                })
            })

    }

    render() {
        let form = (<div>
            <h4 style={{
                border: "1px solid grey",
                boxShadow: "1px 1px #888888",
                borderRadius: "5px",
                padding: "20px",
            }}>Payment: {this.props.totalPrice} BDT</h4>
            <form style={{
                border: "1px solid grey",
                boxShadow: "1px 1px #888888",
                borderRadius: "5px",
                padding: "20px",
            }}>
                <textarea name="deliveryAddress"
                    value={this.state.values.deliveryAddress}
                    className="form-control mb-2"
                    placeholder="Your Address"
                    onChange={(e) => this.inputChangeHandler(e)}
                ></textarea>
                <input name="phone" className="form-control mb-2"
                    value={this.state.values.phone}
                    placeholder="Your Phone Number"
                    onChange={(e) => this.inputChangeHandler(e)} />
                <select name="paymentType" className="form-control mb-2"
                    value={this.state.values.paymentType}
                    onChange={(e) => this.inputChangeHandler(e)}
                >
                    <option value="Cash on Delivery"> Chash on Delivery</option>
                    <option value="Bkash">Bkash</option>
                </select>
                <Button style={{ background: "#000" }}
                    disabled={!this.props.purchasable}
                    onClick={this.submitHandler}
                >Place Order </Button>
                <Button className="m-2" color="danger" onClick={this.goBack}>Cencel</Button>
            </form>

        </div>
        )
        return (
            <div>
                {this.state.isLoading ? <Spinner /> : form}
                <Modal isOpen={this.state.isModalOpen} onClick={this.goBack}>
                    <ModalBody>
                        <p>{this.state.modalMsg}</p>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}


export default connect(mapStateTopProps, mapDispatchToProps)(Checkout);