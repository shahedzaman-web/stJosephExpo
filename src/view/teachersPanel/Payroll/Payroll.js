import {Box, FlatList} from 'native-base';
import React from 'react';
import AppHeader from '../../../components/AppHeader';
import colors from '../../../theme/colors';
import data from './data';
import PayrollCard from './PayrollCard';

const Payroll = () => {
  return (
    <Box flex={1}>
      <AppHeader title="Payroll" />
      <FlatList
        mt={'6'}
        pt="4"
        data={data}
        renderItem={({item, index}) => (
          <PayrollCard item={item} index={index} />
        )}
        keyExtractor={item => item.month}
        showsVerticalScrollIndicator={false}
        bg={colors.primaryLight}
        borderTopLeftRadius={'30'}
        borderTopRightRadius={'30'}
      />
    </Box>
  );
};

export default Payroll;
