import React from "react";
import { Box, Select, CheckIcon, HStack, Text, Skeleton } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../../../theme/colors";
import {
  useGetBranchWiseSessionQuery,
  useGetBranchWiseSubjectQuery,
  useGetClassWiseSectionQuery,
  useGetHomeWorksQuery,
  useGetSessionWiseClassQuery,
} from "../../../store/services/teacherApi";
import { useSelector } from "react-redux";
export default function Header({ setHomeworkData }) {
  const [selectedSession, setSelectedSession] = React.useState("");
  const [selectedClass, setSelectedClass] = React.useState("");
  const [sessionName, setSessionName] = React.useState("");
  const [sessionData, setSessionData] = React.useState([]);
  const [classData, setClassData] = React.useState([]);
  const [sectionData, setSectionData] = React.useState([]);
  const [selectedSection, setSelectedSection] = React.useState("");
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
      </Box>
    </Box>
  );
}
