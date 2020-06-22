import React from 'react';
import PropTypes from 'prop-types';
import I18n from '@shopgate/pwa-common/components/I18n';
import connect from './connector';
import PointsIcon from './PointsIcon';

/**
 * OrderHistory
 * @param {Object} props Props
 * @returns {JSX}
 */
const AccountItem = (props) => {
  const {
    isUserLoggedIn,
    Item,
    show,
    openMyPointsPage,
  } = props;

  if (!show || !isUserLoggedIn) {
    return null;
  }
  return (
    <Item
      label="configurable_bonuspoints.myPoints"
      icon={PointsIcon}
      onClick={openMyPointsPage}
    >
      <I18n.Text string="configurable_bonuspoints.myPoints" />
    </Item>
  );
};

AccountItem.propTypes = {
  isUserLoggedIn: PropTypes.bool.isRequired,
  Item: PropTypes.func.isRequired,
  openMyPointsPage: PropTypes.func,
  show: PropTypes.bool,
};

AccountItem.defaultProps = {
  openMyPointsPage: () => {},
  show: true,
};

export default connect(AccountItem);
