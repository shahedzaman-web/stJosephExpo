import {Box, HStack, Text} from 'native-base';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import bgCardColor from '../../../theme/bgCardColor';
import bgCardLighterColor from '../../../theme/bgCardLighterColor';

const ProfileCard = ({item, index}) => {
  const {icon, title, count} = item;
  return (
    <Box
      h={hp('12%')}
      borderLeftColor={bgCardColor[index]}
      borderLeftWidth={6}
      borderRadius={'md'}
      mx="2"
      w={wp('90%')}
      my="2"
      shadow={'3'}
      bg={bgCardLighterColor[index]}>
      <HStack
        justifyContent="space-between"
        alignItems={'center'}
        h="100%"
        mr="5">
        <HStack justifyContent="center" alignItems={'center'} h="100%">
          <Box
            bg={bgCardColor[index]}
            p="3"
            borderRadius={'lg'}
            mx="3"
            justifySelf="center"
            alignSelf="center">
            {icon}
          </Box>
          <Text fontSize="md" bold color={bgCardColor[index]}>
            {title}
          </Text>
        </HStack>
        <Text fontSize="md" bold color={bgCardColor[index]}>
          {count}
        </Text>
      </HStack>
    </Box>
  );
};

export default ProfileCard;
