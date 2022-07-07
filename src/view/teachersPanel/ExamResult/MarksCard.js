import {Box,  Text, VStack} from 'native-base';
import React from 'react';
import bgCardColor from '../../../theme/bgCardColor';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../theme/colors';
import bgCardLighterColor from '../../../theme/bgCardLighterColor';
const MarksCard = ({index, item}) => {
  //console.log({item});
  const {
    written,
    practical,
    attendance,
    viva,
    writtenFullMark,
    practicalFullMark,
    attendanceFullMark,
    vivaFullMark,
  } = item;

  return (
    <Box
      w={wp('90%')}
      h={hp('18%')}
      my={'2'}
      borderRadius={'md'}
      p={'3'}
      borderLeftWidth={'10'}
      shadow={'3'}
      bg={bgCardLighterColor[index]}
      borderLeftColor={bgCardColor[index]}
      alignSelf={'center'}>
      <VStack justifyContent={'space-between'}>
        <Text bold color={colors.gray}>
          Written Mark : {written} /{writtenFullMark}
        </Text>

        <Text my="1" bold color={colors.gray}>
          Practical Mark : {practical}/{practicalFullMark}
        </Text>

        <Text my="1" bold color={colors.gray}>
          Attendance Mark : {attendance}/{attendanceFullMark}
        </Text>
        <Text my="1" bold color={colors.gray}>
          Viva Mark : {viva}/{vivaFullMark}
        </Text>
      </VStack>
    </Box>
  );
};

export default MarksCard;
