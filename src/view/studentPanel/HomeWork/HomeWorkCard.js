import { Box, Button, HStack, Text } from "native-base";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import bgCardColor from "../../../theme/bgCardColor";
import bgCardLighterColor from "../../../theme/bgCardLighterColor";

import { FontAwesome } from "@expo/vector-icons";
import colors from "../../../theme/colors";
import moment from "moment";
import baseURL from "../../../utils/baseURL";
import { useNavigation } from "@react-navigation/native";
const HomeWorkCard = ({ index, homework }) => {
  const { title, dateOfHomework, dateOfSubmission, details, attachmentFile } =
    homework;
  const navigation = useNavigation();
  const file = baseURL + "/homeWorkAttachFile/" + attachmentFile;
  return (
    <Box
      w={wp("94%")}
      justifyContent={"center"}
      my={"3"}
      borderRadius={"md"}
      p={"2"}
      borderLeftWidth={"10"}
      shadow={"3"}
      bg={bgCardLighterColor[index]}
      borderLeftColor={bgCardColor[index]}
      alignSelf={"center"}
    >
      <Text color={bgCardColor[index]} fontSize={"lg"} bold>
        {title}
      </Text>
      <HStack py="1" alignItems={"center"}>
        <FontAwesome name="calendar-o" size={24} color={colors.darkGary} />
        <Text bold color={colors.darkGary} fontSize="sm" ml="2">
          Date Of Home Work: {moment(dateOfHomework).format("DD-MM-YYYY")}
        </Text>
      </HStack>
      <HStack alignItems={"center"} py="1">
        <FontAwesome name="calendar-o" size={24} color={colors.darkGary} />
        <Text bold color={colors.darkGary} fontSize="sm" ml="2">
          Date Of Submission: {moment(dateOfSubmission).format("DD-MM-YYYY")}
        </Text>
      </HStack>
      <HStack alignItems={"center"} py="1">
        <Text fontSize={"sm"} color={colors.darkGary}>
          Details: {details}
        </Text>
      </HStack>
      <Button
        onPress={() =>
          navigation.navigate("ViewAttachment", {
            file,
          })
        }
        my="2"
        bg={bgCardColor[index]}
        variant={"unstyled"}
      >
        <Text fontSize={"sm"} color={colors.white} bold>
          View Attachment
        </Text>
      </Button>
    </Box>
  );
};

export default HomeWorkCard;
