import { PieChart } from "react-native-svg-charts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, HStack, Text, VStack } from "native-base";
import colors from "../../../theme/colors";
import React from "react";
export default function StudentPieChartScreen({ data, isLoading }) {
  const [pieData, setPieData] = React.useState([]);
console.log("data===================================>",data);
  const sliceColor = ["#3dcf8b", "#fa4e71", "#fec502"];
  const renderPieChartData = React.useCallback(() => {
    if (data !== undefined) {
      const attendanceData = data?.data;

      if (attendanceData !== undefined) {
        const present = attendanceData?.filter(
          (item) => item.status === "present"
        );
        const absent = attendanceData?.filter(
          (item) => item.status === "absent"
        );
        const late = attendanceData?.filter((item) => item.status === "late");
        const dataArray = [present?.length, absent?.length, late?.length];

        const totalWorkingDays = dataArray.reduce((a, b) => a + b, 0);
        const presentPercentageRes = (present?.length / totalWorkingDays) * 100;
        const absentPercentageRes = (absent?.length / totalWorkingDays) * 100;
        const latePercentageRes = (late?.length / totalWorkingDays) * 100;
        const pieDataRes = [
          Math.round(presentPercentageRes),
          Math.round(absentPercentageRes),
          Math.round(latePercentageRes),
        ];
        setPieData(pieDataRes);
      }
    }
  }, [data]);

  React.useEffect(() => {
    renderPieChartData();
  }, [renderPieChartData]);

  if (isLoading) {
    return <></>;
  }
  const randomColor = () =>
    ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(
      0,
      7
    );

  const chartData = pieData
    .filter((value) => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: sliceColor[index],
       
      },
      key: `pie-${index}`,
    }));

  return (
    <HStack justifyContent={"space-between"} py="8">
      <PieChart
        style={{ width: wp("50%"), height: hp("25%") }}
        data={chartData}
      />
      <VStack w={wp("40%")} justifyContent={"center"}>
        <HStack
          w={wp("40%")}
          alignItems={"center"}
          justifyContent={"space-between"}
          p="1"
        >
          <HStack alignItems={"center"}>
            <Box
              mr="2"
              w={wp("3.5%")}
              h={hp("2%")}
              borderColor="#84d9b8"
              borderWidth="2"
              bg="#9de1c6"
              borderRadius="full"
            />
            <Text bold color={colors.secondary}>
              Present
            </Text>
          </HStack>
          <Text color={colors.gray}>{pieData[0]}%</Text>
        </HStack>
        <HStack
          w={wp("40%")}
          alignItems={"center"}
          justifyContent={"space-between"}
          p="1"
        >
          <HStack alignItems={"center"}>
            <Box
              mr="2"
              w={wp("3.5%")}
              h={hp("2%")}
              borderColor="#f3949e"
              borderWidth="2"
              bg="#f2aab0"
              borderRadius="full"
            />
            <Text bold color={colors.secondary}>
              Absent
            </Text>
          </HStack>
          <Text color={colors.gray}>{pieData[1]}%</Text>
        </HStack>
        <HStack
          w={wp("40%")}
          alignItems={"center"}
          justifyContent={"space-between"}
          p="1"
        >
          <HStack alignItems={"center"}>
            <Box
              mr="2"
              w={wp("3.5%")}
              h={hp("2%")}
              borderColor="#fecd46"
              borderWidth="2"
              bg="#ffd27e"
              borderRadius="full"
            />
            <Text bold color={colors.secondary}>
              Late
            </Text>
          </HStack>
          <Text color={colors.gray}>{pieData[2]}%</Text>
        </HStack>
      </VStack>
    </HStack>
  );
}
