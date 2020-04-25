const ToDoItem = (props) => {
	const {id, task, done} = props.todo;
	return (
		<div>
			<label>
  			<input type="checkbox" name={task} onChange={props.handleChange.bind(this, {id: id})} checked={done} />
 				{task}
 			</label>
  		<hr />
  	</div>	
		)
}

export default hot(App);