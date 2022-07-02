import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Box, Button, HStack, Image, Modal, Text, VStack } from "native-base";
import moment from "moment";
import { FontAwesome } from "@expo/vector-icons";
import bgCardLighterColor from "../../../../theme/bgCardLighterColor";
import bgCardColor from "../../../../theme/bgCardColor";
import colors from "../../../../theme/colors";

export default function EvaluationCard({ item, index }) {
  const { title, dateOfHomework, dateOfSubmission, details, attachmentFile } =
    item;
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <Box
      w={wp("90%")}
      h={hp("26%")}
      my={"2"}
      borderRadius={"md"}
      p={"3"}
      borderLeftWidth={"10"}
      shadow={"3"}
      bg={bgCardLighterColor[index]}
      borderLeftColor={bgCardColor[index]}
      alignSelf={"center"}
    >
      <VStack justifyContent={"space-between"}>
        <Text bold color={colors.gray}>
          Title : {title}
        </Text>
        <HStack my="1">
          <FontAwesome name="calendar" size={24} color={colors.gray} />
          <Text ml="2" bold color={colors.gray}>
            Date Of Homework : {moment(dateOfHomework).format("DD-MM-YYYY")}
          </Text>
        </HStack>
        <HStack my="1">
          <FontAwesome name="calendar" size={24} color={colors.gray} />
          <Text ml="2" bold color={colors.gray}>
            Date Of Submission : {moment(dateOfSubmission).format("DD-MM-YYYY")}
          </Text>
        </HStack>
        <Text my="1" bold color={colors.gray}>
          Details : {details}
        </Text>
        <Button
          onPress={() => setModalVisible(true)}
          my="2"
          bg={colors.primary}
        >
          <Text fontSize="md" bold color={colors.white}>
            View Attachment
          </Text>
        </Button>
      </VStack>
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
          <Modal.Header bold>View Attach File</Modal.Header>
          <Modal.Body>
            <Image
              alt={"homeWorkAttachFile"}
              source={{ uri: baseURL + "/homeWorkAttachFile/" + attachmentFile }}
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
}
