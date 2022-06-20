import {Box, HStack, Image, Text, VStack} from 'native-base';
import React from 'react';
import bgCardColor from '../../../theme/bgCardColor';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import bgCardLighterColor from '../../../theme/bgCardLighterColor';
import colors from '../../../theme/colors';

import { FontAwesome } from '@expo/vector-icons';

import moment from 'moment';
import baseURL from '../../../utils/baseURL';
const EventCard = ({index, item}) => {
  const {title, audience, date, description, coverImage} = item;
//console.log({item})
  return (
    <Box
      h={hp('24%')}
      borderLeftColor={bgCardColor[index]}
      borderLeftWidth={10}
      borderRadius={'md'}
      mx={'2'}
      w={wp('92%')}
      my={'2'}
      shadow={'5'}
      alignSelf="center"
      justifyContent={'center'}
      bg={bgCardLighterColor[index]}
      p="2">
      <HStack justifyContent={'space-between'} alignItems="center">
        <VStack>
          <Text fontSize="md" bold color={bgCardColor[index]}>
            {title}
          </Text>
          <Text fontSize="md" bold color={colors.darkGary}>
            {description}
          </Text>
          <HStack py="1" alignItems={'center'}>
            <FontAwesome name="calendar-o" size={24} color={colors.darkGary} />
            <Text bold color={colors.darkGary} fontSize="sm" ml="2">
              Date: {moment(date).format('DD-MM-YYYY')}
            </Text>
          </HStack>

          <Text bold color={colors.darkGary} fontSize="sm">
            Audience: {audience}
          </Text>
          <Text bold color={colors.darkGary} fontSize="sm">
            Created By: {item?.createdBy?.employeeName}
          </Text>
        </VStack>
        <Image
        alt='event'
          source={{
            uri: baseURL + '/eventPhoto/' + coverImage,
          }}
          style={{
            width: wp('20%'),
            height: hp('20%'),
         
            resizeMode: 'contain',
          }}
        />
      </HStack>
    </Box>
  );
};

export default EventCard;
