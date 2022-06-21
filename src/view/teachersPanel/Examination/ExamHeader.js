import React from "react";
import { Box, Select, CheckIcon, HStack, Text, Skeleton } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../../../theme/colors";
import {
  useGetBranchSessionWiseExamListQuery,
  useGetBranchWiseSessionQuery,
  useGetBranchWiseSubjectQuery,
  useGetClassWiseSectionQuery,
  useGetExamScheduleListForTeacherQuery,
  useGetFilterWiseExamMarksForTeacherQuery,
  useGetSessionWiseClassQuery,
} from "../../../store/services/teacherApi";
import { useSelector } from "react-redux";
export default function ExamHeader({
  setExamSchedule,
  setExamMarksData,
  examSchedule,
  type,
}) {
  const [selectedSession, setSelectedSession] = React.useState("");
  const [selectedClass, setSelectedClass] = React.useState("");
  const [selectedSection, setSelectedSection] = React.useState("");
  const [sessionName, setSessionName] = React.useState("");
  const [sessionData, setSessionData] = React.useState([]);
  const [classData, setClassData] = React.useState([]);
  const [sectionData, setSectionData] = React.useState([]);
  const [selectedExam, setSelectedExam] = React.useState("");
  const [examListData, setExamListData] = React.useState([]);
  const [subjectData, setSubjectData] = React.useState([]);
  const [selectedSubject, setSelectedSubject] = React.useState("");
  const userInfo = useSelector((state) => state.auth.userInfo);
  const branchId = userInfo.branch._id;
  const getBranchWiseSession = useGetBranchWiseSessionQuery({
    branchId,
  });
  const getSessionWiseClass = useGetSessionWiseClassQuery({
    sessionId: selectedSession,
  });
  const getClassWiseSection = useGetClassWiseSectionQuery({
    classId: selectedClass,
  });
  const getExamScheduleListForTeacher = useGetExamScheduleListForTeacherQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionId: selectedSession,
    classId: selectedClass,
    sectionId: selectedSection,
    teacherId: userInfo._id,
    sessionName: sessionName
  });
  const getBranchSessionWiseExamList = useGetBranchSessionWiseExamListQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionId: selectedSession,
    sessionName: sessionName
  });
  const getBranchWiseSubject = useGetBranchWiseSubjectQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionId: selectedSession,
    sessionName: sessionName
  });
  const getFilterWiseExamMarks = useGetFilterWiseExamMarksForTeacherQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionId: selectedSession,
    sessionName:sessionName,
    classId: selectedClass,
    sectionId: selectedSection,
    examId: selectedExam,
    subjectId: selectedSubject,
    });
    // console.log("getFilterWiseExamMarks=======================================>",getFilterWiseExamMarks?.data, getFilterWiseExamMarks?.error)
  React.useEffect(() => {
    if (getBranchWiseSession?.data !== undefined) {
      setSessionData(getBranchWiseSession?.data?.data);
    }
  }, [getBranchWiseSession?.data]);
  React.useEffect(() => {
    if (getSessionWiseClass?.data !== undefined) {
      setClassData(getSessionWiseClass?.data?.data);
    }
  }, [getSessionWiseClass?.data]);
  React.useEffect(() => {
    if (getClassWiseSection?.data !== undefined) {
      setSectionData(getClassWiseSection?.data?.data);
    }
  }, [getClassWiseSection?.data]);
  React.useEffect(() => {
    if (
      getExamScheduleListForTeacher?.data !== undefined &&
      getExamScheduleListForTeacher?.data[0]?.data[0]?.examSchedule !==
        undefined
    ) {
      setExamSchedule(
        getExamScheduleListForTeacher?.data[0]?.data[0]?.examSchedule
      );
    }
  }, [getExamScheduleListForTeacher?.data]);
  React.useEffect(() => {
    if (getBranchSessionWiseExamList?.data !== undefined) {
      setExamListData(getBranchSessionWiseExamList?.data);
    }
  }, [getBranchSessionWiseExamList?.data]);
  React.useEffect(() => {
    if (getBranchWiseSubject?.data !== undefined) {
      setSubjectData(getBranchWiseSubject?.data?.data);
    }
  }, [getBranchWiseSubject?.data]);
   const getSessionName= React.useCallback(() => {
    if(selectedSession !== ""){
        const res =sessionData.filter((item) => item._id === selectedSession)[0]
        ?.sessionName;
      
        setSessionName(res)
    }
    }, [selectedSession]);
    React.useEffect(() => {
        getSessionName();
    }
    , [getSessionName]);

  return (
    <Box>
      <Box w={wp("100%")} justifyContent="center" alignItems="center">
        <HStack
          h={hp("8%")}
          w={"90%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text bold fontSize={"lg"} color={colors.primary}>
            Select Session
          </Text>
          {getBranchWiseSession?.isLoading ? (
            <Skeleton style={{ width: wp("50%") }} text />
          ) : (
            <Select
              borderColor={colors.primary}
              selectedValue={selectedSession}
              minWidth="200"
              accessibilityLabel="Choose Session"
              placeholder="Choose Session"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setSelectedSession(itemValue)}
            >
              {sessionData.map((item) => (
                <Select.Item
                  key={item._id}
                  value={item._id}
                  label={item.sessionName}
                />
              ))}
            </Select>
          )}
        </HStack>
        <HStack
          h={hp("8%")}
          w={"90%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text bold fontSize={"lg"} color={colors.primary}>
            Select Class
          </Text>
          {getSessionWiseClass?.isLoading ? (
            <Skeleton style={{ width: wp("50%") }} text />
          ) : (
            <Select
              borderColor={colors.primary}
              selectedValue={selectedClass}
              minWidth="200"
              accessibilityLabel="Choose Class"
              placeholder="Choose Class"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setSelectedClass(itemValue)}
            >
              {classData.map((item) => (
                <Select.Item
                  key={item._id}
                  value={item._id}
                  label={item.className}
                />
              ))}
            </Select>
          )}
        </HStack>
        <HStack
          h={hp("8%")}
          w={"90%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Text bold fontSize={"lg"} color={colors.primary}>
            Select Section
          </Text>
          {getExamScheduleListForTeacher?.isLoading ? (
            <Skeleton style={{ width: wp("50%") }} text />
          ) : (
            <Select
              borderColor={colors.primary}
              selectedValue={selectedExam}
              minWidth="200"
              accessibilityLabel="Choose Section"
              placeholder="Choose Section"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setSelectedSection(itemValue)}
            >
              {sectionData?.map((item) => (
                <Select.Item
                  key={item._id}
                  value={item._id}
                  label={item.sectionName}
                />
              ))}
            </Select>
          )}
        </HStack>
        {type === "Marks" && (
          <>
            <HStack
              h={hp("8%")}
              w={"90%"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text bold fontSize={"lg"} color={colors.primary}>
                Select Exam
              </Text>
              {getClassWiseSection?.isLoading ? (
                <Skeleton style={{ width: wp("50%") }} text />
              ) : (
                <Select
                  borderColor={colors.primary}
                  selectedValue={selectedSection}
                  minWidth="200"
                  accessibilityLabel="Choose Exam"
                  placeholder="Choose Exam"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setSelectedSection(itemValue)}
                >
                  {examListData?.map((item) => (
                    <Select.Item
                      key={item._id}
                      value={item._id}
                      label={item.name}
                    />
                  ))}
                </Select>
              )}
            </HStack>
            <HStack
              h={hp("8%")}
              w={"90%"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text bold fontSize={"lg"} color={colors.primary}>
                Select Subject
              </Text>
              {getBranchWiseSubject?.isLoading ? (
                <Skeleton style={{ width: wp("50%") }} text />
              ) : (
                <Select
                  borderColor={colors.primary}
                  selectedValue={selectedSubject}
                  minWidth="200"
                  accessibilityLabel="Choose Subject"
                  placeholder="Choose Subject"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setSelectedSubject(itemValue)}
                >
                  {subjectData?.map((item) => (
                    <Select.Item
                      key={item._id}
                      value={item._id}
                      label={item.subjectName}
                    />
                  ))}
                </Select>
              )}
            </HStack>
          </>
        )}
      </Box>
    </Box>
  );
}
