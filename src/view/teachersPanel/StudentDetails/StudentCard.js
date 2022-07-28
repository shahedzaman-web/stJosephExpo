import { Avatar, Box, HStack, Text, VStack } from "native-base";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import bgCardColor from "../../../theme/bgCardColor";
import bgCardLighterColor from "../../../theme/bgCardLighterColor";
import baseURL from "../../../utils/baseURL";
import moment from "moment";
const StudentCard = ({ item, index }) => {
  const {
    lastName,
    firstName,
    email,
    classId,
    groupId,
    mobileNo,
    profilePhoto,
    admissionDate,
    dob,
    sectionId,
    presentAddress,
  } = item;
  return (
    <Box
      my="3"
      p="2"
      justifyContent={"center"}
      mx="auto"
      w={wp("92%")}
      h={hp("32%")}
      alignSelf="center"
      borderRadius={"md"}
      borderLeftWidth={"10"}
      borderLeftColor={bgCardColor[index]}
      shadow={"3"}
      bg={bgCardLighterColor[index]}
    >
      <HStack alignItems={"center"}>
        <Avatar
          _text={{
            fontSize: "2xs",
          }}
          bg="green.500"
          source={{
            uri: baseURL + "/studentProfile/" + profilePhoto,
          }}
        >
          {firstName} {lastName}
        </Avatar>
        <VStack ml="4" w="85%">
          <Text bold fontSize="lg" color={bgCardColor[index]}>
            {firstName} {lastName}
          </Text>
          <Text fontSize="sm">Student / {groupId.groupName}</Text>
          <Text fontSize="sm">Roll: {item.roll}</Text>
          <Text fontSize="sm">
            Admission Date: {moment(admissionDate).format("YYYY-MM-DD")}
          </Text>
          <Text fontSize="sm">
            Date of Birth : {moment(dob).format("YYYY-MM-DD")}
          </Text>
          <Text fontSize="sm">
            Class: {classId?.className}/ {sectionId?.sectionName}
          </Text>
          <Text fontSize="sm">Mobile No : {mobileNo}</Text>
          <Text fontSize="sm">Email : {email}</Text>
          <Text fontSize="sm">Address : {presentAddress}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default StudentCard;
