import React from 'react';
import isIOSTheme from '@shopgate-ps/pwa-extension-kit/env/helpers/isIOSTheme';
import AccountItem from '../../components/AccountItem';
import MoreMenuItem from '../../components/MoreMenuItem';
import { showMyPointsLink } from '../../config';

export default props => (
  <AccountItem
    {...props}
    show={showMyPointsLink && isIOSTheme()}
    Item={MoreMenuItem}
  />);
