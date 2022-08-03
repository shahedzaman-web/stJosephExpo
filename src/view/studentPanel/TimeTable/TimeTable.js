import { Center, FlatList, Skeleton, Text } from "native-base";
import React from "react";
import ClassCard from "./ClassCard";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import HeaderComponent from "./HeaderComponent";

import colors from "../../../theme/colors";

import moment from "moment";
import { useSelector } from "react-redux";
import { useGetClassScheduleQuery } from "../../../store/services/studentApi";
const TimeTable = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);

  const payload = {
    branchName: userInfo?.branch?.branchName,
    branchId: userInfo?.branch?._id,
    sessionName: userInfo?.session?.sessionName,
    sessionId: userInfo?.session?._id,
    classId: userInfo?.class?._id,
    sectionId: userInfo?.section?._id,
  };
  let today = moment().format("dddd").toLowerCase();

  const { data, isLoading } = useGetClassScheduleQuery(payload);

  if (isLoading) {
    return (
      <Center>
        <Skeleton my="2" w={wp("80%")} text />
        <Skeleton my="2" w={wp("80%")} text />
        <Skeleton my="2" w={wp("80%")} text />
        <Skeleton my="2" w={wp("80%")} text />
        <Skeleton my="2" w={wp("80%")} text />
        <Skeleton my="2" w={wp("80%")} text />
      </Center>
    );
  }
  const list = data[0]?.data[0];
  let todaysClass = [];
  list !== undefined && list[today];

  return (
    <>
      {todaysClass.length === 0  ?  (
        <Text
          bold
          fontSize={"xl"}
          alignItems="center"
          justifyContent={"center"}
          color={colors.primary}
        >
          No Class for today.
        </Text>
      ) : (
        <FlatList
          alignSelf={"center"}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <HeaderComponent
              userInfo={userInfo}
              totalClass={todaysClass.length}
            />
          )}
          // ListFooterComponent={() => <FooterComponent />}
          data={todaysClass}
          bg={colors.primaryLight}
          renderItem={({ item, index }) => (
            <ClassCard item={item} index={index} />
          )}
          keyExtractor={(item) => item.time}
        />
      )}
    </>
  );
};

export default TimeTable;
