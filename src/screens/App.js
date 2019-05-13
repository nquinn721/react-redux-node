import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getTodos } from "redux/actions/todo.action";

import "./App.css";

class App extends Component {
  componentWillMount() {
    console.log("mount");
    this.props.getTodos();
  }
  render() {
    const {
      todo: { todos = [] }
    } = this.props;
    console.log(todos);
    return (
      <div className="App">
        <main>
          {todos.map((v, i) => (
            <div key={i}>{v.title}</div>
          ))}
        </main>
      </div>
    );
  }
}

export default connect(
  ({ todo }) => ({ todo }),
  dispatch => bindActionCreators({ getTodos }, dispatch)
)(App);
