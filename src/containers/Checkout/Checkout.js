import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSumamry';
import ContactData from '../Checkout/ContactData//ContactData';

class Checkout extends Component {

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  } 

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    let summary = <Redirect to="/" />
    console.log("checkout ings", this.props.ings)
    if(this.props.ings) {
      summary = (
        <div>
          <CheckoutSummary
            ingredients={this.props.ings} 
            checkoutCancel={this.checkoutCancelHandler}
            checkoutContinue={this.checkoutContinueHandler} />
          <Route 
            path={this.props.match.path + '/contact-data/'} 
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients  
  }
}

export default connect(mapStateToProps, null)(Checkout);