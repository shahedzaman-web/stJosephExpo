import React from "react";
import { Box, Button, HStack, Text } from "native-base";
import colors from "../../../theme/colors";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSelector } from "react-redux";
export default function SelfAttendance() {
  const [loginPickerVisible, setLoginPickerVisible] = React.useState(false);
  const [logoutPickerVisible, setLogoutPickerVisible] = React.useState(false);
  const [startTime, setStartTime] = React.useState(
    moment(new Date(), "HH:mm").format("hh:mm A")
  );
  const userInfo= useSelector(state => state.auth.userInfo)
  console.log({userInfo})
const [today, setToday] = React.useState( moment(new Date()).format("YYYY-MM-DD"));
  const [endTime, setEndTime] = React.useState(  moment(new Date(), "HH:mm").format("hh:mm A"));
  const handleConfirmLoginTime = (time) => {
    try {
      const format = moment(time, "HH:mm").format("hh:mm A");
      setLoginPickerVisible((prevState) => !prevState);
      setStartTime(format);
    } catch (e) {
      console.log(e);
    }
  };
  const handleConfirmLogoutTime = (time)=>{
    try {
      const format = moment(time, "HH:mm").format("hh:mm A");
      setLogoutPickerVisible((prevState) => !prevState);
      setEndTime(format);
    } catch (e) {
      console.log(e);
    }
  }
  const handleLogin = async () => {
    const payload= {
      "branchName": "St Joseph College",
      "branchId": "624748040c772817c745b0dc",
      "sessionName": "2018-2019",
      "sessionId": "6273f3d1691f297ed98bed8b",
      "employeeId": "62764e461057b805baecb0cb",
      "logIn": "07:15",
      "logOut": "04:20",
      "logInLocation": "",
      "logOutLocation": "",
      "date": "2022-06-20"
    }
  };
  const handleLogout=async()=>{}
  return (
    <Box p={"2"}>
      <DateTimePickerModal
        isVisible={loginPickerVisible}
        mode="time"
        onConfirm={handleConfirmLoginTime}
        onCancel={() => setLoginPickerVisible(false)}
      />
      <DateTimePickerModal
        isVisible={logoutPickerVisible}
        mode="time"
        onConfirm={handleConfirmLogoutTime}
        onCancel={() => setLogoutPickerVisible(false)}
      />
      <HStack alignItems={"center"} justifyContent={"space-between"}>
        <Text w="30%" bold fontSize={"lg"} color={colors.primary}>
          Login Time
        </Text>
        <Button
          variant={"unstyled"}
          bg={colors.primary}
          onPress={() => setLoginPickerVisible((prevState) => !prevState)}
        >
          <HStack>
            <AntDesign name="clockcircle" size={20} color={colors.white} />
            <Text ml="2" color={colors.primary}>
              {startTime}
            </Text>
          </HStack>
        </Button>
        <Button
        w={"20%"}
         variant={"unstyled"} bg={colors.primary} onPress={handleLogin}>
          <Text color={colors.white}>Login</Text>
        </Button>
      </HStack>
      <HStack  my="2" alignItems={"center"} justifyContent={"space-between"}>
        <Text w="30%" bold fontSize={"lg"} color={colors.primary}>
          Logout Time
        </Text>
        <Button
          variant={"unstyled"}
          bg={colors.primary}
          onPress={() => setLogoutPickerVisible((prevState) => !prevState)}
        >
          <HStack>
            <AntDesign name="clockcircle" size={20} color={colors.white} />
            <Text ml="2" color={colors.primary}>
              {endTime}
            </Text>
          </HStack>
        </Button>
        <Button 
        w={"20%"}
        variant={"unstyled"} bg={colors.primary} onPress={handleLogout}>
          <Text color={colors.white}>Logout</Text>
        </Button>
      </HStack>
    </Box>
  );
}
