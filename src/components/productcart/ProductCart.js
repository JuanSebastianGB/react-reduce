import { PropTypes } from 'prop-types';

const ProductCart = ({ data, delFromCart }) => {
  const { id, name, price, quantity } = data;
  return (
    <div style={{ borderBottom: 'thin solid gray' }}>
      <h4>{name}</h4>
      <h5>
        ${price}.00 x {quantity} = ${price * quantity}.00
      </h5>
      <button onClick={() => delFromCart(id)}>Delete One</button>
      <button onClick={() => delFromCart(id, true)}>Delete All</button>
    </div>
  );
};

/* A validation of the props that are passed to the component. */
ProductCart.propTypes = {
  data: PropTypes.object.isRequired,
  delFromCart: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
};

export default ProductCart;
