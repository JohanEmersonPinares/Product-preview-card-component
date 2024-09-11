import PropTypes from 'prop-types';
import "../App.scss";

function Card({ children }) {
  return (
    <div className='card'>
      <figure className='card__header'>
        <div
          className='img'
          role='img'
          aria-label='Bottle of perfume'
        ></div>
      </figure>

      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;

