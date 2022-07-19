import { Box, HStack, Text } from "native-base";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import bgCardColor from "../../../theme/bgCardColor";
import bgCardLighterColor from "../../../theme/bgCardLighterColor";
import colors from "../../../theme/colors";
import moment from "moment";
import { FontAwesome } from "@expo/vector-icons";

const FeeHistoryCard = ({ item, index }) => {
  return (
    <Box
      w={wp("90%")}
      my={"3"}
      borderRadius="md"
      p={"2"}
      borderLeftWidth={"10"}
      shadow={"3"}
      bg={bgCardLighterColor[index]}
      alignSelf="center"
      borderLeftColor={bgCardColor[index]}
    >
      <HStack justifyContent={"space-between"} alignItems={"center"}>
        <Text bold fontSize="lg" color={colors.primary}>
          Due Amount :{item.dueAmount}
        </Text>
        <Box
          w={"20%"}
          h={"10"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius="md"
          bg={item.status === "Paid" ? colors.passBg : colors.failBg}
        >
          <Text bold fontSize="md" color={colors.white}>
            {item?.status}
          </Text>
        </Box>
      </HStack>
      <HStack alignItems={"center"}>
        <FontAwesome name="calendar-o" size={24} color={colors.darkGary} />
        <Text ml="1" color={colors.darkGary}>
          Invoice Date : {moment(item?.invoiceDate).format("DD-MM-YYYY")}
        </Text>
      </HStack>
      <Text color={colors.darkGary}>Paid Amount: {item?.paid}</Text>
      <Text color={colors.darkGary}>Paid Via: {item?.paidVia}</Text>
      <Text color={colors.darkGary}>Paying Month: {item?.payingMonth}</Text>
    </Box>
  );
};

export default FeeHistoryCard;
