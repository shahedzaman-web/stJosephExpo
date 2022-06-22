import React from "react";
import { useSelector } from "react-redux";
import {
  useGetAttendanceQuery,
  useGetBranchWiseSessionQuery,
} from "../../../store/services/teacherApi";
import { Box, CheckIcon, HStack, Select, Skeleton, Text } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../../../theme/colors";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import getTeacherAttendanceData from "../../../utils/getTeacherAttendanceData";

export default function TeacherReport() {
  const [selectedSession, setSelectedSession] = React.useState("");
  const [sessionName, setSessionName] = React.useState("");
  const [sessionData, setSessionData] = React.useState([]);
  const [selectedMonth, setSelectedMonth] = React.useState(
    moment(new Date()).format("YYYY-MM")
  );

  const [attendanceData, setAttendanceData] = React.useState([]);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const branchId = userInfo.branch._id;

  React.useEffect(() => {
    if (data !== undefined && selectedSession !== "" && data.length > 0) {
      console.log("useGetAttendanceQuery=============>", data[0]?.data);
      setAttendanceData(getTeacherAttendanceData(data[0]?.data));
    }
  }, [data]);
  console.log("attendanceData=====================>", attendanceData);
  const getBranchWiseSession = useGetBranchWiseSessionQuery({
    branchId,
  });
  const { data, isLoading } = useGetAttendanceQuery({
    branchId: branchId,
    sessionId: selectedSession,
    branchName: userInfo.branch.branchName,
    sessionName: sessionName,
    employeeId: userInfo._id,
    month: selectedMonth,
  });

  React.useEffect(() => {
    if (getBranchWiseSession?.data !== undefined) {
      setSessionData(getBranchWiseSession?.data?.data);
    }
  }, [getBranchWiseSession?.data]);
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
    <Box flex="1" p="2">
      <HStack
        h={hp("8%")}
        w={"100%"}
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
        <Box w="100%" my="3">
      {isLoading ? (
        <Skeleton style={{ width: wp("100%"),height: hp("40%") }} text />
      ) : (
          <Calendar
            onMonthChange={(month) => {
              setSelectedMonth(month.dateString);
            }}
            markingType={"period"}
            markedDates={attendanceData}
          />
      )}
        </Box>
    </Box>
  );
}
