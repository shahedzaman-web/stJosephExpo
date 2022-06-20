import React from "react";

import {
  FlatList,
  ZStack,
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
import data from "./cardData";
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
  const [branchData, setBranchData] = React.useState([]);
  const [classData, setClassData] = React.useState([]);
  const [sectionData, setSectionData] = React.useState([]);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const branchId = userInfo.branch._id;
  console.log({ selectedClass });
  const getBranchWiseSession = useGetBranchWiseSessionQuery({
    branchId,
  });
  const getSessionWiseClass = useGetSessionWiseClassQuery({
    sessionId: selectedSession,
  });
  const getClassWiseSection = useGetClassWiseSectionQuery({
    classId: selectedClass,
  });
  const { data, isLoading ,error} = useGetTeacherScheduleListQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionId: selectedSession,
    classId: selectedClass,
    sectionId: selectedSection,
    teacherId: userInfo._id,
    sessionName:  sectionData.filter((item) => item._id === selectedSection)[0]?.sectionName
  });
  console.log(
    "getBranchWiseSession==================>",
    getBranchWiseSession?.data?.data
  );
  console.log(
    "getSessionWiseClass==================>",
    getSessionWiseClass?.data
  );
  console.log(
    "getClassWiseSection==================>",
    getClassWiseSection?.data
  );
  console.log("getTeacherScheduleList==================>", error);
  console.log("getTeacherScheduleList==================>", data);
  console.log("sectionName==================>", sectionData.filter((item) => item._id === selectedSection)[0]?.sectionName);
  React.useEffect(() => {
    if (getBranchWiseSession?.data !== undefined) {
      setBranchData(getBranchWiseSession?.data?.data);
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
  return (
    <ZStack
      borderTopLeftRadius={"30"}
      borderTopRightRadius={"30"}
      mt={hp("5%")}
      p="3"
      bg={colors.primaryLight}
      flex={1}
    >
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
              {branchData.map((item) => (
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
      </Box>
    </ZStack>
  );
};

export default Academic;
