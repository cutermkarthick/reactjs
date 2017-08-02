import React from 'react';
import ReactDOM from 'react-dom';
import VisibleTodoList from '../component/VisibleTodoList';
import addTodo from '../actions';
import { connect } from 'react-redux';

class AddTodo extends React.Component {



		constructor(props) {
			super(props);
      this.state = {'todoname': '', 'todolists': ['one', 'two']}
			this.handlesubmit = this.handlesubmit.bind(this);
      this.handletodochange = this.handletodochange.bind(this);
			
		}


  	render() {
    return (
      <div>
        <h3>TODO</h3>
        <form onSubmit={this.handlesubmit}>
          <input name='todoname'  value={this.state.todoname} onChange={this.handletodochange} />
          <button>Add</button>
          <br/>
          <VisibleTodoList items={this.state.todolists}></VisibleTodoList>
          <span>{this.state.todoname}</span>
        </form>
      </div>
    );
  }
 

  handletodochange(event){
    this.setState({'todoname': event.target.value})
  }

  handlesubmit(event){

    event.preventDefault();

    let lists = this.state.todolists;
    let newtodo = this.state.todoname;

    this.setState((prevState) => ({
      todolists: lists.concat(newtodo),
      // todoname: '',
    }));


  }

}



function mapDispatchToProps(dispatch) {  
  console.log("mapdispatch")
  return {   }
}

export default connect(null, mapDispatchToProps)(AddTodo);  

// export default AddTodo;