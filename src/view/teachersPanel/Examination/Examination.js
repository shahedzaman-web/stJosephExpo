import {  FlatList } from 'native-base';
import React from 'react';
import colors from '../../../theme/colors';
import data from './data';
import ExaminationCard from './ExaminationCard';
import ExaminationHeader from './ExaminationHeader';

const Examination = () => {
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
        <ExaminationCard item={item} index={index} />
      )}
      keyExtractor={item => item.roll.toString()}
      ListHeaderComponent={<ExaminationHeader />}
    />
    );
};

export default Examination;