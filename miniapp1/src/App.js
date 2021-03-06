
import React from "react";
import { hot } from 'react-hot-loader/root';
import ToDoItem from './ToDoItem.js';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			todos: [
				{id: 0, task: "Take out trash", done: false},
				{id: 1, task: "Grocery shopping", done: false},
				{id: 2, task: "Groom dog", done: false},
				{id: 3, task: "Mow lawn", done: false},
				{id: 4, task: "Study", done: false}
			]
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(props, event) {
		let list = this.state.todos;
		let target = list[props.id];
		let parent = event.target.parentElement;
		target.done = !target.done;
		list[props.id] = target;

		target.done ? parent.classList.add("checked") : parent.classList.remove("checked")

		return this.setState(list)
	}

  render() {
    
    return (
    	<div className="todo-container">
    		<form>
	    		{this.state.todos.map(todo => {
	    			return (
	    				<ToDoItem key={todo.id} todo={todo} handleChange={this.handleChange} />
	    				)
	    		})}
	    	</form>	
    	</div>
    	)

  }
}

export default hot(App);



// ______________________________________________________________________________________




// import React from "react";
// import { hot } from 'react-hot-loader/root';


// class App extends React.Component {
// 	constructor(props){
// 		super(props)
// 		this.state = {
// 			todos: [
// 				{id: 0, task: "Take out trash", done: false},
// 				{id: 1, task: "Grocery shopping", done: false},
// 				{id: 2, task: "Groom dog", done: false},
// 				{id: 3, task: "Mow lawn", done: false},
// 				{id: 4, task: "Study", done: false}
// 			]
// 		}
// 		this.handleChange = this.handleChange.bind(this);
// 	}

// 	handleChange(event) {
// 		console.log(event.target.name)
// 		let list = this.state.todos;
// 		let target = list[event.target.id];
// 		target.done = !target.done;
// 		list[event.target.id] = target;

// 		return this.setState(list)
// 	}




//   render() {
    
//     return (
//     	<div className="todo-container">
//     		<form>
// 	    		{this.state.todos.map(todo => {
// 	    			return (
// 	    				<div key={todo.id}>
// 								<label>
// 					  			<input type="checkbox" id={todo.id} name={todo.task} onChange={this.handleChange} checked={todo.done} />
// 					 				{todo.task}
// 					 			</label>
// 					  		<hr />
//   						</div>	
// 	    				)
// 	    		})}
// 	    	</form>	
//     	</div>
//     	)

//   }
// }

// export default hot(App);

