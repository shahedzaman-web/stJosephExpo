import { Box, HStack, Text, VStack} from 'native-base';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import bgCardColor from '../../../theme/bgCardColor';
import bgCardLighterColor from '../../../theme/bgCardLighterColor';
import colors from '../../../theme/colors';
const SubjectCard = ({item, index}) => {
  const {subjectName, subjectAuthor, subjectType} = item;

  return (
    <Box
      w={'94%'}
      h={hp('12%')}
      shadow={'2'}
      alignSelf={'center'}
      borderRadius={'6'}
      bg={bgCardLighterColor[index]}
      borderLeftWidth={'10'}
      my={'2'}
      borderLeftColor={bgCardColor[index]}>
      <HStack alignItems={'center'} h="100%">
        <VStack pl="3">
          <Text fontSize="md" bold color={bgCardColor[index]}>
            {subjectName}
          </Text>
          <Text fontSize="md" bold color={colors.darkGary}>
            {subjectAuthor}
          </Text>
          <Text fontSize="md" bold color={colors.darkGary}>
            {subjectType}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default SubjectCard;
