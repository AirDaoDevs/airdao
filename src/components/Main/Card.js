import React from "react";
import windmills from "../assets/windmills.jpg";
const Card = () => {
	return (
		<div className='flex w-fit relative'>
			<img className='w-60 rounded-2xl' src={windmills} alt='' />
			<div className='flex flex-col items-end absolute -right-10 top-24'>
				<span>/01</span>
				<span>Backed by Carbon.</span>
			</div>
		</div>
	);
};

export default Card;
