import {Box, Text} from 'native-base';
import React from 'react';
import colors from '../theme/colors';

export default function _renderItem(item) {
  return (
    <Box p="2" bg={colors.primary}>
      <Text color={colors.white}>{item.label}</Text>
    </Box>
  );
}
