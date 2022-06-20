import React from 'react';
import {Box, Button, CheckIcon, HStack, Select, Text} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../../../theme/colors';

const AttendanceHeader = () => {
  const [selectedClass, setSelectedClass] = React.useState('');
  const [selectedSection, setSelectedSection] = React.useState('');
  const [selectedDay, setSelectedDay] = React.useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = React.useState(false);

  const handleConfirmDate = date => {
    setDatePickerVisible(false);
    setSelectedDay(date);
  };

  return (
    <Box flex={1}>
      <DateTimePickerModal
        isVisible={datePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={() => setDatePickerVisible(false)}
      />
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
      <Box w={wp('94%')}>
        <Text fontSize="lg" bold>
          Day <Text color={colors.failBg}>*</Text>
        </Text>
        <HStack my="3" alignItems={'center'}>
          <Button
            p="0"
            variant="unstyled"
            onPress={() => setDatePickerVisible(true)}>
            <FontAwesome name="calendar" size={30} color={colors.primary} />
          </Button>
          <Text bold ml="2">
            {selectedDay.toDateString()}
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};
export default AttendanceHeader;
