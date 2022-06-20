
import React from 'react';
import {Box, Button, CheckIcon, HStack, Select, Text} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../../../theme/colors';

const ExaminationHeader = () => {
    const [selectedExam, setSelectedExam] = React.useState('');
    const [selectedSubject, setSelectedSubject] = React.useState('');
  const [selectedClass, setSelectedClass] = React.useState('');
  const [selectedSection, setSelectedSection] = React.useState('');


  return (
    <Box flex={1}>

      <Text bold fontSize={'xl'} my="2">
        Select Ground
      </Text>
      <HStack py="2" justifyContent={'space-between'}>
        <Box w={wp('45%')}>
          <Text fontSize="lg" bold>
            Exam <Text color={colors.failBg}>*</Text>
          </Text>
          <Select
            borderColor={colors.primary}
            selectedValue={selectedExam}
            w="100%"
            accessibilityLabel="Choose Exam"
            placeholder="Choose Eam"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={itemValue => setSelectedExam(itemValue)}>
            <Select.Item label="6" value="6" />
            <Select.Item label="7" value="7" />
            <Select.Item label="8" value="8" />
            <Select.Item label="9" value="9" />
            <Select.Item label="10" value="10" />
          </Select>
        </Box>
        <Box w={wp('45%')}>
          <Text fontSize="lg" bold>
            Class <Text color={colors.failBg}>*</Text>
          </Text>
          <Select
            borderColor={colors.primary}
            selectedValue={selectedClass}
            w="100%"
            accessibilityLabel="Choose Class"
            placeholder="Choose Class"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={itemValue => setSelectedClass(itemValue)}>
            <Select.Item label="6" value="6" />
            <Select.Item label="7" value="7" />
            <Select.Item label="8" value="8" />
            <Select.Item label="9" value="9" />
            <Select.Item label="10" value="10" />
          </Select>
        </Box>
      </HStack>
      <HStack py="2" justifyContent={'space-between'}>
   
        <Box w={wp('45%')}>
          <Text fontSize="lg" bold>
            Section <Text color={colors.failBg}>*</Text>
          </Text>
          <Select
            borderColor={colors.primary}
            selectedValue={selectedSection}
            w="100%"
            accessibilityLabel="Choose Section"
            placeholder="Choose Section"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={itemValue => setSelectedSection(itemValue)}>
            <Select.Item label="6" value="6" />
            <Select.Item label="7" value="7" />
            <Select.Item label="8" value="8" />
            <Select.Item label="9" value="9" />
            <Select.Item label="10" value="10" />
          </Select>
        </Box>
        <Box w={wp('45%')}>
          <Text fontSize="lg" bold>
            Subject <Text color={colors.failBg}>*</Text>
          </Text>
          <Select
            borderColor={colors.primary}
            selectedValue={selectedSubject}
            w="100%"
            accessibilityLabel="Choose Section"
            placeholder="Choose Section"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={itemValue => setSelectedSubject(itemValue)}>
            <Select.Item label="6" value="6" />
            <Select.Item label="7" value="7" />
            <Select.Item label="8" value="8" />
            <Select.Item label="9" value="9" />
            <Select.Item label="10" value="10" />
          </Select>
        </Box>
      </HStack>
    </Box>
  );
};
export default ExaminationHeader;
