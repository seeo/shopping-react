import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';

/* let App.jsx be the parent. Search, Product and Carts shall be the children components */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
    };
  }

  render() {
    return (
      <React.Fragment>
        <Form />
        Welcome.
        <Counter message={this.state.message} />
      </React.Fragment>
    );
  }
}

export default hot(module)(App);