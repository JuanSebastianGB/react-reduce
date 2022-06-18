import PropTypes from 'prop-types';

const ProductItem = ({ data, addToCart, delFromCart, clearCart }) => {
  const { id, name, price } = data;
  return (
    <div style={{ border: 'thin solid gray', padding: '1rem' }}>
      <h4>{name}</h4>
      <h5>{price}</h5>
      <button onClick={() => addToCart(id)}>+</button>
      <button onClick={delFromCart}>-</button>
      <button onClick={clearCart}>Clear</button>
    </div>
  );
};

/* A way to validate the props that are passed to the component. */
ProductItem.propTypes = {
  data: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
  delFromCart: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
};
export default ProductItem;
