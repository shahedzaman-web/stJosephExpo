import {Box, FlatList} from 'native-base';
import React from 'react';
import AppHeader from '../../../components/AppHeader';
import colors from '../../../theme/colors';
import StudentCard from './StudentCard';
import StudentHeader from './StudentHeader';
import data from './data';
const StudentDetails = () => {
  return (
    <Box flex={1}>
      <AppHeader title="Student Details" />
      <FlatList
       
        mt={'6'}
        px="3"
        showsVerticalScrollIndicator={false}
        bg={colors.primaryLight}
        borderTopLeftRadius={'30'}
        borderTopRightRadius={'30'}
        w="100%"
        data={data}
        renderItem={({item, index}) => (
          <StudentCard item={item} index={index} />
        )}
        keyExtractor={item => item.name}
        ListHeaderComponent={<StudentHeader />}
      />
    </Box>
  );
};

export default StudentDetails;
