import {Avatar, Box, HStack, Text, VStack} from 'native-base';

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
  //   {
  //     "_id": "6266c6bc5db85b7ab475244f",
  //     "branchId": {
  //         "_id": "624748040c772817c745b0dc",
  //         "branchName": "St Joseph College"
  //     },
  //     "sessionId": {
  //         "_id": "6262d2a254d98b7458d50b8b",
  //         "sessionName": "2010-2011"
  //     },
  //     "subjectName": "Bangla",
  //     "subjectCode": "250",
  //     "subjectAuthor": "Rian Rashed",
  //     "subjectType": "optional"
  // },
  // co
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
