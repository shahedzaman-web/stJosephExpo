import React from "react";
import PDFReader from "rn-pdf-reader-js";
import { Box, HStack, Button, Text, Image } from "native-base";
import {  MaterialIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../../theme/colors";
export default function ViewAttachment({ navigation, route }) {
  const { file } = route.params;
  let fileFormat = file.split(".").pop();

  return (
    <Box flex={"1"}>
      <HStack
        w={wp("100%")}
        h={hp("8%")}
        bg={colors.primary}
        justifyContent={"space-between"}
        alignItems={"center"}
        alignSelf={"center"}
      >
        <Button variant={"unstyled"} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color={colors.white} />
        </Button>
        <Text
          textAlign={"center"}
          fontWeight="bold"
          color={colors.white}
          fontSize="lg"
        >
          View Attachment / File
        </Text>
        <Box />
      </HStack>
      {fileFormat === "pdf" ? (
        <PDFReader
          source={{
            uri: file,
          }}
        />
      ) : (
        <Image
          width={wp("100%")}
          height={hp("90%")}
          resizeMode="contain"
          alt="attachment"
          source={{ uri: file }}
        />
      )}
    </Box>
  );
}
