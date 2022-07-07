import { Box, Button, FlatList, ScrollView, Spinner, Text } from "native-base";
import React from "react";
import colors from "../../../theme/colors";
import AddMarksCard from "./AddMarksCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ExamHeader from "./ExamHeader";
import { useAddSubjectWiseMarksMutation } from "../../../store/services/teacherApi";
import Toast from "react-native-toast-message";
export default function AddMarks() {
  const [examMarksData, setExamMarksData] = React.useState([]);
  const [studentData, setStudentData] = React.useState([]);
  const [examScheduleData, setExamScheduleData] = React.useState([]);
  const [isExamScheduleDataEmpty, setIsExamScheduleDataEmpty] =
    React.useState(true);
  const [getSubmitData, setGetSubmitData] = React.useState({});
  const [addSubjectWiseMarks, {isLoading}] = useAddSubjectWiseMarksMutation();

  console.log("examScheduleData==========================>", examScheduleData);

  const handleSubmit = async () => {
    try {
      const payload = {
        branchName: getSubmitData.branchName,
        branchId: getSubmitData.branchId,
        sessionName: getSubmitData.sessionName,
        sessionId: getSubmitData.sessionId,
        classId: getSubmitData.classId,
        sectionId: getSubmitData.sectionId,
        examId: getSubmitData.examId,
        subjectId: getSubmitData.subjectId,
        marks: examMarksData,
      };
      const { data, error } = await addSubjectWiseMarks(payload);
      if (data.message === "Successfully Added") {
        Toast.show({
          type: "success",
          text1: data.message,
        });
      } else {
        Toast.show({
          type: "danger",
          text1: "Something went wrong",
        });
      }
    } catch (error) {
      console.log("error==========================>", error);
    }
  };
  return (
    <Box flex={"1"}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ExamHeader
          setGetSubmitData={setGetSubmitData}
          setExamMarksData={setExamMarksData}
          setStudentData={setStudentData}
          setExamScheduleData={setExamScheduleData}
          setIsExamScheduleDataEmpty={setIsExamScheduleDataEmpty}
          type="AddMarks"
        />
        {isExamScheduleDataEmpty && (
          <Box flex={"1"} justifyContent={"center"} alignItems={"center"}>
            <Text>No Data Found</Text>
          </Box>
        )}
        <>
          {!isExamScheduleDataEmpty && (
            <FlatList
              contentContainerStyle={{ paddingBottom: "2%" }}
              mt="6"
              bg={colors.primaryLight}
              py="2"
              showsVerticalScrollIndicator={false}
              borderTopLeftRadius={"30"}
              borderTopRightRadius={"30"}
              data={studentData}
              renderItem={({ item, index }) => (
                <AddMarksCard
                  examScheduleData={examScheduleData}
                  setExamMarksData={setExamMarksData}
                  examMarksData={examMarksData}
                  item={item}
                  index={index}
                />
              )}
              keyExtractor={(item) => item.subject}
            />
          )}
        </>
        <Button
          my={2}
          onPress={handleSubmit}
          variant={"unstyled"}
          w={wp("92%")}
          alignSelf={"center"}
          h={hp("8%")}
          alignItems={"center"}
          justifyContent={"center"}
          bg={colors.primary}
        >
          {isLoading ? (
            <Spinner size="small" color={colors.white} />
          ) : (
            <Text color={colors.white} fontSize={"lg"} bold>
              Submit
            </Text>
          )}
        </Button>
      </ScrollView>
    </Box>
  );
}
