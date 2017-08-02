import React from 'react';
import ReactDOM from 'react-dom';

class VisibleTodoList extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){
		// const lists = {'todolists' : ["one", "two"] };

		return (
			<div>
				{this.props.items.map((item,i) => <li key={i}>{item}</li>)}
			</div>
		)
	}



}

export default VisibleTodoList;