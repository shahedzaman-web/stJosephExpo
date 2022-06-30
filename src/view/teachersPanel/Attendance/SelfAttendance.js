import React from "react";
import {
  Box,
  Button,
  CheckIcon,
  HStack,
  Select,
  Skeleton,
  Spinner,
  Text,
} from "native-base";
import colors from "../../../theme/colors";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useSelector } from "react-redux";
import * as Location from "expo-location";
import Toast from "react-native-toast-message";
import {
  useGetBranchWiseSessionQuery,
  useManageEmployeeInOutMutation,
} from "../../../store/services/teacherApi";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function SelfAttendance() {
  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [manageEmployeeInOut, { isLoading }] = useManageEmployeeInOutMutation();
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);
  }

  const [loginPickerVisible, setLoginPickerVisible] = React.useState(false);
  const [logoutPickerVisible, setLogoutPickerVisible] = React.useState(false);
  const [startTime, setStartTime] = React.useState(
    moment(new Date(), "HH:mm").format("hh:mm A")
  );
  const [selectedSession, setSelectedSession] = React.useState("");
  const userInfo = useSelector((state) => state.auth.userInfo);
  // console.log({userInfo});
  const branchId = userInfo.branch._id;
  const getBranchWiseSession = useGetBranchWiseSessionQuery({
    branchId,
  });
  const [sessionName, setSessionName] = React.useState("");
  const [sessionData, setSessionData] = React.useState([]);
  let today = moment(new Date()).format("YYYY-MM-DD");

  const [endTime, setEndTime] = React.useState(
    moment(new Date(), "HH:mm").format("hh:mm A")
  );

  React.useEffect(() => {
    if (getBranchWiseSession?.data !== undefined) {
      setSessionData(getBranchWiseSession?.data?.data);
    }
  }, [getBranchWiseSession?.data]);

  const getSessionName = React.useCallback(() => {
    if (selectedSession !== "") {
      const res = sessionData.filter((item) => item._id === selectedSession)[0]
        ?.sessionName;

      setSessionName(res);
    }
  }, [selectedSession]);
  React.useEffect(() => {
    getSessionName();
  }, [getSessionName]);

  const handleConfirmLoginTime = (time) => {
    try {
      const format = moment(time, "HH:mm").format("hh:mm A");
      setLoginPickerVisible((prevState) => !prevState);
      setStartTime(format);
    } catch (e) {
      console.log(e);
    }
  };
  const handleConfirmLogoutTime = (time) => {
    try {
      const format = moment(time, "HH:mm").format("hh:mm A");
      setLogoutPickerVisible((prevState) => !prevState);
      setEndTime(format);
    } catch (e) {
      console.log(e);
    }
  };
  const handleLogin = async () => {
    if(selectedSession === ""){
      Toast.show({
        type: "danger",
        text1: "Please Select Session",
      });
    }
    else{
    try{
      getLocation();
      const logInLocation = location?.latitude + "," + location?.longitude;
      const payload = {
        branchName: userInfo.branch.branchName,
        branchId: userInfo.branch._id,
        sessionName: sessionName,
        sessionId: selectedSession,
        employeeId: userInfo._id,
        logIn: startTime,
        logOut: "",
        logInLocation: logInLocation,
        logOutLocation: "",
        date: today,
      };
      const {data,error}= await manageEmployeeInOut(payload);
      console.log("data=====================================>", data,error);
      if(data.message ==="Login Successfully"){
        Toast.show({
          type: "success",
          text1: data.message,
        });
      }
      else{
        Toast.show({
          type: "danger",
          text1: "Login Failed",
        });
      }

    }
    catch(e){
      console.log(e);
    }
  }
  };
  const handleLogout = async () => {
    if(selectedSession === ""){
      Toast.show({
        type: "danger",
        text1: "Please Select Session",
      });
    }
    else{
    try{
    getLocation();
    const logInLocation = location?.latitude + "," + location?.longitude;
    const payload = {
      branchName: userInfo.branch.branchName,
      branchId: userInfo.branch._id,
      sessionName: sessionName,
      sessionId: selectedSession,
      employeeId: userInfo._id,
      logIn: startTime,
      logOut: endTime,
      logInLocation: logInLocation,
      logOutLocation: logInLocation,
      date: today,
    };
    const {data,error}= await manageEmployeeInOut(payload);
    console.log("data=====================================>", data,error);
    if(data.message ==="Login Successfully"){
      Toast.show({
        type: "success",
        text1: "Logout Successfully",
      });
    }
    else{
      Toast.show({
        type: "danger",
        text1: "Login Failed",
      });
    }
  }
  catch(e){
    console.log(e);
  }
  }
  }
  return (
    <Box p={"2"}>
      <HStack
        mb="2"
        h={hp("8%")}
        w={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text bold fontSize={"lg"} color={colors.primary}>
          Select Session
        </Text>
        {getBranchWiseSession?.isLoading ? (
          <Skeleton style={{ width: wp("50%") }} text />
        ) : (
          <Select
            borderColor={colors.primary}
            selectedValue={selectedSession}
            minWidth="200"
            accessibilityLabel="Choose Session"
            placeholder="Choose Session"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setSelectedSession(itemValue)}
          >
            {sessionData.map((item) => (
              <Select.Item
                key={item._id}
                value={item._id}
                label={item.sessionName}
              />
            ))}
          </Select>
        )}
      </HStack>
      <HStack
        mb="2"
        w={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text bold fontSize={"lg"} color={colors.primary}>
          Today's Date
        </Text>
        <Text bold fontSize={"lg"} color={colors.primary}>
          {today}
        </Text>
      </HStack>
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
            <Text ml="2" color={colors.white}>
              {startTime}
            </Text>
          </HStack>
        </Button>
        <Button
          w={"20%"}
          variant={"unstyled"}
          bg={colors.primary}
          onPress={handleLogin}
        >
          {isLoading ? (
            <Spinner size="small" color={colors.white} />
          ) : (
            <Text color={colors.white}>Login</Text>
          )}
        </Button>
      </HStack>
      <HStack my="2" alignItems={"center"} justifyContent={"space-between"}>
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
            <Text ml="2" color={colors.white}>
              {endTime}
            </Text>
          </HStack>
        </Button>
        <Button
          w={"20%"}
          variant={"unstyled"}
          bg={colors.primary}
          onPress={handleLogout}
        >
        
          {isLoading ? (
            <Spinner size="small" color={colors.white} />
          ) : (
            <Text color={colors.white}>Logout</Text>
          )}
        
          
        </Button>
      </HStack>
    </Box>
  );
}
