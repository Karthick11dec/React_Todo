const TodoItem = ({ item, deleteHandler, index, completeHandler, editHandler }) => {

	return (
		<div className='todo-item '>
			<div>
				<div className='row px-3'>
					<div className='col col-1'>
						<i className='fas fa-check text-primary' onClick={() => completeHandler(index)}></i>
					</div>
					<div className='col col-9'>
						<p className='todoItem' onClick={() => completeHandler(index)}>
							{item}
						</p>
					</div>
					<div className='col col-1'>
						<i className='fas fa-pencil-alt text-warning' onClick={() => editHandler(index)}></i>
					</div>
					<div className='col col-1'>
						<i className='fas fa-trash-alt text-danger' onClick={() => deleteHandler(index)}></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoItem;