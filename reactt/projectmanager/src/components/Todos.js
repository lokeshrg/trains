import React, { Component } from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        return(
          <TodoItems key={todo.title} todo={todo} />
        );
      });
    }

    return (
      <div className="todos">
        <h6> Latest Todos </h6>
        {todoItems}
      </div>
    );
  }
}

/*https://facebook.github.io/react/docs/typechecking-with-proptypes.html*/
Todos.propTypes = {
  todos: PropTypes.array
}

/*render's return can only have one root element '*/
export default Todos;
