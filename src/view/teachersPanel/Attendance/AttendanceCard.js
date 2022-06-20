import {Box, HStack, Radio, Text, VStack} from 'native-base';
import React from 'react';
import bgCardColor from '../../../theme/bgCardColor';
import bgCardLighterColor from '../../../theme/bgCardLighterColor';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const AttendanceCard = ({item, index}) => {
  //console.log({item});
  const {name, roll} = item;
  const [selected, setSelected] = React.useState('present');
  return (
    <Box
      my="3"
      p="2"
      justifyContent={'center'}
      mx="auto"
      w={wp('92%')}
      h={hp('14%')}
      alignSelf="center"
      borderRadius={'md'}
      borderLeftWidth={'10'}
      borderLeftColor={bgCardColor[index]}
      shadow={'3'}
      bg={bgCardLighterColor[index]}>
      <HStack justifyContent={'space-between'}>
        <VStack>
          <Text fontSize="md" fontWeight="bold" color={bgCardColor[index]}>
            Name: {name}
          </Text>
          <Text fontSize="md" fontWeight="bold">
            Roll: {roll}
          </Text>
        </VStack>
        <VStack mr="3" w={wp('25%')}>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={selected}
            onChange={nextValue => {
              setSelected(nextValue);
            }}>
            <Radio value="present" my={1}>
              Present
            </Radio>
            <Radio value="absent" my={1}>
              Absent
            </Radio>
          </Radio.Group>
        </VStack>
      </HStack>
    </Box>
  );
};

export default AttendanceCard;
