import React from 'react'


const SearchBox = ({searchChange}) => {

	return (
		<div className = 'pa2'>
			<input 
			className = 'pa3 ba b--green bg lightest-blue' 
			type = 'text' 
			align = 'center' 
			placeholder = 'RoboName'
			onChange= {searchChange}
			/>			
		</div>
	); //return
}


export default SearchBox;