import { Box, Center, FlatList, Skeleton } from "native-base";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";
import AppHeader from "../../../components/AppHeader";
import { useGetAllSubjectQuery } from "../../../store/services/studentApi";

import colors from "../../../theme/colors";

import SubjectCard from "./SubjectCard";

const AcademicSubject = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const { data, isLoading } = useGetAllSubjectQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionName: userInfo.session.sessionName,
    sessionId: userInfo.session._id,
  });

  return (
    <Box flex={1} safeArea>
      <AppHeader title="Subject List" />
      {isLoading ? (
        <Center>
          <Skeleton my="2" h={hp("10%")} w={wp("90%")} />
          <Skeleton my="2" h={hp("10%")} w={wp("90%")} />
          <Skeleton my="2" h={hp("10%")} w={wp("90%")} />
          <Skeleton my="2" h={hp("10%")} w={wp("90%")} />
          <Skeleton my="2" h={hp("10%")} w={wp("90%")} />
          <Skeleton my="2" h={hp("10%")} w={wp("90%")} />
          <Skeleton my="2" h={hp("10%")} w={wp("90%")} />
        </Center>
      ) : (
        <>
          {data !== undefined && data.length === 0 ? (
            <Box>
              <Text style={{ color: colors.text.primary }}>
                No Subject Found
              </Text>
            </Box>
          ) : (
            <FlatList
              mt={hp("3%")}
              borderTopLeftRadius={30}
              borderTopRightRadius={30}
              bg={colors.primaryLight}
              data={data?.data}
              renderItem={({ item, index }) => (
                <SubjectCard item={item} index={index} />
              )}
              keyExtractor={(item) => item.subject}
              showsVerticalScrollIndicator={false}
            />
          )}
        </>
      )}
    </Box>
  );
};

export default AcademicSubject;
