import React from "react";
import {
  FlatList,
  Box,
  Select,
  CheckIcon,
  HStack,
  Text,
  Skeleton,
} from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../../../theme/colors";
import AcademicCard from "./AcademicCard";

import {
  useGetBranchWiseSessionQuery,
  useGetClassWiseSectionQuery,
  useGetSessionWiseClassQuery,
  useGetTeacherScheduleListQuery,
} from "../../../store/services/teacherApi";
import { useSelector } from "react-redux";
const Academic = () => {
  const [selectedSession, setSelectedSession] = React.useState("");
  const [selectedClass, setSelectedClass] = React.useState("");
  const [selectedSection, setSelectedSection] = React.useState("");
  const [selectedDay, setSelectedDay] = React.useState("");
  const [sessionData, setSessionData] = React.useState([]);
  const [classScheduleData, setClassScheduleData] = React.useState([]);
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
  const { data} = useGetTeacherScheduleListQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionId: selectedSession,
    classId: selectedClass,
    sectionId: selectedSection,
    teacherId: userInfo._id,
    sessionName: sessionData.filter((item) => item._id === selectedSession)[0]
      ?.sessionName,
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
    if (selectedDay !== "" && data !== undefined && data.length > 0) {
      const res = data[0];
      setClassScheduleData(res[selectedDay]);
    }
  }, [selectedDay, data]);

  return (
    <Box flex={"1"}>
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
              {sectionData.map((item) => (
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
            Select Day
          </Text>

          <Select
            borderColor={colors.primary}
            selectedValue={selectedDay}
            minWidth="200"
            accessibilityLabel="Choose Day"
            placeholder="Choose Day"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setSelectedDay(itemValue)}
          >
            <Select.Item value="saturday" label="Saturday" />
            <Select.Item value="sunday" label="Sunday" />
            <Select.Item value="monday" label="Monday" />
            <Select.Item value="tuesday" label="Tuesday" />
            <Select.Item value="wednesday" label="Wednesday" />
            <Select.Item value="thursday" label="Thursday" />
            <Select.Item value="friday" label="Friday" />
          </Select>
        </HStack>
      </Box>

      <FlatList
      mt="4"
        justifySelf={"center"}
        data={classScheduleData}
        renderItem={({ item, index }) => (
          <AcademicCard data={item} index={index} />
        )}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        borderTopLeftRadius={30}
        borderTopRightRadius={30}
        bg={colors.primaryLight}
      />
    </Box>
  );
};

export default Academic;
