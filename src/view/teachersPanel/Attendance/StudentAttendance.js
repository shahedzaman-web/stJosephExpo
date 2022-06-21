import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import colors from "../../../theme/colors";
import {
  Box,
  Select,
  CheckIcon,
  HStack,
  Text,
  Skeleton,
  FlatList,
  Button,
} from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  useGetBranchWiseSessionQuery,
  useGetClassWiseSectionQuery,
  useGetSessionWiseClassQuery,
  useGetStudentAsFilterQuery,
} from "../../../store/services/teacherApi";
import AttendanceCard from "./AttendanceCard";
import { useSelector } from "react-redux";
import moment from "moment";
export default function StudentAttendance() {
  const [studentData, setStudentData] = React.useState([]);
  const [selectedDay, setSelectedDay] = React.useState(
    moment(new Date()).format("DD-MM-YYYY")
  );
  const [datePickerVisible, setDatePickerVisible] = React.useState(false);
  const [selectedSession, setSelectedSession] = React.useState("");
  const [selectedClass, setSelectedClass] = React.useState("");
  const [selectedSection, setSelectedSection] = React.useState("");
  const [sessionName, setSessionName] = React.useState("");
  const [sessionData, setSessionData] = React.useState([]);
  const [classData, setClassData] = React.useState([]);
  const [sectionData, setSectionData] = React.useState([]);
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
    }
  }, [getStudentAsFilter]);
  const handleConfirmDate = (date) => {
    setDatePickerVisible(false);
    setSelectedDay(moment(date).format("DD-MM-YYYY"));
  };
  
  return (
    <Box flex={"1"}>
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
              Select date
            </Text>
            <Button
              variant={"unstyled"}
              onPress={() => setDatePickerVisible(true)}
            >
              <HStack>
                <FontAwesome name="calendar" size={24} color={colors.primary} />
                <Text ml="2" color={colors.primary}>
                  {selectedDay}
                </Text>
              </HStack>
            </Button>

            <DateTimePickerModal
              isVisible={datePickerVisible}
              mode="date"
              onConfirm={handleConfirmDate}
              onCancel={() => setDatePickerVisible(false)}
            />
          </HStack>
        </Box>
      </Box>
      {getStudentAsFilter?.isLoading && studentData.length !== 0 ? (
        <Box></Box>
      ) : (
        <FlatList
          flex={1}
          mt={"6"}
          px="3"
          showsVerticalScrollIndicator={false}
          bg={colors.primaryLight}
          borderTopLeftRadius={"30"}
          borderTopRightRadius={"30"}
          w="100%"
          data={studentData}
          renderItem={({ item, index }) => (
            <AttendanceCard item={item} index={index} />
          )}
          keyExtractor={(item) => item.roll.toString()}
        />
      )}
    </Box>
  );
}
