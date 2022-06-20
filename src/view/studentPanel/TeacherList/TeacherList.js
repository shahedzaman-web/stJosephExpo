import {Box, FlatList} from 'native-base';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppHeader from '../../../components/AppHeader';
import colors from '../../../theme/colors';
import data from './data';
import TeacherCard from './TeacherCard';

const TeacherList = () => {
  return (
    <Box flex={1} safeArea>
      <AppHeader title="Teacher" />
      <FlatList
        mt={hp('3%')}
       
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        bg={colors.primaryLight}
        data={data}
        renderItem={({item, index}) => (
          <TeacherCard item={item} index={index} />
        )}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};

export default TeacherList;
