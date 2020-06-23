import { isUserLoggedIn } from '@shopgate/engage/user';
import { historyPush, logger } from '@shopgate/engage/core';
import { fetchCheckoutUrl, FETCH_CHECKOUT_URL_TIMEOUT } from '@shopgate/engage/checkout';
import { myPointsPathPartReplacement, checkoutUrlPathPartToReplace } from '../../config';

/**
 * Fetches checkout URL changes it to the URL of my points page and redirects to it.
 * @return {null}
 */
export const openMyPointsPage = () => (dispatch, getState) => {
  // Check if user is logged in.
  if (!isUserLoggedIn(getState())) {
    logger.warn('Will not fetch MyPoints Page URL because user is not logged in');
    return;
  }

  const started = Date.now();
  dispatch(fetchCheckoutUrl())
    .then((url) => {
      // Forget it if it took more than PWA allows. User is already back.
      if (Date.now() - started > FETCH_CHECKOUT_URL_TIMEOUT) {
        return;
      }
      const linkUrl = url.replace(checkoutUrlPathPartToReplace, myPointsPathPartReplacement);

      // Open the checkout.
      dispatch(historyPush({ pathname: linkUrl }));
    })
    .catch(error => logger.error('Error fetching checkout url', error));
};
