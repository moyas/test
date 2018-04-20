/*
* @Author: Frank
* @Date:   2018-04-19 16:48:08
* @Last Modified by:   Frank
* @Last Modified time: 2018-04-20 13:13:34
*/


import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.less';

import {addTodo} from '../actions.js';


import {PropTypes} from 'prop-types'

class AddTodo extends Component {

  constructor(props, context) {
    super(props, context);

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      value: ''
    };
  }

  onSubmit(ev) {
    ev.preventDefault();

    const inputValue = this.state.value;
    if (!inputValue.trim()) {
     return;
    }

    this.props.onAdd(inputValue);
    this.setState({value: ''});
  }

  onInputChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" onChange={this.onInputChange} value={this.state.value} />
          <button className="add-btn" type="submit">
            添加
          </button>
        </form>
      </div>
    )
  }
}

AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    }
  }
};

export default connect(null, mapDispatchToProps)(AddTodo);