import {
    Avatar,
    Box,
    Button,
    Center,
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
  
  const Profile = () => {
    const userInfo = useSelector((state) => state.auth.userInfo);
  
    return (
      <Box flex={1} bg={colors.primaryLight}>
        <ZStack bg={colors.white} mt={hp("11%")} shadow={"5"} flex={1}>
          <Center zIndex={2} w={wp("100%")} h={hp("82%")}>
            <Avatar
              shadow={"5"}
              position={"absolute"}
              top={hp("-10%")}
              alignSelf={"center"}
              size="2xl"
              source={{
                uri: baseURL + "/studentProfile/" + userInfo.profilePhoto,
              }}
            >
              <Text fontSize="sm" color={colors.white}>Profile Photo</Text>
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
                  {userInfo?.firstName} {userInfo?.lastName}
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
                <FontAwesome name="book" size={24} color={colors.primary} />
                <Text mx="2" bold color={colors.primary} fontSize="lg">
                  Class:{" "}
                </Text>
                <Text bold color={colors.primary} fontSize="lg">
                  {userInfo?.class?.className}
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
                <MaterialIcons name="class" size={24} color={colors.primary} />
                <Text mx="2" bold color={colors.primary} fontSize="lg">
                  Section:{" "}
                </Text>
                <Text bold color={colors.primary} fontSize="lg">
                  {userInfo?.section?.sectionName}
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
                <MaterialIcons
                  name="backup-table"
                  size={24}
                  color={colors.primary}
                />
                <Text mx="2" bold color={colors.primary} fontSize="lg">
                  Roll:{" "}
                </Text>
                <Text bold color={colors.primary} fontSize="lg">
                  {userInfo?.roll}
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
                <MaterialIcons
                  name="how-to-reg"
                  size={24}
                  color={colors.primary}
                />
                <Text mx="2" bold color={colors.primary} fontSize="lg">
                  Reg. Number:{" "}
                </Text>
                <Text bold color={colors.primary} fontSize="lg">
                  {userInfo?.regNo}
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
                  name="google-classroom"
                  size={24}
                  color={colors.primary}
                />
                <Text mx="2" bold color={colors.primary} fontSize="lg">
                  Group:{" "}
                </Text>
                <Text bold color={colors.primary} fontSize="lg">
                  {userInfo?.group?.groupName}
                </Text>
              </HStack>
              <HStack
                alignItems={"center"}
                bg={colors.primaryLight}
                borderBottomColor={colors.primary}
                borderBottomWidth={1}
                p="1"
                pl="10"
                w={wp("100%")}
                h={hp("5%")}
                my="1.5"
              >
                <MaterialIcons
                  name="how-to-reg"
                  size={24}
                  color={colors.primary}
                />
                <Text mx="2" bold color={colors.primary} fontSize="lg">
                  Session Name:{" "}
                </Text>
                <Text bold color={colors.primary} fontSize="lg">
                  {userInfo?.session?.sessionName}
                </Text>
              </HStack>
          
              <HStack
                alignItems={"center"}
                p="1"
                bg={colors.primaryLight}
                borderBottomColor={colors.primary}
                borderBottomWidth={1}
                pl="10"
                w={wp("100%")}
                h={hp("5%")}
                my="1.5"
              >
                <MaterialIcons
                  name="how-to-reg"
                  size={24}
                  color={colors.primary}
                />
                <Text mx="2" bold color={colors.primary} fontSize="lg">
                  Branch Name:{" "}
                </Text>
                <Text bold color={colors.primary} fontSize="lg">
                  {userInfo?.branch?.branchName}
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
              leftIcon={<MaterialIcons name="edit" size={24} color={colors.white} />}
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
  
  {
    /* <ZStack
  borderTopLeftRadius={'30'}
  borderTopRightRadius={'30'}
  mt={hp('35%')}
  p="3"
  bg={colors.primaryLight}
  flex={1}>
  <Center
    position="absolute"
    zIndex={2}
    shadow={'5'}
    top={hp('-30%')}
    alignSelf={'center'}
    bg={colors.white}
    w={wp('90%')}
    h={hp('60%')}
    borderRadius={'md'}>
    <Avatar
      alignSelf={'center'}
      mr={'4'}
      size="2xl"
      bg={colors.primary}
      source={{
        uri: baseURL + '/studentProfile/' + userInfo.profilePhoto,
      }}>
      Profile Photo
    </Avatar>
    <HStack>
      <Center mt="2">
        <Text bold color={colors.primary} fontSize="xl">
          {userInfo.firstName} {userInfo.lastName}
        </Text>
  
        <Text color={colors.primary} fontSize="lg" bold>
          Class:{userInfo.class.className}
        </Text>
  
        <Text color={colors.primary} fontSize="lg" bold>
          Section: {userInfo.section.sectionName}
        </Text>
        <Text color={colors.primary} fontSize="lg" bold>
          Roll: {userInfo.roll}
        </Text>
  
        <Text color={colors.primary} fontSize="lg" bold>
          Reg. Number: {userInfo.regNo}
        </Text>
        <Text color={colors.primary} fontSize="lg" bold>
          Group: {userInfo.group.groupName}
        </Text>
        <Text color={colors.primary} fontSize="lg" bold>
          Session Name: {userInfo.session.sessionName}
        </Text>
        <Text color={colors.primary} fontSize="lg" bold>
          Branch Name: {userInfo.branch.branchName}
        </Text>
      </Center>
    </HStack>
  </Center>
  
  </ZStack> */
  }
  