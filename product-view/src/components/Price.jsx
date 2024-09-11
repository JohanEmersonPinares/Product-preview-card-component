import PropTypes from 'prop-types';
import "../App.scss";

function Price({ price, oldPrice }) {
  return (
    <div className='price'>
      <p className='price__current'>{price}</p>
      <p className='price__old'>{oldPrice}</p>
    </div>
  );
}
Price.propTypes = {
  price: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
};

export default Price;
