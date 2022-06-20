import {Box, CheckIcon, HStack, Select, Text} from 'native-base';
import React from 'react';
import colors from '../../../theme/colors';
const ScheduleHeader = () => {
  const [selected, setSelected] = React.useState('');
  return (
    <Box p="3">
      <HStack
        space={6}
        justifyContent="space-between"
        w="100%"
        alignItems={'center'}>
        <Text bold color={colors.primary}>
          Select
        </Text>
        <Select
         borderColor={colors.primary}
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
          <Select.Item label="First Term" value="1st" />
          <Select.Item label="Second Term" value="2nd" />
          <Select.Item label="Annual" value="annual" />
        </Select>
      </HStack>
    </Box>
  );
};

export default ScheduleHeader;
