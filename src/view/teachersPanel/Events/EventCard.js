import { Box, HStack, Image, Modal, Button, Text } from "native-base";
import React from "react";
import bgCardColor from "../../../theme/bgCardColor";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import bgCardLighterColor from "../../../theme/bgCardLighterColor";
import colors from "../../../theme/colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import baseURL from "../../../utils/baseURL";

const EventCard = ({ index, item }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <Box
      h={hp("32%")}
      borderLeftColor={bgCardColor[index]}
      borderLeftWidth={10}
      borderRadius={"md"}
      mx={"2"}
      w={wp("92%")}
      my={"2"}
      shadow={"5"}
      alignSelf="center"
      justifyContent={"center"}
      bg={bgCardLighterColor[index]}
      p="2"
    >
      <Text fontSize="md" bold color={bgCardColor[index]}>
        {item.title}
      </Text>
      <Text fontSize="md" bold color={colors.darkGary}>
        {item.description}
      </Text>
      <HStack py="1" alignItems={"center"}>
        <FontAwesome name="calendar-o" size={24} color={colors.darkGary} />
        <Text bold color={colors.darkGary} fontSize="sm" ml="2">
          Date : {item.date}
        </Text>
      </HStack>

      <Text bold color={colors.darkGary} fontSize="sm">
        Audience: {item.audience}
      </Text>
      <Text bold color={colors.darkGary} fontSize="sm">
        Created By: {item.createdBy.employeeName}
      </Text>
      <Button onPress={() => setModalVisible(true)} my="2" bg={colors.primary}>
        <Text fontSize="md" bold color={colors.white}>
          View Events
        </Text>
      </Button>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard
        justifyContent="center"
        bottom="-10"
        size="xl"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>View Events</Modal.Header>
          <Modal.Body>
            <Image
              alt={"events"}
              source={{ uri: baseURL + "/eventPhoto/" + item.coverImage }}
              style={{
                width: wp("90%"),
                height: hp("60%"),
                alignSelf: "center",
                resizeMode: "contain",
              }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              flex="1"
              onPress={() => {
                setModalVisible(false);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default EventCard;
