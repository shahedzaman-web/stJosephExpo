import {Box, HStack, Text} from 'native-base';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import bgCardColor from '../../../theme/bgCardColor';
import bgCardLighterColor from '../../../theme/bgCardLighterColor';


import { FontAwesome} from '@expo/vector-icons';
import colors from '../../../theme/colors';
import moment from 'moment';
const HomeWorkCard = ({index, homework, evaluationDetails}) => {
  const {title, dateOfHomework, dateOfSubmission, subject, attachmentFile} =
    homework;
  const {status, rank, remarks} = evaluationDetails;

  return (
    <Box
      w={wp('94%')}
      h={hp('30%')}
      justifyContent={'center'}

      my={'3'}
      borderRadius={'md'}
      p={'2'}
      borderLeftWidth={'10'}
      shadow={'3'}
      bg={bgCardLighterColor[index]}
      borderLeftColor={bgCardColor[index]}
      alignSelf={'center'}>
      <Text color={bgCardColor[index]} fontSize={'lg'} bold>
        {title}
      </Text>
      <HStack py="1" alignItems={'center'}>
        <FontAwesome name="calendar-o" size={24} color={colors.darkGary} />
        <Text bold color={colors.darkGary} fontSize="sm" ml="2">
          Date Of Home Work: {moment(dateOfHomework).format('DD-MM-YYYY')}
        </Text>
      </HStack>
      <HStack alignItems={'center'} py="1">
        <FontAwesome name="calendar-o" size={24} color={colors.darkGary} />
        <Text bold color={colors.darkGary} fontSize="sm" ml="2">
          Date Of Submission: {moment(dateOfSubmission).format('DD-MM-YYYY')}
        </Text>
      </HStack>

      <Text bold color={colors.darkGary} fontSize="sm">
        Rank Out Of 5: {rank}
      </Text>
      <Text bold color={colors.darkGary} fontSize="sm">
        Remarks: {remarks}
      </Text>

      <HStack my="1" alignItems={'center'}>
        <Text fontSize="md" bold color={colors.darkGary}>
          Status:
        </Text>
        <Box
          p="2"
          borderRadius={'md'}
          ml="2"
          bg={status === 'incomplete' ? colors.failBg : colors.passBg}>
          <Text bold color={colors.white}>
            {status}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};

export default HomeWorkCard;
