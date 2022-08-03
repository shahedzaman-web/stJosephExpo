import { Box, Center, FlatList, Skeleton, Text } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import AppHeader from "../../../components/AppHeader";
import { useGetEmployeeEventQuery } from "../../../store/services/teacherApi";
import colors from "../../../theme/colors";
import EventCard from "./EventCard";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function Events() {
  const [eventsData, setEventsData] = React.useState([]);
  const branchId = useSelector((state) => state.auth.userInfo.branch._id);
  const { isLoading, data, error } = useGetEmployeeEventQuery(branchId);
  React.useEffect(() => {
    if (data !== undefined) {
      setEventsData(data[0].data);
    }
  }, [data]);
  return (
    <Box flex={1}>
      <AppHeader title="Events" />
      {isLoading ? (
        <Box
          flex={"1"}
          mt="6"
          bg={colors.primaryLight}
          py="2"
          borderTopLeftRadius={"30"}
          borderTopRightRadius={"30"}
        >
          <Center my="2">
            <Skeleton borderRadius={"md"} my="2" h={hp("10%")} w={wp("90%")} />
          </Center>
          <Center my="2">
            <Skeleton borderRadius={"md"} my="2" h={hp("10%")} w={wp("90%")} />
          </Center>
          <Center my="2">
            <Skeleton borderRadius={"md"} my="2" h={hp("10%")} w={wp("90%")} />
          </Center>
          <Center my="2">
            <Skeleton borderRadius={"md"} my="2" h={hp("10%")} w={wp("90%")} />
          </Center>
          <Center my="2">
            <Skeleton borderRadius={"md"} my="2" h={hp("10%")} w={wp("90%")} />
          </Center>
          <Center my="2">
            <Skeleton borderRadius={"md"} my="2" h={hp("10%")} w={wp("90%")} />
          </Center>
        </Box>
      ) : (
        <>
          {eventsData.length === 0 ? (
            <Box
              flex={"1"}
              mt="6"
              bg={colors.primaryLight}
              py="2"
              borderTopLeftRadius={"30"}
              borderTopRightRadius={"30"}
            >
              <Text
                bold
                mt="5"
                fontSize="lg"
                textAlign={"center"}
              >No Events Found!</Text>
            </Box>
          ) : (
            <FlatList
              mt={"6"}
              pt="4"
              refreshing={isLoading}
              data={eventsData}
              renderItem={({ item, index }) => (
                <EventCard item={item} index={index} />
              )}
              keyExtractor={(item) => item.title}
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
}
