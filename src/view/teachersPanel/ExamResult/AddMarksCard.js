import React from "react";
import { Box, HStack, Input, Text, VStack } from "native-base";
import bgCardLighterColor from "../../../theme/bgCardLighterColor";
import bgCardColor from "../../../theme/bgCardColor";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../../../theme/colors";
export default function AddMarksCard({
  item,
  index,
  examScheduleData,
  setExamMarksData,
  examMarksData,
}) {
  const {
    attendanceFullMark,
    practicalFullMark,
    presentationFullMark,
    vivaFullMark,
    writtenFullMark,
  } = examScheduleData;
  const [written, setWritten] = React.useState("");
  const [practical, setPractical] = React.useState("");
  const [presentation, setPresentation] = React.useState("");
  const [viva, setViva] = React.useState("");
  const [attendance, setAttendance] = React.useState("");

  const handleChangeWritten = (text) => {
    setWritten(text);
    const rowsInput = [...examMarksData];
    rowsInput[index].written = text;
    setExamMarksData(rowsInput);
  };
  const handleChangePractical = (text) => {
    setPractical(text);
    const rowsInput = [...examMarksData];
    rowsInput[index].practical = text;
    setExamMarksData(rowsInput);
  };
  const handleChangePresentation = (text) => {
    setPresentation(text);
    const rowsInput = [...examMarksData];
    rowsInput[index].presentation = text;
    setExamMarksData(rowsInput);
  };
  const handleChangeViva = (text) => {
    setViva(text);
    const rowsInput = [...examMarksData];
    rowsInput[index].viva = text;
    setExamMarksData(rowsInput);
  };
  const handleChangeAttendance = (text) => {
    setAttendance(text);
    const rowsInput = [...examMarksData];
    rowsInput[index].attendance = text;
    setExamMarksData(rowsInput);
  };

  return (
    <Box
      w={wp("90%")}
      my={"2"}
      borderRadius={"md"}
      p={"3"}
      borderLeftWidth={"10"}
      shadow={"3"}
      bg={bgCardLighterColor[index]}
      borderLeftColor={bgCardColor[index]}
      alignSelf={"center"}
    >
      <Text bold fontSize={"lg"} color={bgCardColor[index]}>
        {item.firstName} {item.lastName}
      </Text>
      <Text bold color={colors.gray}>
        Reg. No. : {item.regNo}
      </Text>
      <Text bold color={colors.gray}>
        Roll No. : {item.roll}
      </Text>
      <>
        {writtenFullMark !== "0" && writtenFullMark !== undefined && (
          <HStack alignItems={"center"} justifyContent={"space-between"} my="1">
            <Text bold color={colors.gray}>
              WRITTEN ({writtenFullMark})
            </Text>
            <Input
              value={written}
              onChangeText={(text) => handleChangeWritten(text)}
              w={wp("45%")}
              placeholder="Enter Marks"
              placeholderTextColor={colors.gray}
              borderRadius={"md"}
              borderColor={colors.primary}
              borderWidth={"1"}
            />
          </HStack>
        )}
      </>
      <>
        {practicalFullMark !== "0" && practicalFullMark !== undefined && (
          <HStack alignItems={"center"} justifyContent={"space-between"} my="1">
            <Text bold color={colors.gray}>
              PRACTICAL ({practicalFullMark})
            </Text>
            <Input
              value={practical}
              onChangeText={(text) => handleChangePractical(text)}
              w={wp("45%")}
              placeholder="Enter Marks"
              placeholderTextColor={colors.gray}
              borderRadius={"md"}
              borderColor={colors.primary}
              borderWidth={"1"}
            />
          </HStack>
        )}
      </>
      <>
        {attendanceFullMark !== "0" && attendanceFullMark !== undefined && (
          <HStack alignItems={"center"} justifyContent={"space-between"} my="1">
            <Text bold color={colors.gray}>
              ATTENDANCE ({practicalFullMark})
            </Text>
            <Input
              value={attendance}
              onChangeText={(text) => handleChangeAttendance(text)}
              w={wp("45%")}
              placeholder="Enter Marks"
              placeholderTextColor={colors.gray}
              borderRadius={"md"}
              borderColor={colors.primary}
              borderWidth={"1"}
            />
          </HStack>
        )}
      </>
      <>
        {vivaFullMark !== "0" && vivaFullMark !== undefined && (
          <HStack alignItems={"center"} justifyContent={"space-between"} my="1">
            <Text bold color={colors.gray}>
              VIVA ({vivaFullMark})
            </Text>
            <Input
              value={viva}
              onChangeText={(text) => handleChangeViva(text)}
              w={wp("45%")}
              placeholder="Enter Marks"
              placeholderTextColor={colors.gray}
              borderRadius={"md"}
              borderColor={colors.primary}
              borderWidth={"1"}
            />
          </HStack>
        )}
      </>
      {presentationFullMark !== "0" && presentationFullMark !== undefined && (
        <HStack alignItems={"center"} justifyContent={"space-between"} my="1">
          <Text bold color={colors.gray}>
            PRESENTATION ({presentationFullMark})
          </Text>
          <Input
            value={presentation}
            onChangeText={(text) => handleChangePresentation(text)}
            w={wp("45%")}
            placeholder="Enter Marks"
            placeholderTextColor={colors.gray}
            borderRadius={"md"}
            borderColor={colors.primary}
            borderWidth={"1"}
          />
        </HStack>
      )}
    </Box>
  );
}
