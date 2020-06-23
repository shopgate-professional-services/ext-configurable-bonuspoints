import React from 'react';
import { Icon } from '@shopgate/engage/components';
import { navDrawerIcon } from '../../config';

/**
 * The PointsIcon component.
 * @param {Object} props The icon component properties.
 * @returns {JSX}
 */
const PointsIcon = props => navDrawerIcon && <Icon content={navDrawerIcon} viewBox="0 0 24 24" {...props} />;

export default PointsIcon;
