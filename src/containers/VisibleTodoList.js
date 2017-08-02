import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../component/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = state => {
  console.log("from container state "+JSON.stringify(state))
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }

}

const mapDispatchToProps = dispatch => {
  console.log("dispatch ")
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },

    rmk: id => {
      dispatch(toggleTodo(id))
    }
  }
}



const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList