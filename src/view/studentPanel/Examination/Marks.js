import {
  Box,
  FlatList,
  HStack,
  Text,
  Skeleton,
  Center,
  Select,
  CheckIcon,
} from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import {
  useGetExamListQuery,
  useGetFilterWiseExamMarksQuery,
  useGetAllSubjectQuery,
} from "../../../store/services/studentApi";
import colors from "../../../theme/colors";
import MarksCard from "./MarksCard";

const Marks = () => {
  const [selectedExam, setSelectedExam] = React.useState("");
  const [selectedSubject, setSelectedSubject] = React.useState("");
  const [subjectDropdownData, setSubjectDropdownData] = React.useState([]);
  const [examDropdownData, setExamDropdownData] = React.useState([]);
  const [resultData, setResultData] = React.useState([]);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const { data, isLoading } = useGetAllSubjectQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionName: userInfo.session.sessionName,
    sessionId: userInfo.session._id,
  });
  const res = useGetExamListQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionName: userInfo.session.sessionName,
    sessionId: userInfo.session._id,
  });
  React.useEffect(() => {
    if (data !== undefined) {
      const red = data?.data.map((item) => {
        return {
          value: item._id,
          label: item.subjectName,
        };
      });
      setSubjectDropdownData(red);
    }
  }, [data]);

  React.useEffect(() => {
    if (res?.data !== undefined) {
      const resp = res?.data.map((item) => {
        return {
          value: item._id,
          label: item.name,
        };
      });
      setExamDropdownData(resp);
    }
  }, [res?.data]);

  const examMarks = useGetFilterWiseExamMarksQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionName: userInfo.session.sessionName,
    sessionId: userInfo.session._id,
    classId: userInfo.class._id,
    sectionId: userInfo.section._id,
    examId: selectedExam,
    subjectId: selectedSubject,
  });

  React.useEffect(() => {
    if (selectedExam !== "" && selectedSubject !== "") {
      const filterData = examMarks?.data?.filter(
        (item) => item.exam._id === selectedExam
      );

      if (filterData !== undefined) {
        setResultData(filterData[0]?.marks);
      }
    }
  }, [selectedExam, selectedSubject, examMarks]);

  return (
    <Box flex={1} color={colors.white}>
      <Box p="3">
        <HStack
          space={6}
          justifyContent="space-between"
          w="100%"
          alignItems={"center"}
        >
          <Text bold color={colors.primary}>
            Select Exam
          </Text>
          <Select
            borderColor={colors.primary}
            selectedValue={selectedExam}
            minWidth="200"
            accessibilityLabel="Select Exam"
            placeholder="Select Exam"
            _selectedItem={{
              bg: colors.primary,
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setSelectedExam(itemValue)}
          >
            {examDropdownData.map((item) => (
              <Select.Item label={item.label} value={item.value} />
            ))}
          </Select>
        </HStack>
        <HStack
          space={6}
          justifyContent="space-between"
          w="100%"
          alignItems={"center"}
        >
          <Text bold color={colors.primary}>
            Select Subject
          </Text>
          <Select
            borderColor={colors.primary}
            selectedValue={selectedSubject}
            minWidth="200"
            accessibilityLabel="Select Subject"
            placeholder="Select Subject"
            _selectedItem={{
              bg: colors.primary,
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setSelectedSubject(itemValue)}
          >
            {subjectDropdownData.map((item) => (
              <Select.Item label={item.label} value={item.value} />
            ))}
          </Select>
        </HStack>
      </Box>
      {isLoading ? (
        <Box
          flex={1}
          mt={"6"}
          bg={colors.primaryLight}
          borderTopLeftRadius={"30"}
          borderTopRightRadius={"30"}
        >
          <Center my="5">
            <Skeleton w={wp("80%")} h={hp("30%")} />
          </Center>
          <Center my="5">
            <Skeleton w={wp("80%")} h={hp("30%")} />
          </Center>
        </Box>
      ) : (
        <>
          {resultData.length === 0 ? (
            <Box
              flex={1}
              mt={"6"}
              bg={colors.primaryLight}
              borderTopLeftRadius={"30"}
              borderTopRightRadius={"30"}
            >
              <Center my="5">
                <Text bold color={colors.primary}>
                  No Data Found
                </Text>
              </Center>
            </Box>
          ) : (
            <FlatList
              bg={colors.primaryLight}
              py="3"
              pb="5"
              showsVerticalScrollIndicator={false}
              borderTopLeftRadius={"30"}
              borderTopRightRadius={"30"}
              contentContainerStyle={{ paddingBottom: 20 }}
              data={resultData}
              renderItem={({ item, index }) => (
                <MarksCard item={item} index={index} />
              )}
              keyExtractor={(item) => item.subject}
            />
          )}
        </>
      )}
    </Box>
  );
};

export default Marks;
