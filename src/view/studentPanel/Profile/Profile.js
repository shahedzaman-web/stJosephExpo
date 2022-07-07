import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Text,
  VStack,
  ZStack,
} from "native-base";
import React from "react";
import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import baseURL from "../../../utils/baseURL";
import colors from "../../../theme/colors";
import { useSelector } from "react-redux";
import { ImageBackground } from "react-native";

const Profile = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);

  return (
    <Box flex={1} bg={colors.primaryLight}>
    <ImageBackground
      source={require("./../../../asset/profile-screen-bg.png")}
      style={{
        width: wp("100%"),
        height: hp("60%"),
        flex: 1,
        resizeMode: "cover",
      }}
    >
      <ZStack
        w={wp("92%")}
        alignSelf={"center"}
        bg={colors.white}
        mt={hp("15%")}
        h={hp("80%")}
        shadow={"5"}
        borderRadius={"md"}
      >
        <Avatar
          bg="green.500"
          shadow={"5"}
          position={"absolute"}
          top={hp("-10%")}
          alignSelf={"center"}
          size="2xl"
          source={{ uri: baseURL + "/studentProfile/" + userInfo.profilePhoto,}}
        >
          <Text fontSize="xs">Profile Photo</Text>
        </Avatar>
        <Center mt={hp("9%")} w={"100%"}>
          <Divider m="2" w="90%" />
          <Text textAlign="center" bold color={colors.primary} fontSize="xl">
          {userInfo?.firstName} {userInfo?.lastName}
          </Text>
          <Text
            fontWeight="600"
            textAlign="center"
            color={colors.primary}
            fontSize="md"
          >
             Class:  {userInfo?.class?.className}
          </Text>
          <Text
            fontWeight="600"
            textAlign="center"
            color={colors.primary}
            fontSize="md"
          >
           Section: {userInfo?.section?.sectionName}
          </Text>
          <Text
            fontWeight="600"
            textAlign="center"
            color={colors.primary}
            fontSize="md"
          >
            Reg. Number: {userInfo?.regNo}
          </Text>
          <Text
            fontWeight="600"
            textAlign="center"
            color={colors.primary}
            fontSize="md"
          >
           Group: {userInfo?.group?.groupName}
          </Text>
          <Text
            fontWeight="600"
            textAlign="center"
            color={colors.primary}
            fontSize="md"
          >
           Session Name: {userInfo?.session?.sessionName}
          </Text>
        
        </Center>
      </ZStack>
    </ImageBackground>
  </Box>
  );
};

export default Profile;

