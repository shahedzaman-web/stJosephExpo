import { Box, CheckIcon, HStack, Select, Text } from 'native-base';
import React from 'react';
import colors from '../../../theme/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
const StudentHeader = () => {
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
      </HStack>
    </Box>
  );
};

export default StudentHeader;
