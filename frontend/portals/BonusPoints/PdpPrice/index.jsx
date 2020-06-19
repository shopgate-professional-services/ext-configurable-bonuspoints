import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { themeConfig } from '@shopgate/engage';
import { useNavigation, withCurrentProduct } from '@shopgate/engage/core';
import { I18n, InfoOutlineIcon } from '@shopgate/engage/components';
import { infoPage, styling } from '../../../config';
import connect from './connector';

const { pdp = null } = styling || {};

const styles = {
  container: css({
    marginRight: 10,
    fontSize: '0.875rem',
    lineHeight: '0.875rem',
    color: themeConfig.colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...pdp,
  }).toString(),
  infoIcon: css({
    marginRight: 4,
    fontSize: '17px !important',
  }).toString(),
};

/**
 * @returns {JSX}
 */
const BonusPointsPdpPrice = ({ points }) => {
  const { push } = useNavigation();
  if (points === null) {
    return null;
  }

  return (
    <div
      aria-hidden
      {...infoPage && { onClick: () => push({ pathname: infoPage }) }}
      className={styles.container}
    >
      <InfoOutlineIcon
        className={styles.infoIcon}
        size={17}
      />
      <I18n.Text string="configurable_bonuspoints.product" params={{ points }} />
    </div>
  );
};

BonusPointsPdpPrice.propTypes = {
  points: PropTypes.number,
};

BonusPointsPdpPrice.defaultProps = {
  points: null,
};

export default withCurrentProduct(connect(BonusPointsPdpPrice));
