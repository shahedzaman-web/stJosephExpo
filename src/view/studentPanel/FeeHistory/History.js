import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import DatePicker from "react-native-modern-datepicker";
import colors from "../../../theme/colors";
import { Box, Button, FlatList, HStack, Modal, Text } from "native-base";
import { useSelector } from "react-redux";
import getFormattedMonthAndYear from "./getFormattedMonthAndYear";
import { useGetStudentFeesSummaryQuery } from "../../../store/services/studentApi";
import FeeHistoryCard from "./FeeHistoryCard";

export default function History() {
  const [date, setDate] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [paymentData, setPaymentData] = React.useState([]);
  const handleMonthYearChange = (selectedDate) => {
    let year = selectedDate.split(" ")[0];
    let month = selectedDate.split(" ")[1];

    let res = getFormattedMonthAndYear(month, year);
    setDate(res);
  };
  const userInfo = useSelector((state) => state.auth.userInfo);

  const { data } = useGetStudentFeesSummaryQuery({
    branchName: userInfo.branch.branchName,
    branchId: userInfo.branch._id,
    sessionName: userInfo.session.sessionName,
    sessionId: userInfo.session._id,
    classId: userInfo.class._id,
    sectionId: userInfo.section._id,
    studentId: userInfo._id,
    payingMonth: date,
  });
  React.useEffect(() => {
    if (data !== undefined) {
      data.length !== 0 && setPaymentData(data[0].data);
    }
  }, [data]);
console.log("data",data)
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

{   paymentData.length === 0 && date !== ""  ?(
          <Box 
          flex={"1"}
        
           bg={colors.primaryLight}
        borderTopLeftRadius={"30"}
        borderTopRightRadius={"30"}
        mt={"6"}
          >
            <Text 
            bold
            fontSize="lg" 
            color={colors.primary}
            textAlign={"center"}
            mt={"6"}
            >No Data Found</Text>
          </Box>
        ) : (
     <FlatList
        showsVerticalScrollIndicator={false}
        bg={colors.primaryLight}
        borderTopLeftRadius={"30"}
        borderTopRightRadius={"30"}
        mt={"6"}
        data={paymentData}
        renderItem={({ item, index }) => (
          <FeeHistoryCard item={item} index={index} />
        )}
        keyExtractor={(item) => item._id}
      />
    )}
    </Box>
  );
}
