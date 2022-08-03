import React from "react";
import { Box, Center, FlatList, Skeleton, Text } from "native-base";
import { useGetAllHallQuery } from "../../../store/services/teacherApi";
import { useSelector } from "react-redux";
import ExamHallCard from "./ExamHallCard";
import colors from "../../../theme/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
export default function ExamHall() {
  const [hallData, setHallData] = React.useState([]);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const { data, error, isLoading } = useGetAllHallQuery({
    branchId: userInfo.branch._id,
  });

  React.useEffect(() => {
    if (data !== undefined) {
      //  console.log("data=====================>", data?.data);
      setHallData(data?.data);
    }
  }, [data]);

  if (isLoading) {
    return (
      <Box
        flex={"1"}
        mt="6"
        bg={colors.primaryLight}
        py="2"
        borderTopLeftRadius={"30"}
        borderTopRightRadius={"30"}
      >
        <Center>
          <Skeleton borderRadius={"md"} my="2" h={hp("10%")} w={wp("90%")} />
          <Skeleton borderRadius={"md"} my="2" h={hp("10%")} w={wp("90%")} />
          <Skeleton borderRadius={"md"} my="2" h={hp("10%")} w={wp("90%")} />
          <Skeleton borderRadius={"md"} my="2" h={hp("10%")} w={wp("90%")} />
          <Skeleton borderRadius={"md"} my="2" h={hp("10%")} w={wp("90%")} />
          <Skeleton borderRadius={"md"} my="2" h={hp("10%")} w={wp("90%")} />
        </Center>
      </Box>
    );
  }

  return (
    <>
      {hallData.length === 0 ? (
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
          style={{ color: colors.primary }}>No Data Found!</Text>
        </Box>
      ) : (
        <FlatList
          flex={"1"}
          data={hallData}
          mt="6"
          bg={colors.primaryLight}
          py="2"
          showsVerticalScrollIndicator={false}
          borderTopLeftRadius={"30"}
          borderTopRightRadius={"30"}
          renderItem={({ item, index }) => (
            <ExamHallCard item={item} index={index} />
          )}
          keyExtractor={(index) => index.toString()}
        />
      )}
    </>
  );
}
