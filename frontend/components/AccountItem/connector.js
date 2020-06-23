import { connect } from 'react-redux';
import { isUserLoggedIn } from '@shopgate/engage/user';
import { openMyPointsPage } from './actions';

/**
 * Maps state to props.
 * @param {Object} state State.
 * @returns {Object}
 */
const mapStateToProps = state => ({
  isUserLoggedIn: isUserLoggedIn(state),
});

/**
 * Maps dispatch to props.
 * @param {function} dispatch Dispatch.
 * @param {string} replacement Part of url to be replaced with replacement
 * @returns {Object}
 */
const mapDispatchToProps = {
  openMyPointsPage,
};

export default connect(mapStateToProps, mapDispatchToProps);
