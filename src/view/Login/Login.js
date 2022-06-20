import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Input,
  Radio,
  ScrollView,
  Stack,
  Text,
  VStack,
  Skeleton,
  Select,
  CheckIcon,
} from "native-base";
import {
  ActivityIndicator,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import React from "react";
import { Dropdown } from "react-native-element-dropdown";

import colors from "../../theme/colors";
import { MaterialIcons } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Toast from "react-native-toast-message";
// import requestUserPermission from '../../utils/notificationService';
import { useSigninUserMutation } from "../../store/services/authApi";

import { useSelector } from "react-redux";
import _renderItem from "../../components/_renderItem";

const Login = ({ navigation }) => {
  const branchData = useSelector((state) => state.branchData.branchData);

  const [show, setShow] = React.useState(false);
  const [value, setValue] = React.useState("student");
  const [selectBranch, setSelectBranch] = React.useState("");
  const [registerNumber, setRegisterNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [deviceId, setDeviceId] = React.useState("");
  const [signinUser, { isLoading }] = useSigninUserMutation();
  console.log({ branchData });

  console.log({ selectBranch });
  const handleLogin = async () => {
    if (registerNumber === "" || password === "") {
      Toast.show({
        type: "info",
        text1: "Please fill all the fields!",
      });
    } else {
      try {
        let payload;
        let branchName = branchData.find((item) =>  item.value === selectBranch);
        console.log({branchName});
        if (value === "student") {
          payload = {
            branchName: branchName.label,
            branchId: selectBranch,
            userType: value,
            userId: registerNumber,
            userPassword: password,
            deviceId,
            isApp: true,
          };
        } else {
          payload = {
           
            userType: value,
            userId: registerNumber,
            userPassword: password,
            deviceId,
            isApp: true,
          };
        }
        console.log({ payload });
        const res = await signinUser(payload);
        console.log("res===================>", res);
        if (res?.data === [] || res === undefined || res.error) {
          Toast.show({
            type: "error",
            text1: "Invalid Credentials!",
          });
        } else {
          Toast.show({
            type: "success",
            text1: "Login Successful!",
          });
          navigation.replace("App", {
            screen: value == "student" ? "Student" : "Teacher",
          });
        }
      } catch (e) {
        Toast.show({
          type: "error",
          text1: e,
        });
        console.log(e);
      }
    }
  };

  return (
    <ScrollView flex={"1"} bg={colors.white}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box safeArea flex={1}>
          <Box
            width={"100%"}
            bg={colors.primary}
            height="85"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontWeight="bold" color={colors.white} fontSize="lg">
              Login to continue
            </Text>
          </Box>
          <Box
            width={"100%"}
            my="6"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              source={require("../../asset/logor.png")}
              alt="logo"
              resizeMode="contain"
              height={hp("23%")}
              width={wp("50%")}
            />
          </Box>
          <Box alignItems="center" w="100%" my="6">
            <Radio.Group
              name="exampleGroup"
              defaultValue="1"
              accessibilityLabel="Select Panel"
              value={value}
              onChange={(nextValue) => {
                setValue(nextValue);
              }}
            >
              <Stack direction="row" alignItems="center" space={4}>
                <Radio
                  value="student"
                  colorScheme="emerald"
                  _color={colors.primary}
                  size="sm"
                  my={1}
                  _text={{
                    fontWeight: "bold",
                    color: colors.primary,
                    fontFamily: "Helvitica",
                  }}
                >
                  Student/Parent
                </Radio>
                <Radio
                  colorScheme="emerald"
                  value="teacher"
                  size="sm"
                  my={1}
                  _text={{
                    fontWeight: "bold",
                    color: colors.primary,
                    fontFamily: "Helvitica",
                  }}
                >
                  Teacher
                </Radio>
              </Stack>
            </Radio.Group>
          </Box>
          <Stack space={4} w="100%" alignItems="center">
            {value == "student" && (
              <HStack
                justifyContent={"space-between"}
                alignItems={"center"}
                space={6}
              >
                <Text fontWeight="bold" color={colors.primary} fontSize="lg">
                  Select Branch
                  <Text fontWeight="bold" color={colors.danger} fontSize="lg">
                    *
                  </Text>
                </Text>
                <Select
                  selectedValue={selectBranch}
                  minWidth="180"
                  accessibilityLabel="Choose Service"
                  placeholder="Choose Service"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setSelectBranch(itemValue)}
                >
                  {branchData.map((item) => (
                    <Select.Item
                      key={item.value}
                      value={item.value}
                      label={item.label}
                    />
                  ))}
                </Select>

        
              </HStack>
            )}
            <Input
              w="90%"
              onChangeText={(text) => setRegisterNumber(text)}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              placeholder="Register Number"
            />
            <Input
              w="90%"
              onChangeText={(text) => setPassword(text)}
              type={show ? "text" : "password"}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="lock" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              InputRightElement={
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                  onPress={() => setShow(!show)}
                />
              }
              placeholder="Password"
            />
          </Stack>
          <VStack my="6" alignItems="center">
            <Button
              h="12"
              _text={{
                fontWeight: "bold",
                color: colors.white,
                fontFamily: "Helvitica",
                fontSize: "lg",
              }}
              w="90%"
              bg={colors.primary}
              onPress={handleLogin}
            >
              {isLoading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                "LOGIN"
              )}
            </Button>
            <Button
              mt="2"
              variant={"unstyled"}
              _text={{
                fontWeight: "bold",
                color: colors.primary,
                fontFamily: "Helvitica",
                fontSize: "lg",
              }}
              h="12"
            >
              Forgot Password?
            </Button>
          </VStack>
        </Box>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    width: wp("50%"),
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 2,
    paddingHorizontal: 2,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
