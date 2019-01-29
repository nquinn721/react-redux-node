import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData } from 'redux/actions/lob.action';

import './App.css';

class App extends Component {
  render() {
    const hi = 'hi';
    return (
      <div className="App">
        <header className="App-header">
        Welcome {this.props.lob.lob}
        <div>
        <button onClick={this.props.getData}>Click me</button>
          </div>

        </header>
      </div>
    );
  }
}

export default connect(
  ({lob}) => ({lob}),
  (dispatch) => (bindActionCreators({getData}, dispatch))
)(App);
