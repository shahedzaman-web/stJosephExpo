import {
  Box,
  CheckIcon,
  HStack,
  Select,
  Text,
  Button,
  TextArea,
} from 'native-base';
import React from 'react';
import colors from '../../../theme/colors';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Feather from 'react-native-vector-icons/Feather';

const LeaveRequest = () => {
  const [selected, setSelected] = React.useState('');

  const [startDateVisible, setStartDateVisible] = React.useState(false);
  const [endDateVisible, setEndDateVisible] = React.useState(false);
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());

  const handleConfirmStartDate = date => {
    setStartDate(date);
    setStartDateVisible(false);
  };

  const handleConfirmEndDate = date => {
    setEndDate(date);
    setEndDateVisible(false);
  };

  return (
    <Box
      flex={1}
      bg={colors.primaryLight}
      borderTopLeftRadius={'30'}
      borderTopRightRadius={'30'}
      mt="6">
      <Box p="3">
        <HStack
          space={6}
          justifyContent="space-between"
          w="100%"
          alignItems={'center'}>
          <Text w={wp('30%')} fontWeight="lg" bold color={colors.primary}>
            Leave Type
            <Text color={colors.failBg}>*</Text>
          </Text>
          <Select
           borderColor={colors.primary}
            w={wp('58%')}
            selectedValue={selected}
            minWidth="200"
            accessibilityLabel="Choose"
            placeholder="Choose"
            _selectedItem={{
              bg: colors.primary,
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={itemValue => setSelected(itemValue)}>
            <Select.Item label="Annual Leave" value="1st" />
            <Select.Item label="Sick Leave" value="2nd" />
          </Select>
        </HStack>
        <HStack
          space={6}
          my="2"
          justifyContent="space-between"
          w="100%"
          alignItems={'center'}>
          <Text w={wp('30%')} bold fontWeight="lg" color={colors.primary}>
            Date Of Start
            <Text color={colors.failBg}>*</Text>
          </Text>
          <Box w={wp('58%')}>
            <Button
              bg={colors.primary}
              onPress={() => setStartDateVisible(true)}>
              <Text color={colors.white}>{startDate.toDateString()}</Text>
            </Button>
            <DateTimePickerModal
              isVisible={startDateVisible}
              mode="date"
              onConfirm={handleConfirmStartDate}
              onCancel={() => setStartDateVisible(false)}
            />
          </Box>
        </HStack>
        <HStack
          space={6}
          my="2"
          justifyContent="space-between"
          w="100%"
          alignItems={'center'}>
          <Text w={wp('30%')} bold fontWeight="lg" color={colors.primary}>
            Date Of End
            <Text color={colors.failBg}>*</Text>
          </Text>
          <Box w={wp('58%')}>
            <Button bg={colors.primary} onPress={() => setEndDateVisible(true)}>
              <Text color={colors.white}>{endDate.toDateString()}</Text>
            </Button>
            <DateTimePickerModal
              isVisible={endDateVisible}
              mode="date"
              onConfirm={handleConfirmEndDate}
              onCancel={() => setEndDateVisible(false)}
            />
          </Box>
        </HStack>
        <HStack
          space={6}
          my="2"
          justifyContent="space-between"
          w="100%"
          alignItems={'center'}>
          <Text w={wp('30%')} bold fontWeight="lg" color={colors.primary}>
            Reason
          </Text>
          <TextArea
            bg={colors.white}
            h={20}
            placeholder="Text Area Placeholder"
            w={wp('58%')}
          />
        </HStack>
        <HStack
          space={6}
          my="2"
          justifyContent="space-between"
          w="100%"
          alignItems={'center'}>
          <Text w={wp('30%')} bold fontWeight="lg" color={colors.primary}>
            Attachment
            <Text color={colors.failBg}>*</Text>
          </Text>
          <Box w={wp('58%')}>
            <Button
              bg={colors.primary}
              leftIcon={
                <Feather name="paperclip" size={20} color={colors.white} />
              }>
              <Text color={colors.white}>Choose File</Text>
            </Button>
          </Box>
        </HStack>
        <Button h={hp('6%')} bg={colors.primary} w="100%" mt="3">
          <Text color={colors.white}>Submit</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default LeaveRequest;
