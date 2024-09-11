import iconCart from '../assets/icon-cart.svg';

import "../App.scss";

function Button() {
	return (
		<button className='btn'>
			<img
				className='btn__icon'
				src={iconCart}
				alt='Cart icon on the button'
			/>
			Add to Cart
		</button>
	);
}

export default Button;
