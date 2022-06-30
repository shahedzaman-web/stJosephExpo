import { Box, FlatList, HStack, Text, Skeleton, Center } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Dropdown } from "react-native-element-dropdown";

import {
  useGetExamListQuery,
  useGetFilterWiseExamMarksQuery,
  useGetAllSubjectQuery,
} from "../../../store/services/studentApi";
import colors from "../../../theme/colors";
import MarksCard from "./MarksCard";
import _renderItem from "../../../components/_renderItem";

const Marks = () => {
  const [selectedExam, setSelectedExam] = React.useState("");
  const [selectedSubject, setSelectedSubject] = React.useState("");
  const [subjectDropdownData, setSubjectDropdownData] = React.useState([]);
  const [examDropdownData, setExamDropdownData] = React.useState();
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
      console.log({ filterData });
      if (filterData !== undefined) {
        setResultData(filterData[0]?.marks);
      }
    }
  }, [selectedExam, selectedSubject, examMarks]);
  if (isLoading) {
    return (
      <Center>
        <Skeleton my="2" w={wp("80%")} text />
        <Skeleton my="2" w={wp("80%")} text />
        <Skeleton my="2" w={wp("80%")} text />
        <Skeleton my="2" w={wp("80%")} text />
        <Skeleton my="2" w={wp("80%")} text />
      </Center>
    );
  }

  console.log({ subjectDropdownData });
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
          <Dropdown
            style={styles.dropdown}
            containerStyle={styles.shadow}
            data={examDropdownData}
            maxHeight={200}
            labelField="label"
            valueField="value"
            label="Dropdown"
            placeholder="Select Exam"
            value={selectedSubject.value}
            onChange={(item) => {
              console.log({ item });
              setSelectedExam(item.value);
            }}
            renderItem={(item) => _renderItem(item)}
            textError="Error"
          />
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
          <Dropdown
            style={styles.dropdown}
            containerStyle={styles.shadow}
            data={subjectDropdownData}
            maxHeight={200}
            labelField="label"
            valueField="value"
            label="Dropdown"
            placeholder="Select Subject"
            value={selectedSubject.value}
            onChange={(item) => {
              setSelectedSubject(item.value);
            }}
            renderItem={(item) => _renderItem(item)}
            textError="Error"
          />
        </HStack>
      </Box>
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
    </Box>
  );
};

export default Marks;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 2,
  },
  dropdown: {
    height: 50,
    marginVertical: 5,
    width: wp("50%"),
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 2,
    paddingHorizontal: 2,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
