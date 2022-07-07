import { Box, ZStack, Center, HStack, Avatar, VStack, Text } from "native-base";
import React from "react";
import colors from "./../../../theme/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";
import baseURL from "../../../utils/baseURL";
import {
  FontAwesome,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const Profile = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);
  const { employeeName, profilePhoto, email } = userInfo;

  return (
    <Box flex={1} bg={colors.primaryLight}>
      <ZStack bg={colors.white} mt={hp("11%")} shadow={"5"} flex={1}>
        <Center zIndex={2} w={wp("100%")} h={hp("50%")}>
          <Avatar
            shadow={"5"}
            position={"absolute"}
            top={hp("-10%")}
            alignSelf={"center"}
            size="2xl"
            source={{
              uri: baseURL + "/employeeProfile/" + profilePhoto,
            }}
          >
            Profile Photo
          </Avatar>
          <VStack>
            <HStack
              alignItems={"center"}
              borderBottomColor={colors.primary}
              borderBottomWidth={1}
              bg={colors.primaryLight}
              p="1"
              pl="10"
              w={wp("100%")}
              h={hp("5%")}
              my="1.5"
            >
              <FontAwesome
                name="user-circle"
                size={24}
                color={colors.primary}
              />
              <Text mx="2" bold color={colors.primary} fontSize="lg">
                Name:
              </Text>
              <Text bold color={colors.primary} fontSize="lg">
                {employeeName}
              </Text>
            </HStack>

            <HStack
              alignItems={"center"}
              borderBottomColor={colors.primary}
              borderBottomWidth={1}
              bg={colors.primaryLight}
              p="1"
              pl="10"
              w={wp("100%")}
              h={hp("5%")}
              my="1.5"
            >
              <MaterialCommunityIcons
                name="email"
                size={24}
                color={colors.primary}
              />

              <Text mx="2" bold color={colors.primary} fontSize="lg">
                Email:{" "}
              </Text>
              <Text bold color={colors.primary} fontSize="lg">
                {email}
              </Text>
            </HStack>
            <HStack
              alignItems={"center"}
              borderBottomColor={colors.primary}
              borderBottomWidth={1}
              bg={colors.primaryLight}
              p="1"
              pl="10"
              w={wp("100%")}
              h={hp("5%")}
              my="1.5"
            >
              <FontAwesome5 name="school" size={20} color={colors.primary} />

              <Text mx="2" bold color={colors.primary} fontSize="lg">
                Branch Name:{" "}
              </Text>
              <Text bold color={colors.primary} fontSize="lg">
                {userInfo.branch.branchName}
              </Text>
            </HStack>
            {/* <Button
                alignSelf={"center"}
                bg={colors.primary}
                color={colors.white}
                fontSize="lg"
                p="1"
                w={wp("90%")}
                h={hp("8%")}
                my="1.5"
                leftIcon={
                  <MaterialIcons name="edit" size={24} color={colors.white} />
                }
              >
                <Text bold color={colors.white}>
                  Edit Profile
                </Text>
              </Button> */}
          </VStack>
        </Center>
      </ZStack>
    </Box>
  );
};

export default Profile;
