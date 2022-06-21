import { Box, HStack, Text, VStack } from "native-base";

import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import bgCardColor from "../../../theme/bgCardColor";
import bgCardLighterColor from "../../../theme/bgCardLighterColor";
import colors from "../../../theme/colors";
function ExamHallCard({ item, index }) {
  const { hall, seatNo } = item;

  return (
    <Box
      w={"94%"}
      h={hp("12%")}
      shadow={"2"}
      alignSelf={"center"}
      borderRadius={"6"}
      bg={bgCardLighterColor[index]}
      borderLeftWidth={"10"}
      my={"2"}
      borderLeftColor={bgCardColor[index]}
    >
      <HStack alignItems={"center"} h="100%">
        <VStack pl="3">
          <Text fontSize="md" bold color={bgCardColor[index]}>
            Hall: {hall}
          </Text>
          <Text fontSize="md" bold color={colors.darkGary}>
            Seat Number: {seatNo}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default ExamHallCard;
