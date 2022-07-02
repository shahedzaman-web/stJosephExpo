import {
  Box,
  Text,
  Avatar,
  HStack,
  Divider,
  VStack,
  Button,
  Pressable,
  ZStack,
  Center,
} from "native-base";
import React from "react";
import colors from "../theme/colors";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Feather,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import baseURL from "../utils/baseURL";

const TeacherDrawerContains = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.auth.userInfo);

  const { employeeName, profilePhoto, email } = userInfo;

  // //console.log({props});
  const handleLogout = () => {
    dispatch(logout());
    navigation.replace("Login");
  };
  return (
    <ZStack
      borderTopLeftRadius={"30"}
      borderTopRightRadius={"30"}
      mt={hp("18%")}
      bg={colors.primaryLight}
      flex={1}
    >
      <Center
        position={"absolute"}
        zIndex={2}
        top={hp("-13%")}
        w={wp("65%")}
        h={hp("20%")}
        alignSelf={"center"}
      >
        <Text
          py="3"
          color={colors.primary}
          fontSize="lg"
          fontWeight="bold"
          textAlign="center"
        >
          Dashboard
        </Text>
        <Box
          justifySelf={"center"}
          bg={colors.white}
          shadow={"5"}
          w={wp("60%")}
          borderRadius="md"
          p="3"
        >
          <HStack w="100%" alignItems="center" justifyContent="space-between">
            <Avatar
              bg="green.500"
              source={{
                uri: baseURL + "/employeeProfile/" + profilePhoto,
              }}
            >
              {employeeName}
            </Avatar>
            <Box w="70%">
              <Text color={colors.primary} fontSize="md" fontWeight="bold">
                {employeeName}
              </Text>
              <Divider
                my="2"
                _light={{
                  bg: "#BBBFCA",
                }}
                _dark={{
                  bg: "muted.50",
                }}
              />

              <Text color={colors.primary} fontSize="sm" px="1" bold>
                Email:{email}
              </Text>
            </Box>
          </HStack>
        </Box>
      </Center>
      <VStack w="100%" mx="3" alignItems={"flex-start"} mt={hp("12%")}>
        <Button
          onPress={() =>
            navigation.navigate("TeacherTab", { screen: "Profile" })
          }
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: colors.primary,
            paddingLeft: "4",
          }}
          variant={"unstyled"}
          leftIcon={
            <FontAwesome name="user" size={wp("6%")} color={colors.primary} />
          }
        >
          Profile
        </Button>
        <Button
          onPress={() => navigation.navigate("StudentDetails")}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: colors.primary,
            paddingLeft: "3",
          }}
          variant={"unstyled"}
          leftIcon={
            <Ionicons
              name="person-circle-sharp"
              size={wp("5%")}
              color={colors.primary}
            />
          }
        >
          Student Details
        </Button>
        <Pressable
          variant={"unstyled"}
          w="100%"
          onPress={() =>
            navigation.navigate("TeacherTab", { screen: "Academic" })
          }
        >
          <HStack alignItems={"center"} pl="3">
            <FontAwesome5
              name="school"
              size={wp("4%")}
              color={colors.primary}
            />
            <Text
              pl={wp("4%")}
              fontWeight="bold"
              fontSize="md"
              color={colors.primary}
            >
              Academic
            </Text>
          </HStack>
        </Pressable>
        {/* <Button
          onPress={() => navigation.navigate("LeaveApplication")}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: colors.primary,
            paddingLeft: "3",
          }}
          variant={"unstyled"}
          leftIcon={
            <FontAwesome5
              name="newspaper"
              size={wp("4%")}
              color={colors.primary}
            />
          }
        >
          Leave Application
        </Button> */}
        {/* <Button
          onPress={() => navigation.navigate("AttachmentsBook")}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: colors.primary,
            paddingLeft: "3",
          }}
          variant={"unstyled"}
          leftIcon={
            <FontAwesome
              name="cloud-upload"
              size={wp("4%")}
              color={colors.primary}
            />
          }
        >
          Attachments Book
        </Button> */}
        <Button
          onPress={() => navigation.navigate("HomeWork")}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: colors.primary,
            paddingLeft: "3",
          }}
          variant={"unstyled"}
          leftIcon={
            <FontAwesome
              name="pencil-square-o"
              size={wp("4%")}
              color={colors.primary}
            />
          }
        >
          Home Work
        </Button>
        <Button
          onPress={() =>
            navigation.navigate("TeacherTab", { screen: "Examination" })
          }
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: colors.primary,
            paddingLeft: "3",
          }}
          variant={"unstyled"}
          leftIcon={
            <Ionicons
              name="ios-school-sharp"
              size={wp("4%")}
              color={colors.primary}
            />
          }
        >
          Exam Master
        </Button>

        <Button
          onPress={() =>
            navigation.navigate("TeacherTab", { screen: "Attendance" })
          }
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: colors.primary,
            paddingLeft: "3",
          }}
          variant={"unstyled"}
          leftIcon={
            <Feather
              name="bar-chart-2"
              size={wp("5%")}
              color={colors.primary}
            />
          }
        >
          Attendance
        </Button>
        <Pressable
          variant={"unstyled"}
          w="100%"
          onPress={() =>
            navigation.navigate("AttendanceReport")
          }
        >
          <HStack alignItems={"center"} pl="3">
          <Ionicons name="ios-pie-chart-sharp" size={24} color={colors.primary} />

            <Text
              pl={wp("4%")}
              fontWeight="bold"
              fontSize="md"
              color={colors.primary}
            >
              Attendance Report
            </Text>
          </HStack>
        </Pressable>
        <Button
          onPress={() => navigation.navigate("Events")}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: colors.primary,
            paddingLeft: "3",
          }}
          variant={"unstyled"}
          leftIcon={
            <MaterialIcons
              name="event-note"
              size={wp("5%")}
              color={colors.primary}
            />
          }
        >
          Events
        </Button>
        {/* <Button
          onPress={() => navigation.navigate("Payroll")}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: colors.primary,
            paddingLeft: "3",
          }}
          variant={"unstyled"}
          leftIcon={
            <AntDesign
              name="calculator"
              size={wp("5%")}
              color={colors.primary}
            />
          }
        >
          Payroll
        </Button> */}
        <Button
          onPress={handleLogout}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: colors.primary,
            paddingLeft: "3",
          }}
          variant={"unstyled"}
          leftIcon={
            <MaterialIcons
              name="logout"
              size={wp("5%")}
              color={colors.primary}
            />
          }
        >
          Logout
        </Button>
      </VStack>
    </ZStack>
  );
};

export default TeacherDrawerContains;
