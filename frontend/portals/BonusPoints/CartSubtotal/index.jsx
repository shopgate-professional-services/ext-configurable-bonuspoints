import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { i18n } from '@shopgate/engage/core';
import { CartTotalLine } from '@shopgate/engage/components';
import connect from './connector';
import { styling } from '../../../config';

const { cart = {} } = styling || {};
const styles = {
  container: css(cart),
};

/**
 * @returns {JSX}
 */
const BonusPointsCartSubtotal = ({ points }) => {
  if (points === null) {
    return null;
  }

  return (
    <div className={styles.container}>
      <CartTotalLine>
        <CartTotalLine.Label label="configurable_bonuspoints.cartSubTotal" />
        <CartTotalLine.Amount amount={i18n.number(points, 0)} />
      </CartTotalLine>
    </div>
  );
};

BonusPointsCartSubtotal.propTypes = {
  points: PropTypes.number,
};

BonusPointsCartSubtotal.defaultProps = {
  points: null,
};

export default connect(BonusPointsCartSubtotal);
