import {Box, HStack, Text} from 'native-base';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import bgCardColor from '../../../theme/bgCardColor';
import bgCardLighterColor from '../../../theme/bgCardLighterColor';
import colors from '../../../theme/colors';
const LeaveListCard = ({item, index}) => {
  return (
    <Box
      w={wp('90%')}
      h={hp('20%')}
        justifyContent="center" 
      my={'2'}
      borderRadius="md"
      p={'2'}
      borderLeftWidth={'10'}
      shadow={'3'}
      bg={bgCardLighterColor[index]}
      alignSelf="center"
      borderLeftColor={bgCardColor[index]}>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Text bold fontSize="md" color={colors.primary}>
          Leave Category: {item.leaveCategory}
        </Text>
        <Box
            p="2"
          justifyContent={'center'}
          alignItems={'center'}
          borderRadius="md"
          bg={item.leaveStatus === 'Pending' ? colors.failBg : colors.passBg}>
          <Text bold fontSize="md" color={colors.white}>
            {item.leaveStatus}
          </Text>
        </Box>
      </HStack>
      <Text>
        Date Of Start : {item.dateOfStart} | Date Of End : {item.dateOfEnd}
      </Text>
      <Text>Apply Date : {item.applyDate}</Text>
      <Text>Days : {item.days}</Text>
    </Box>
  );
};

export default LeaveListCard;
