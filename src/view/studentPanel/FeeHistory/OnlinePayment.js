import { Box, Button, HStack, Modal, Text } from "native-base";
import React from "react";
import { useSelector } from "react-redux";
import colors from "../../../theme/colors";
import getFormattedMonthAndYear from "./getFormattedMonthAndYear";
import { FontAwesome } from "@expo/vector-icons";
import DatePicker from "react-native-modern-datepicker";
import {
  useGetFeesSetupForCollectionQuery,
  useGetStudentPaymentStatusQuery,
} from "../../../store/services/studentApi";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import bgCardLighterColor from "../../../theme/bgCardLighterColor";
import bgCardColor from "../../../theme/bgCardColor";
import { useNavigation } from "@react-navigation/native";
export default function OnlinePayment() {
  const navigation = useNavigation();
  const [date, setDate] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [alreadyPaidMonth, setAlreadyPaidMonth] = React.useState({});
  const [showText, setShowText] = React.useState("");
  const [feeDetails, setFeeDetails] = React.useState([]);
  const handleMonthYearChange = (selectedDate) => {
    let year = selectedDate.split(" ")[0];
    let month = selectedDate.split(" ")[1];
    setDate(getFormattedMonthAndYear(month, year));
  };
  const userInfo = useSelector((state) => state.auth.userInfo);
  const getStudentPaymentStatus = useGetStudentPaymentStatusQuery({
    studentId: userInfo._id,
    branchName: userInfo.branch.branchName,
    sessionName: userInfo.session.sessionName,
  });
  const getFeesSetupForCollection = useGetFeesSetupForCollectionQuery({
    branchId: userInfo.branch._id,
    sessionId: userInfo.session._id,
    sectionId: userInfo.section._id,
    classId: userInfo.class._id,
  });

  React.useEffect(() => {
    if (getFeesSetupForCollection?.data !== undefined) {
      getFeesSetupForCollection?.data?.data?.length !== 0 &&
        setFeeDetails(getFeesSetupForCollection?.data?.data[0]);
    }
  }, [getFeesSetupForCollection]);

  //console.log("feeDetails", feeDetails);
  React.useEffect(() => {
    if (getStudentPaymentStatus?.data !== undefined) {
      if (getStudentPaymentStatus?.data?.length > 0) {
        let monthList = [];
        getStudentPaymentStatus.data.map((item) =>
          monthList.push(item.payingMonth)
        );
        setAlreadyPaidMonth(monthList);
      }
    }
  }, [getStudentPaymentStatus]);

  React.useEffect(() => {
    if (alreadyPaidMonth.length > 0) {
      let check = alreadyPaidMonth.find((item) => item === date);

      if (check !== undefined) {
        setShowText("You have already paid for this month");
      } else {
        setShowText("");
      }
    }
  }, [alreadyPaidMonth, date]);

  const handlePayment = () => {
    const payload = {
      amount: feeDetails.monthlyFees,
      refId: userInfo._id,
      studentName: `${userInfo.firstName} ${userInfo.lastName}`,
      studentPhone: userInfo.mobileNo,
      studentId: userInfo._id,
      billingMonth: date,
      branchId: userInfo.branch._id,
      sessionId: userInfo.session._id,
      regNo: userInfo.regNo,
      monthlyFees: feeDetails.monthlyFees,
      fine: feeDetails.dueFine,
      roll: userInfo.roll,
      classId: userInfo.class._id,
      sectionId: userInfo.section._id,
    };
    navigation.navigate("OnlinePayment", {
      payload,
    });
  };

  return (
    <Box flex={1} safeArea>
      <HStack p="2" justifyContent={"space-between"} alignItems={"center"}>
        <Text bold fontSize="lg" color={colors.primary}>
          Billing Month
        </Text>
        <HStack alignItems={"center"}>
          <Text bold color={colors.primary}>
            {date}
          </Text>
          <Button variant={"unstyled"} onPress={() => setModalVisible(true)}>
            <FontAwesome name="calendar" size={24} color={colors.primary} />
          </Button>
        </HStack>
      </HStack>
      <Modal isOpen={modalVisible} onClose={setModalVisible} size="full">
        <Modal.Content h={"100%"}>
          <Modal.CloseButton />
          <Modal.Header>Select Month</Modal.Header>
          <Modal.Body>
            <DatePicker
              mode="monthYear"
              onMonthYearChange={(selectedDate) =>
                handleMonthYearChange(selectedDate)
              }
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>

      {showText !== "" && date !== "" && (
        <Box p="2">
          <Text fontSize="lg" bold color={colors.primary}>
            {showText}
          </Text>
        </Box>
      )}
      {showText === "" && date !== "" && (
        <Box
          w={wp("90%")}
          my={"3"}
          borderRadius="md"
          p={"2"}
          borderLeftWidth={"10"}
          shadow={"3"}
          bg={bgCardLighterColor[0]}
          alignSelf="center"
          borderLeftColor={bgCardColor[0]}
        >
          <Text bold>Due Date : {feeDetails.dueDate}</Text>
          <Text bold>Due Fine : {feeDetails.dueFine}</Text>
          <Text bold>Monthly Fees : {feeDetails.monthlyFees}</Text>
          <Button
            my="2"
            variant={"unstyled"}
            onPress={handlePayment}
            width={wp("80%")}
            alignSelf="center"
            bg={colors.primary}
            fontSize="lg"
            p={"2"}
            borderRadius="md"
          >
            <Text bold color={colors.white}>
              Pay Now
            </Text>
          </Button>
        </Box>
      )}
    </Box>
  );
}
