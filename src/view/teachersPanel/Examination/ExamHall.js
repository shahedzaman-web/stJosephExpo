import React from "react";
import { FlatList } from "native-base";
import { useGetAllHallQuery } from "../../../store/services/teacherApi";
import { useSelector } from "react-redux";
import ExamHallCard from "./ExamHallCard";
import colors from "../../../theme/colors";

export default function ExamHall() {
  const [hallData, setHallData] = React.useState([]);
  const userInfo = useSelector((state) => state.auth.userInfo);
  const { data, error, isLoading } = useGetAllHallQuery({
    branchId: userInfo.branch._id,
  });

  console.log({ error });
  React.useEffect(() => {
    if (data !== undefined) {
      console.log("data=====================>", data?.data);
      setHallData(data?.data);
    }
  }, [data]);

  if (isLoading) {
    return <></>;
  }

  
  return (
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
  );
}

