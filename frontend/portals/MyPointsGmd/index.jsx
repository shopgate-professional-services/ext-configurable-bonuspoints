import React from 'react';
import { NavDrawer } from '@shopgate/engage/components';
import isIOSTheme from '@shopgate-ps/pwa-extension-kit/env/helpers/isIOSTheme';
import AccountItem from '../../components/AccountItem';

import { showMyPointsLink } from '../../config';

export default props => (
  <AccountItem
    {...props}
    show={showMyPointsLink && !isIOSTheme()}
    Item={NavDrawer.Item}
  />);
