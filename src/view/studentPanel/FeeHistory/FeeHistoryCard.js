import {Box, Button, HStack, Text} from 'native-base';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import bgCardColor from '../../../theme/bgCardColor';
import bgCardLighterColor from '../../../theme/bgCardLighterColor';
import colors from '../../../theme/colors';

import { FontAwesome } from '@expo/vector-icons';

const FeeHistoryCard = ({item, index}) => {
  return (
    <Box
      w={wp('90%')}
      h={item.status === 'Unpaid' ? hp('20%') : hp('14%')}
      my={"2"}
      borderRadius="md"
      p={"2"}
      borderLeftWidth={'10'}
      shadow={'3'}
      bg={bgCardLighterColor[index]}
      alignSelf="center"
      borderLeftColor={bgCardColor[index]}>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Text bold fontSize="lg" color={colors.primary}>
          Fee Type: {item.feeType}
        </Text>
        <Box
          w={"20%"}
          h={"10"}
          justifyContent={'center'}
          alignItems={'center'}
          borderRadius="md"
          bg={item.status === 'Unpaid' ? colors.failBg : colors.passBg}>
          <Text bold fontSize="md" color={colors.white}>
            {item.status}
          </Text>
        </Box>
      </HStack>
      <HStack alignItems={'center'}>
        <FontAwesome name="calendar-o" size={24} color={colors.darkGary} />
        <Text ml="1" color={colors.darkGary}>
          Due Date : {item.dueDate}
        </Text>
      </HStack>
      <Text color={colors.darkGary}>Amount: {item.amount}</Text>
      {item.status === 'Unpaid' && (
        <Button mt="1" bg={colors.primary}>
          <Text bold color={colors.white}>
            Pay Now
          </Text>
        </Button>
      )}
    </Box>
  );
};

export default FeeHistoryCard;
