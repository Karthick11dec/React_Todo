const Form = ({ getInput, input, addItemHandler }) => {
	return (
		<div className='form d-flex justify-content-center'>
			<div className='card'>
				<div className='card-body'>
						<div className='row '>
							<div className='col-10'>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										id='inputTodo'
										placeholder='Add Item '
										value={input}
										onChange={(e)=>{getInput(e.target.value)}}
									/>
								</div>
							</div>
							<div className='col-2 d-flex justify-content-center'>
								<button onClick={addItemHandler} className='btn btn-primary addBtn'>
									Add
								</button>
							</div>
						</div>
				</div>
			</div>
		</div>
	);
};

export default Form;