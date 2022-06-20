import {Box, HStack, Input, Radio, Stack, Text, VStack} from 'native-base';
import React from 'react';
import bgCardColor from '../../../theme/bgCardColor';
import bgCardLighterColor from '../../../theme/bgCardLighterColor';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../../../theme/colors';
const ExaminationCard = ({item, index}) => {
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
      h={hp('28%')}
      alignSelf="center"
      borderRadius={'md'}
      borderLeftWidth={'10'}
      borderLeftColor={bgCardColor[index]}
      shadow={'3'}
      bg={bgCardLighterColor[index]}>
      <Text fontSize="md" fontWeight="bold" color={bgCardColor[index]}>
        Name: {name}
      </Text>
      <Text fontSize="md" fontWeight="bold">
        Roll: {roll}
      </Text>

      <Box  w="100%" my="1">
        <Radio.Group
          name="myRadioGroup"
          accessibilityLabel="favorite number"
          value={selected}
          onChange={nextValue => {
            setSelected(nextValue);
          }}>
                    <Stack direction="row" alignItems="center" space={4}>
                    <Radio value="present" my={1}>
            Present
          </Radio>
          <Radio value="absent" my={1}>
            Absent
          </Radio>
                    </Stack>
   
        </Radio.Group>
      </Box>
          <HStack direction="row" justifyContent="space-between" alignItems="center"  my="1">
            <Text fontSize="md" fontWeight="bold">
            Practical(25) :
            </Text>
            <Input 
            ml="2"
            w="65%"
            borderColor={colors.primary}
             variant="outline" placeholder="Enter Marks" />
            </HStack>
            <HStack direction="row" justifyContent="space-between" alignItems="center" my="1">
            <Text fontSize="md" fontWeight="bold">
            Written(75) :
            </Text>
            <Input 
            ml="2"
            w="65%"
            borderColor={colors.primary}
             variant="outline" placeholder="Enter Marks" />
            </HStack>
    </Box>
  );
};

export default ExaminationCard;
