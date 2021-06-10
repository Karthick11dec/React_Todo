const Filter = ({ filterHandler }) => {
	return (
		<div className='filter'>
			<div className='form-group'>
				<label htmlFor='filter'>Filter:</label>
				<select className='form-control' id='filter' onChange={filterHandler}>
					<option value='active'>active</option>
					<option value='completed'>completed</option>
					<option value='deleted'>deleted</option>
				</select>
			</div>
		</div>
	);
};

export default Filter;