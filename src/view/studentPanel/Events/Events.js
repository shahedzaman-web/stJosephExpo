import { Box, Center, FlatList, Skeleton } from "native-base";
import React from "react";
import AppHeader from "../../../components/AppHeader";
import colors from "../../../theme/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import EventCard from "./EventCard";
import { useSelector } from "react-redux";
import { useGetStudentEventQuery } from "../../../store/services/studentApi";
const Events = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const { data, isLoading } = useGetStudentEventQuery({
    branchId: userInfo.branch._id,
    classId: userInfo.class._id,
  });

  if (isLoading) {
    return <Center safeArea>
      <Skeleton w={wp("80%")} h={hp("5%")} />
      <Skeleton w={wp("80%")} h={hp("5%")} />
      <Skeleton w={wp("80%")} h={hp("5%")} />
      <Skeleton w={wp("80%")} h={hp("5%")} />
      <Skeleton w={wp("80%")} h={hp("5%")} />
    </Center>;
  }
  return (
    <Box flex={1} safeArea>
      <AppHeader title="Events" />
      <FlatList
        mt={"6"}
        data={data[0]?.data}
        renderItem={({ item, index }) => (
          <EventCard item={item} index={index} />
        )}
        keyExtractor={(index) => index.toString()}
        showsVerticalScrollIndicator={false}
        bg={colors.primaryLight}
        borderTopLeftRadius={"30"}
        borderTopRightRadius={"30"}
      />
    </Box>
  );
};

export default Events;
