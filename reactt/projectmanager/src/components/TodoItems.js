import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItems extends Component {

  render() {
    return (
      <li>
        <i>{this.props.todo.title}</i>
      </li>
    );
  }
}

 //className="testTodo" - line 8
/*https://facebook.github.io/react/docs/typechecking-with-proptypes.html*/
TodoItems.propTypes = {
  todo: PropTypes.object
}

/*render's return can only have one root element '*/
export default TodoItems;
