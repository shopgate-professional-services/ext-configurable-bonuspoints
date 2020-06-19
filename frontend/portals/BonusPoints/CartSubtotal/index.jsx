import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
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
        <CartTotalLine.Amount amount={String(points)} />
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
