import React from "react";
import {
  Box,
  Select,
  CheckIcon,
  HStack,
  Text,
  Skeleton,
  ScrollView,
} from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../../../theme/colors";
import {
  useGetBranchWiseSessionQuery,
  useGetClassWiseSectionQuery,
  useGetSessionWiseClassQuery,
  useGetStudentAttendanceForAdminQuery,
} from "../../../store/services/teacherApi";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import { useSelector } from "react-redux";
import getMarkedDates from "../../../utils/getMarkedDates";
import StudentPieChartScreen from "./StudentPieChartScreen";
export default function StudentReport() {
  const [selectedSession, setSelectedSession] = React.useState("");
  const [selectedClass, setSelectedClass] = React.useState("");
  const [selectedSection, setSelectedSection] = React.useState("");
  const [selectedStudent, setSelectedStudent] = React.useState("");
  const [attendanceData, setAttendanceData] = React.useState([]);
  const [selectedStudentData, setSelectedStudentData] = React.useState([]);
  const [sessionName, setSessionName] = React.useState("");
  const [sessionData, setSessionData] = React.useState([]);
  const [classData, setClassData] = React.useState([]);
  const [sectionData, setSectionData] = React.useState([]);
  const [selectedMonth, setSelectedMonth] = React.useState(
    moment(new Date()).format("YYYY-MM")
  );
  const [pieData, setPieData] = React.useState([]);
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

  const { data, isLoading } = useGetStudentAttendanceForAdminQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionName: sessionName,
    sessionId: selectedSession,
    classId: selectedClass,
    sectionId: selectedSection,
    month: selectedMonth.slice(0, 7),
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
    if (data !== undefined) {
      setAttendanceData(data);
    }
  }, [data]);
  React.useEffect(() => {
    if (selectedStudent !== "") {
      const res = attendanceData.filter((item) => item._id === selectedStudent);
      if (res[0]?.data?.length > 0) {
        setPieData(res[0]);
        setSelectedStudentData(getMarkedDates(res[0].data));
      }
    }
  }, [selectedStudent]);

  return (
    <ScrollView flex="1">
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
            Select Student
          </Text>
          {isLoading ? (
            <Skeleton style={{ width: wp("50%") }} text />
          ) : (
            <Select
              borderColor={colors.primary}
              selectedValue={selectedStudent}
              minWidth="200"
              accessibilityLabel="Choose Student"
              placeholder="Choose Student"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setSelectedStudent(itemValue)}
            >
              {attendanceData.map((item) => (
                <Select.Item
                  key={item._id}
                  value={item._id}
                  label={`${item.firstName} ${item.lastName}`}
                />
              ))}
            </Select>
          )}
        </HStack>
        {isLoading ? (
          <Skeleton style={{ width: wp("100%"), height: hp("50%") }} text />
        ) : (
          <Box w="100%" my="3">
            <Calendar
              onMonthChange={(month) => {
                setSelectedMonth(month.dateString);
              }}
              markingType={"period"}
              markedDates={selectedStudentData}
            />
          </Box>
        )}
        <StudentPieChartScreen isLoading={isLoading} data={pieData} />
      </Box>
    </ScrollView>
  );
}
