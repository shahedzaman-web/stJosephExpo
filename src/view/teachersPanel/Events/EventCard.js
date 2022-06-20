import {Box, HStack, Text} from 'native-base';
import React from 'react';
import bgCardColor from '../../../theme/bgCardColor';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import bgCardLighterColor from '../../../theme/bgCardLighterColor';
import colors from '../../../theme/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const EventCard = ({index, item}) => {
  return (
    <Box
      h={hp('24%')}
      borderLeftColor={bgCardColor[index]}
      borderLeftWidth={10}
      borderRadius={'md'}
      mx={"2"}
      w={wp('92%')}
      my={"2"}
      shadow={'5'}
      alignSelf="center"
      justifyContent={'center'}
      bg={bgCardLighterColor[index]}
      p="2">
      <Text fontSize="md" bold color={bgCardColor[index]}>
        {item.title}
      </Text>
      <Text fontSize="md" bold color={colors.darkGary}>
        {item.type}
      </Text>
      <HStack py="1" alignItems={'center'}>
        <FontAwesome name="calendar-o" size={24} color={colors.darkGary} />
        <Text bold color={colors.darkGary} fontSize="sm" ml="2">
          Date of Start: {item.dateOfStart}
        </Text>
      </HStack>
      <HStack py="1" alignItems={'center'}>
        <FontAwesome name="calendar-o" size={24} color={colors.darkGary} />
        <Text bold color={colors.darkGary} fontSize="sm" ml="2">
          Date of End: {item.dateOfEnd}
        </Text>
      </HStack>
      <Text bold color={colors.darkGary} fontSize="sm">
        Audience: {item.audience}
      </Text>
      <Text bold color={colors.darkGary} fontSize="sm">
        Created By: {item.createdBy}
      </Text>
    </Box>
  );
};

export default EventCard;
