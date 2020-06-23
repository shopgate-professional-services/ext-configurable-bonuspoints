import { connect } from 'react-redux';
import { getProductBonusPoints } from '../../../selectors';

/**
 * @param {Object} state .
 * @param {Object} props .
 * @returns {Object}
 */
const mapStateToProps = (state, props) => ({
  points: getProductBonusPoints(state, { productId: props.variantId || props.productId }),
});

export default connect(mapStateToProps);
