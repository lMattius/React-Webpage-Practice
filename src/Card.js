import React from 'react';

const Card = ({id, name , email}) => {

	return (
		<div className = "bg-light-green dib br3 pa3 ma2 grow shadow-5">
			<img alt = 'profile' src = {`http://robohash.org/${id}?200x200`} /> 
			<div align = 'center'>
			 	<h3>{name}</h3>
			 	<h4>{email}</h4>
			</div>
		</div>
	);
}

export default Card;