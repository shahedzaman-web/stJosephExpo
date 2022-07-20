import { Box, Button, Image, Modal, Text } from "native-base";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import bgCardColor from "../../../theme/bgCardColor";
import bgCardLighterColor from "../../../theme/bgCardLighterColor";
import colors from "../../../theme/colors";
import moment from "moment";
import baseURL from "../../../utils/baseURL";
import { useNavigation } from "@react-navigation/native";

const AttachmentCard = ({ index, item }) => {
  const navigation = useNavigation();
 
  const { title, publishDate, attachmentFile, remarks } = item;
  let file = baseURL + "/academicAttachment/" + attachmentFile;
 
  return (
    <Box
      w={wp("90%")}
      h={hp("30%")}
      my={"2"}
      justifyContent={"center"}
      borderRadius="md"
      p={"2"}
      borderLeftWidth={"10"}
      shadow={"3"}
      bg={bgCardLighterColor[index]}
      alignSelf="center"
      borderLeftColor={bgCardColor[index]}
    >
      <Text bold fontSize="lg" color={bgCardColor[index]}>
        {title}
      </Text>

      <Text fontSize="md">Class: {item.classDetails.className}</Text>
      <Text fontSize="md">Subject: {item.subject.subjectName}</Text>
      <Text fontSize="md">Remarks: {remarks}</Text>

      <Text fontSize="md">
        Date: {moment(publishDate).format("MMMM Do YYYY")}
      </Text>
      <Button
        onPress={() =>
          navigation.navigate("ViewAttachment", {
           file,
          })
        }
        my="2"
        bg={bgCardColor[index]}
      >
        <Text fontSize="md" bold color={colors.white}>
          View Attachment
        </Text>
      </Button>
    </Box>
  );
};

export default AttachmentCard;
