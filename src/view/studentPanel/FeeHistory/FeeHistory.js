import {Box, FlatList} from 'native-base';
import React from 'react';
import AppHeader from '../../../components/AppHeader';
import colors from '../../../theme/colors';
import data from './data';
import FeeHistoryCard from './FeeHistoryCard';

const FeeHistory = () => {
  return (
    <Box flex={1} safeArea>
      <AppHeader title="Fee History" />
      <FlatList
        mt={'6'}
        data={data}
        renderItem={({item, index}) => (
          <FeeHistoryCard item={item} index={index} />
        )}
        keyExtractor={index => index.toString()}
        showsVerticalScrollIndicator={false}
        bg={colors.primaryLight}
        borderTopLeftRadius={'30'}
        borderTopRightRadius={'30'}
      />
    </Box>
  );
};

export default FeeHistory;
