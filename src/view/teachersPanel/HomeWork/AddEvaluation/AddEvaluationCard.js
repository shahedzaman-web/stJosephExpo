import React from "react";
import {
  Box,
  CheckIcon,
  HStack,
  Input,
  Select,
  Text,
  VStack,
} from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import bgCardLighterColor from "../../../../theme/bgCardLighterColor";
import bgCardColor from "../../../../theme/bgCardColor";
import colors from "../../../../theme/colors";

export default function AddEvaluationCard({
  item,
  index,
  setEvaluationData,
  evaluationData
}) {
  const [selectedStatus, setSelectedStatus] = React.useState("");
  const [rank, setRank] = React.useState("");
  const [remarks, setRemarks] = React.useState("");
//console.log("evaluationData=========================>",evaluationData)
  const handleChangeStatus = React.useCallback((nextValue) => {
    setSelectedStatus(nextValue);
    const rowsInput = [...evaluationData];
    rowsInput[index].status = nextValue;
    setEvaluationData(rowsInput);
  });
  const handleChangeRank = React.useCallback((nextValue) => {
    setRank(nextValue);
    const rowsInput = [...evaluationData];
    rowsInput[index].rank = nextValue;
    setEvaluationData(rowsInput);
  });
  const handleChangeRemark = React.useCallback((nextValue) => {
    setRemarks(nextValue);
    const rowsInput = [...evaluationData];
    rowsInput[index].remarks = nextValue;
    setEvaluationData(rowsInput);
  });

  return (
    <Box
      w={wp("90%")}
      h={hp("37%")}
      justifyContent={"center"}
      my={"2"}
      borderRadius={"md"}
      p={"3"}
      borderLeftWidth={"10"}
      shadow={"3"}
      bg={bgCardLighterColor[index]}
      borderLeftColor={bgCardColor[index]}
      alignSelf={"center"}
    >
      <VStack>
        <Text bold color={colors.gray}>
          Name : {item.firstName} {item.lastName}
        </Text>
        <Text bold color={colors.gray}>
          Roll : {item.roll}
        </Text>
        <Text bold color={colors.gray}>
          Reg. No. : {item.regNo}
        </Text>
        <HStack my="1" alignItems={"center"} justifyContent="space-between">
          <Text bold color={colors.gray}>
            Status
          </Text>
          <Select
            borderColor={colors.primary}
            selectedValue={selectedStatus}
            minWidth="160"
            accessibilityLabel="Choose Status"
            placeholder="Choose Status"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) =>{ handleChangeStatus(itemValue)}}
          >
            <Select.Item value="complete" label="Complete" />
            <Select.Item value="incomplete" label="Incomplete" />
          </Select>
        </HStack>
        <HStack my="1" alignItems={"center"} justifyContent="space-between">
          <Text bold color={colors.gray}>
            Rank (OUT OF 5)
          </Text>
          <Select
            borderColor={colors.primary}
            selectedValue={rank}
            minWidth="160"
            accessibilityLabel="Choose Rank"
            placeholder="Choose Rank"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => {
              handleChangeRank(itemValue);
            }}
          >
            <Select.Item value="1" label="1" />
            <Select.Item value="2" label="2" />
            <Select.Item value="3" label="3" />
            <Select.Item value="4" label="4" />
            <Select.Item value="5" label="5" />
          </Select>
        </HStack>
        <HStack my="1" alignItems={"center"} justifyContent="space-between">
          <Text bold color={colors.gray}>
            Remarks
          </Text>
          <Input
         minWidth="160"
            value={remarks}
            borderColor={colors.primary}
            placeholder="Remark"
            onChangeText={(text) => {handleChangeRemark(text)}}
            mt={1}
          />
        </HStack>
      </VStack>
    </Box>
  );
}
