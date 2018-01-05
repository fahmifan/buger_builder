import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSumamry';

class Checkout extends Component {
  state = {
    ingredients: {}
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for(let param of query.entries()){
      ingredients[param[0]] = +param[1];
    }
    this.setState({ingredients: ingredients})
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  } 

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients} 
          checkoutCancel={this.checkoutCancelHandler}
          checkoutContinue={this.checkoutContinueHandler} />
      </div>
    );
  }
}

export default Checkout;