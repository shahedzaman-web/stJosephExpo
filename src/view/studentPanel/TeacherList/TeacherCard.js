import {Box, Avatar, HStack, Image, VStack, Text} from 'native-base';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import bgCardColor from '../../../theme/bgCardColor';
import bgCardLighterColor from '../../../theme/bgCardLighterColor';
import {MaterialIcons } from '@expo/vector-icons';

import colors from '../../../theme/colors';
const TeacherCard = ({index, item}) => {
  return (
    <Box
      w={wp('92%')}
      h={hp('18%')}
      shadow={'2'}
      alignSelf={'center'}
      borderRadius={'md'}
      bg={bgCardLighterColor[index]}
      borderLeftWidth={"10"}
      my={"2"}
      borderLeftColor={bgCardColor[index]}>
      <HStack w={'100%'} h={'100%'}>
        <Avatar
          alignSelf={'center'}
          justifySelf={'center'}
          m="2"
          alt="teacher"
          source={{
            uri: item.img,
          }}
          w={wp('26%')}
          h={hp('14%')}
          resizeMode={'contain'}
        />
        <VStack ml="3" alignSelf={'center'} justifySelf={'center'}>
          <Text fontSize={'xl'} bold color={bgCardColor[index]}>
            {item.name}
          </Text>
          <HStack>
            <MaterialIcons name="subject" size={24} color={colors.darkGary} />
            <Text pl="2" fontSize="lg" color={colors.darkGary}>
              {' '}
              {item.subject}
            </Text>
          </HStack>
          <HStack>
            <MaterialIcons name="phone" size={24} color={colors.darkGary} />
            <Text color={colors.darkGary} pl="2" fontSize="lg">
              {item.phoneNumber}
            </Text>
          </HStack>
          <HStack>
            <MaterialIcons
              name="alternate-email"
              size={24}
              color={colors.darkGary}
            />
            <Text pl="2" color={colors.darkGary} fontSize="lg">
              {' '}
              {item.email}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default TeacherCard;
