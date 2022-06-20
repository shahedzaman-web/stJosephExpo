import FontAwesome from 'react-native-vector-icons/FontAwesome';

import React from 'react'
import colors from '../../../theme/colors';
const profileData = [
  {
    title: 'Pending Leave Applications',
    count: '3',
    icon: <FontAwesome name='tasks' size={36} color={colors.white} />,
  },
  {
    title: 'Events',
    count: '3',
    icon: <FontAwesome name='calendar' size={36} color={colors.white} />,
  },
  {
    title: 'Attendance Status',
    count: '55/70',
    icon: <FontAwesome name='bar-chart' size={36} color={colors.white} />,
  },
  {
    title: 'Payroll',
    count: '1 month',
    icon: <FontAwesome name='money' size={36} color={colors.white} />,
  },
];

export default profileData;