import {
  Box,
  Center,
  CheckIcon,
  FlatList,
  HStack,
  Select,
  Skeleton,
  Text,
} from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import AppHeader from "../../../components/AppHeader";
import {
  useGetAllHomeworkEvaluationForStudentQuery,
  useGetAllSubjectQuery,
} from "../../../store/services/studentApi";
import colors from "../../../theme/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import HomeWorkCard from "./HomeWorkCard";

const HomeWork = () => {
  const [selectedSubject, setSelectedSubject] = React.useState("");

  const userInfo = useSelector((state) => state.auth.userInfo);
  const { data, isLoading } = useGetAllSubjectQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionName: userInfo.session.sessionName,
    sessionId: userInfo.session._id,
  });
 
  const getHomeWork = useGetAllHomeworkEvaluationForStudentQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionName: userInfo.session.sessionName,
    sessionId: userInfo.session._id,
    classId: userInfo.class._id,
    sectionId: userInfo.section._id,
    subjectId: selectedSubject,
    studentId: userInfo._id,
  });

  return (
    <Box flex={1} safeArea>
      <AppHeader title="Home Work" />
      <Box p="3">
        <HStack
          space={6}
          justifyContent="space-between"
          w="100%"
          alignItems={"center"}
        >
          <Text bold color={colors.primary}>
            Select Subject
          </Text>
          <Select
            borderColor={colors.primary}
            selectedValue={selectedSubject}
            minWidth="200"
            accessibilityLabel="Choose Subject"
            placeholder="Choose Subject"
            _selectedItem={{
              bg: colors.primary,
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setSelectedSubject(itemValue)}
          >
            {data?.data?.map((item) => (
              <Select.Item
                key={item._id}
                label={item.subjectName}
                value={item._id}
              />
            ))}
          </Select>
        </HStack>
      </Box>
      {isLoading ? (
        <Box
          mt={"2"}
          flex={"1"}
          bg={colors.primaryLight}
          borderTopLeftRadius={"30"}
          borderTopRightRadius={"30"}
        >
          <Center my="3">
            <Skeleton w={wp("90%")} h={hp("30%")} />
          </Center>
          <Center my="3">
            <Skeleton w={wp("90%")} h={hp("30%")} />
          </Center>
        </Box>
      ) : (
        <>
          {getHomeWork?.data?.length === 0 ? (
            <Box
              flex={"1"}
              mt={"2"}
              bg={colors.primaryLight}
              borderTopLeftRadius={"30"}
              borderTopRightRadius={"30"}
            >
              <Text
                bold
                fontSize="lg"
                textAlign={"center"}
                mt="3"
                color={colors.primary}
              >
                No Home Work Found
              </Text>
            </Box>
          ) : (
            <FlatList
              mt={"2"}
              data={getHomeWork?.data?.data}
              renderItem={({ item, index }) => (
                <HomeWorkCard homework={item} index={index} />
              )}
              keyExtractor={(index) => index.toString()}
              showsVerticalScrollIndicator={false}
              bg={colors.primaryLight}
              borderTopLeftRadius={"30"}
              borderTopRightRadius={"30"}
            />
          )}
        </>
      )}
    </Box>
  );
};

export default HomeWork;
