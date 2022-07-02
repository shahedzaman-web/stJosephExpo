import {
  Box,
  CheckIcon,
  FlatList,
  HStack,
  Select,
  Skeleton,
  Text,
} from "native-base";
import React from "react";
import AppHeader from "../../../components/AppHeader";
import colors from "../../../theme/colors";
import StudentCard from "./StudentCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";
import {
  useGetBranchWiseSessionQuery,
  useGetClassWiseSectionQuery,
  useGetSessionWiseClassQuery,
  useGetAllStudentQuery,
} from "../../../store/services/teacherApi";

const StudentDetails = () => {
  const [studentData, setStudentData] = React.useState([]);
  const [selectedSession, setSelectedSession] = React.useState("");
  const [selectedClass, setSelectedClass] = React.useState("");
  const [selectedSection, setSelectedSection] = React.useState("");
  const [sessionName, setSessionName] = React.useState("");
  const [sessionData, setSessionData] = React.useState([]);
  const [classData, setClassData] = React.useState([]);
  const [sectionData, setSectionData] = React.useState([]);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const branchId = userInfo.branch._id;
  const getAllStudent = useGetAllStudentQuery({
    branchName: userInfo.branch.branchName,
    branchId: branchId,
    classId: selectedClass,
    sectionId: selectedSection,
    sessionName: sessionName,
  });
  console.log("getAllStudent===========================>", getAllStudent);
  React.useEffect(() => {
    if (getAllStudent.data !== undefined) {
      setStudentData(getAllStudent.data.data);
    }
  }, [getAllStudent.data]);
  const getBranchWiseSession = useGetBranchWiseSessionQuery({
    branchId,
  });
  const getSessionWiseClass = useGetSessionWiseClassQuery({
    sessionId: selectedSession,
  });
  const getClassWiseSection = useGetClassWiseSectionQuery({
    classId: selectedClass,
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

  return (
    <Box flex={1}>
      <AppHeader title="Student Details" />
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
        </Box>
      </Box>
      <FlatList
        mt={"6"}
        px="3"
        showsVerticalScrollIndicator={false}
        bg={colors.primaryLight}
        borderTopLeftRadius={"30"}
        borderTopRightRadius={"30"}
        w="100%"
        data={studentData}
        renderItem={({ item, index }) => (
          <StudentCard item={item} index={index} />
        )}
        keyExtractor={(item) => item.name}
      />
    </Box>
  );
};

export default StudentDetails;
