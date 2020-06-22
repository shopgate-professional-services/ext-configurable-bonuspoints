import { connect } from 'react-redux';
import { getCartSubtotalBonusPoints } from '../../../selectors';

/**
 * @param {Object} state state
 * @returns {Object}
 */
const mapStateToProps = state => ({
  points: getCartSubtotalBonusPoints(state),
});

export default connect(mapStateToProps);
