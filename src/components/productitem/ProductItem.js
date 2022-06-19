import PropTypes from 'prop-types';

const ProductItem = ({ data, addToCart }) => {
  const { id, name, price } = data;
  return (
    <div style={{ border: 'thin solid gray', padding: '1rem' }}>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={() => addToCart(id)}>+</button>
    </div>
  );
};

/* A way to validate the props that are passed to the component. */
ProductItem.propTypes = {
  data: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};
export default ProductItem;
