import {FlatList} from 'native-base';
import React from 'react';
import colors from '../../../theme/colors';
import AttendanceCard from './AttendanceCard';

import AttendanceHeader from './AttendanceHeader';
import data from './data';

const Attendance = () => {
  return (
    <FlatList
        flex={1}
     
      mt={'6'}
      px="3"
      showsVerticalScrollIndicator={false}
      bg={colors.primaryLight}
      borderTopLeftRadius={'30'}
      borderTopRightRadius={'30'}
      w="100%"
      data={data}
      renderItem={({item, index}) => (
        <AttendanceCard item={item} index={index} />
      )}
      keyExtractor={item => item.roll.toString()}
      ListHeaderComponent={<AttendanceHeader />}
    />
  );
};

export default Attendance;
