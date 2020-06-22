import { createSelector } from 'reselect';
import { getSubTotal } from '@shopgate/engage/cart';
import { getProductDataById } from '@shopgate/engage/product';
import { conversionRate, rounding } from './config';

const roundFn = typeof Math[rounding] === 'function' ? Math[rounding] : Math.floor;

/** @returns {null|Number} */
export const getProductBonusPoints = createSelector(
  getProductDataById,
  (productData) => {
    if (!productData) {
      return null;
    }

    const { price: { unitPrice } } = productData;

    return roundFn(unitPrice * conversionRate);
  }
);

/** @returns {null|Number} */
export const getCartSubtotalBonusPoints = createSelector(
  getSubTotal,
  subTotal => roundFn(subTotal * conversionRate)
);

