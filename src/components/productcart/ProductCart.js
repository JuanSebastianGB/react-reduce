import { PropTypes } from 'prop-types';

const ProductCart = ({ data }) => {
  const { name } = data;
  return <div>{name}</div>;
};

ProductCart.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ProductCart;
