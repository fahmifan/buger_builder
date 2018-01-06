import React, { Component } from 'react';
import axios from '../../../axios-order';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false
  }

  orderHandler = (evt) => {
    evt.preventDefault();
    this.setState({loading: true})
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'fahmi irfan',
        address: {
          street: 'Test street 1',
          zipCode: '51152',
          country: 'Indonesia'
        }
      },
      email: 'test@email.com',
      deliveryMethod: 'fatest'
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false});
      })

  }

  render() {
    let form = (
      <form>
          <input type="text" name="name" placeholder="Your name"/> <br/>
          <input type="text" name="email" placeholder="Your email"/> <br/>
          <input type="text" name="street" placeholder="Street"/> <br/>
          <input type="text" name="postalCode" placeholder="Postal Code"/> <br/>
          <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if(this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;