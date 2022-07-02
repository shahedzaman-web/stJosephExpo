import React from "react";
import {
  Box,
  Button,
  CheckIcon,
  FlatList,
  HStack,
  IconButton,
  ScrollView,
  Select,
  Skeleton,
  Spinner,
  Text,
} from "native-base";
import colors from "../../../../theme/colors";
import AddEvaluationCard from "./AddEvaluationCard";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  useAddHomeworkEvaluationMutation,
  useGetBranchWiseSessionQuery,
  useGetBranchWiseSubjectQuery,
  useGetClassWiseSectionQuery,
  useGetHomeWorksQuery,
  useGetSessionWiseClassQuery,
  useGetStudentAsFilterQuery,
} from "../../../../store/services/teacherApi";
import Toast from "react-native-toast-message";
import { useSelector } from "react-redux";
import moment from "moment";

export default function AddEvaluation() {
  const [studentData, setStudentData] = React.useState([]);
  const [evaluationData, setEvaluationData] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState(
    moment(new Date()).format("YYYY-MM-DD")
  );
  const [datePickerVisible, setDatePickerVisible] = React.useState(false);
  const [selectedSession, setSelectedSession] = React.useState("");
  const [selectedClass, setSelectedClass] = React.useState("");
  const [sessionName, setSessionName] = React.useState("");
  const [sessionData, setSessionData] = React.useState([]);
  const [classData, setClassData] = React.useState([]);
  const [sectionData, setSectionData] = React.useState([]);
  const [selectedSection, setSelectedSection] = React.useState("");
  const [subjectData, setSubjectData] = React.useState([]);
  const [selectedSubject, setSelectedSubject] = React.useState("");
  const [homeworkData, setHomeworkData] = React.useState([]);
  const [selectedHomework, setSelectedHomework] = React.useState("");
  // const [isLoading, setIsLoading] = React.useState(false);
  const [addHomeworkEvaluation, { isLoading }] =
    useAddHomeworkEvaluationMutation();
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

  const getBranchWiseSubject = useGetBranchWiseSubjectQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionId: selectedSession,
    sessionName: sessionName,
  });
  const getHomeWorks = useGetHomeWorksQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionName: sessionName,
    sessionId: selectedSession,
    classId: selectedClass,
    sectionId: selectedSection,
    subjectId: selectedSubject,
  });
  React.useEffect(() => {
    if (getHomeWorks.data !== undefined) {
      setHomeworkData(getHomeWorks.data.data);
    }
  }, [getHomeWorks.data]);

  const getStudentAsFilter = useGetStudentAsFilterQuery({
    branchId: branchId,
    branchName: userInfo.branch.branchName,
    sessionName: sessionName,
    sessionId: selectedSession,
    classId: selectedClass,
    sectionId: selectedSection,
  });

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
    if (getBranchWiseSubject?.data !== undefined) {
      setSubjectData(getBranchWiseSubject?.data?.data);
    }
  }, [getBranchWiseSubject?.data]);
  const getSessionName = React.useCallback(() => {
    if (selectedSession !== "") {
      const res = sessionData.filter((item) => item._id === selectedSession)[0]
        ?.sessionName;

      setSessionName(res);
    }
  }, [selectedSession]);
  React.useEffect(() => {
    getSessionName();
  }, [getSessionName]);

  React.useEffect(() => {
    if (getStudentAsFilter?.data !== undefined) {
      setStudentData(getStudentAsFilter?.data?.data);
      const details = getStudentAsFilter?.data?.data.map((item) => {
        return {
          studentId: item._id,
          rank: "",
          remarks: "",
          status: "",
        };
      });

      setEvaluationData(details);
    }
  }, [getStudentAsFilter]);
  const handleConfirmDate = (date) => {
    setDatePickerVisible(false);
    setSelectedDate(moment(date).format("YYYY-MM-DD"));
  };

  const handleSubmit = async () => {
    if (
      selectedHomework === "" ||
      selectedSubject === "" ||
      selectedSection === "" ||
      selectedClass === "" ||
      selectedSession === "" ||
      selectedDate === ""
    ) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Please fill all the fields",
      });
    } else {
      try {
        const payload = {
          branchName: userInfo.branch.branchName,
          branchId: userInfo.branch._id,
          sessionName: sessionName,
          sessionId: selectedSession,
          classId: selectedClass,
          sectionId: selectedSection,
          subjectId: selectedSubject,
          homeworkId: selectedHomework,
          evaluationDate: selectedDate,
          evaluationDetails: evaluationData,
        };
        const { data, error } = await addHomeworkEvaluation(payload);
        console.log("payload===========================>", payload);

        console.log(
          "addHomeworkEvaluation===================================>",
          data,
          error
        );
        if (data?.message === "Successfully Added") {
          Toast.show({
            type: "success",
            text1: "Evaluation added successfully.",
          });
        } else {
          Toast.show({
            type: "error",
            text1: "Something went wrong",
          });
        }
      } catch (error) {
        console.log("error===============================>", error);
      }
    }
  };

  return (
    <ScrollView flex={"1"}>
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
            {getClassWiseSection?.isLoading ? (
              <Skeleton style={{ width: wp("50%") }} text />
            ) : (
              <Select
                borderColor={colors.primary}
                selectedValue={selectedSection}
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
          <HStack
            h={hp("8%")}
            w={"90%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text bold fontSize={"lg"} color={colors.primary}>
              HomeWork
            </Text>
            {getHomeWorks?.isLoading ? (
              <Skeleton style={{ width: wp("50%") }} text />
            ) : (
              <Select
                borderColor={colors.primary}
                selectedValue={selectedHomework}
                minWidth="200"
                accessibilityLabel="Choose Homework"
                placeholder="Choose Homework"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => setSelectedHomework(itemValue)}
              >
                {homeworkData?.map((item) => (
                  <Select.Item
                    key={item._id}
                    value={item._id}
                    label={item.title}
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
              Evaluation Date
            </Text>

            <IconButton
              onPress={() => setDatePickerVisible(true)}
              colorScheme={colors.primary}
              variant={"unstyled"}
              _icon={{
                as: FontAwesome,
                name: "calendar",
                color: colors.primary,
              }}
            />
            <DateTimePickerModal
              isVisible={datePickerVisible}
              mode="date"
              onConfirm={handleConfirmDate}
              onCancel={() => setDatePickerVisible(false)}
            />
            <HStack>
              <Text bold fontSize={"lg"} color={colors.primary}>
                {moment(selectedDate).format("DD-MM-YYYY")}
              </Text>
            </HStack>
          </HStack>
        </Box>
      </Box>
      <FlatList
        mt="6"
        py="2"
        showsVerticalScrollIndicator={false}
        borderTopLeftRadius={"30"}
        borderTopRightRadius={"30"}
        data={studentData}
        renderItem={({ item, index }) => (
          <AddEvaluationCard
            setEvaluationData={setEvaluationData}
            evaluationData={evaluationData}
            item={item}
            index={index}
          />
        )}
        keyExtractor={(item) => item.subject}
      />
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
  );
}
