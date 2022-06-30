import {
  Box,
  HStack,
  Radio,
  Stack,
  Text,
  VStack,
} from "native-base";
import React from "react";
import bgCardColor from "../../../theme/bgCardColor";
import bgCardLighterColor from "../../../theme/bgCardLighterColor";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const AttendanceCard = ({
  item,
  index,
  setAttendanceDetails,
  attendanceDetails,
}) => {
  const { firstName, lastName, roll, regNo } = item;
  const [selected, setSelected] = React.useState(null);

  const handleChange = React.useCallback((nextValue) => {
    setSelected(nextValue);
    const rowsInput = [...attendanceDetails];
    rowsInput[index].status = nextValue;
    setAttendanceDetails(rowsInput);
  })
  return (
    <Box
      my="3"
      p="2"
      justifyContent={"center"}
      mx="auto"
      w={wp("92%")}
      h={hp("20%")}
      alignSelf="center"
      borderRadius={"md"}
      borderLeftWidth={"10"}
      borderLeftColor={bgCardColor[index]}
      shadow={"3"}
      bg={bgCardLighterColor[index]}
    >
      <HStack justifyContent={"space-between"}>
        <VStack>
          <Text fontSize="md" fontWeight="bold" color={bgCardColor[index]}>
            Name: {firstName} {lastName}
          </Text>
          <Text fontSize="md" fontWeight="bold">
            Roll: {roll}
          </Text>
        </VStack>
      </HStack>
      <HStack mr="3" w={wp("25%")}>
        <Radio.Group
          name="myRadioGroup"
          accessibilityLabel="favorite number"
          value={selected}
          onChange={(nextValue) => {
            handleChange(nextValue);
          }}
        >
          <Stack direction="row" alignItems="center" space={4}>
            <Radio value="present" my={1}>
              Present
            </Radio>
            <Radio value="absent" my={1}>
              Absent
            </Radio>
          </Stack>
        </Radio.Group>
      </HStack>
      {/* <HStack alignItems={"center"}
      justifyContent={"space-between"}
      px="2"
      >
        <Text bold color={colors.primary}>
          Remarks
        </Text>
        <Input
        w="70%"
        onChangeText={(text) => setRemarks(text)}
        borderColor={colors.primary}
        placeholder="Remarks"
      />
      </HStack> */}
    </Box>
  );
};

export default  React.memo(AttendanceCard);
