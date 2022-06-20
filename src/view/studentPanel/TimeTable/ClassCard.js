import {Box, HStack, Text, VStack} from 'native-base';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../theme/colors.js';
import bgCardColor from '../../../theme/bgCardColor.js';
import bgCardLighterColor from '../../../theme/bgCardLighterColor.js';

const ClassCard = ({item, index}) => {
  const {startTime, endTime, subjectName, employeeName, room} = item;
  return (
    <Box
      alignSelf={'center'}
      alignItems={'center'}
      justifyContent={'center'}
      w={wp('92%')}
      h={hp('13%')}
      my={'2'}
      borderRadius={'md'}
      borderLeftWidth={wp('2%')}
      p={'2'}
      borderLeftColor={bgCardColor[index]}
      shadow={'5'}
      bg={bgCardLighterColor[index]}>
      <HStack w={wp('80%')} px="2" justifyContent={'space-between'}>
        <VStack
          w={wp('25%')}
          justifyContent={'center'}
          alignItems={'center'}
          p="2">
          <Text fontSize="md" fontWeight="bold" color={colors.darkGary}>
            {startTime} - {endTime}
          </Text>
        </VStack>

        <VStack w={wp('60%')} p="2">
          <Text fontSize="md" bold color={bgCardColor[index]}>
            {subjectName}
          </Text>

          <Text color={colors.darkGary} fontSize="sm">
            Teacher: {employeeName}
          </Text>
          <Text color={colors.darkGary} fontSize="sm">
            Room: {room}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default ClassCard;
