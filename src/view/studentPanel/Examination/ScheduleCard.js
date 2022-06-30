import {Box, HStack, Text, VStack} from 'native-base';
import React from 'react';

import colors from '../../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';

import {FontAwesome } from '@expo/vector-icons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import bgCardColor from '../../../theme/bgCardColor';
import bgCardLighterColor from '../../../theme/bgCardLighterColor';
import moment from 'moment';
const ScheduleCard = ({item, index}) => {
  const {
    date,
    employeeName,
    endTime,
    hall,
    practicalFullMark,
    practicalPassMark,
    startTime,
    subjectName,
    writtenFullMark,
    writtenPassMark,
  } = item;
  return (
    <Box
      w={wp('94%')}
      h={hp('32%')}
      my={'2'}
      borderRadius={'6'}
      p={'2'}
      borderLeftWidth={'10'}
      shadow={'3'}
      bg={bgCardLighterColor[index]}
      alignSelf="center"
      borderLeftColor={bgCardColor[index]}>
      <Text bold fontSize="lg" color={bgCardColor[index]}>
        {subjectName}
      </Text>
      <HStack alignItems={'center'} justifyContent={'space-between'} my="1">
        <HStack>
          <Entypo name="time-slot" size={24} color={colors.darkGary} />
          <Text ml="1" bold color={colors.gray}>
            {startTime} - {endTime}
          </Text>
        </HStack>
        <HStack>
          <FontAwesome name="calendar" size={24} color={colors.darkGary} />
          <Text ml="2" bold color={colors.gray}>
            {moment(date).format('MMMM Do YYYY')}
          </Text>
        </HStack>
      </HStack>

      <VStack my="1" >
        <Text bold color={colors.gray}>
          Written Full Marks : {writtenFullMark}
        </Text>
        <Text bold color={colors.gray}>
          Written Passing Marks : {writtenPassMark}
        </Text>
      </VStack>
      <VStack my="1" >
        <Text bold color={colors.gray}>
          Practical Full Marks : {practicalFullMark}
        </Text>
        <Text bold color={colors.gray}>
          Practical Passing Marks : {practicalPassMark}
        </Text>
      </VStack>
      <VStack my="1" >
        <Text bold color={colors.gray}>
          INVIGILATOR: {employeeName}
        </Text>
      </VStack>
      <Text bold color={colors.gray}>
        Hall: {hall}
      </Text>
    </Box>
  );
};

export default ScheduleCard;
