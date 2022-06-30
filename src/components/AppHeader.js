import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Box, Button, HStack, Text } from "native-base";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../theme/colors";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const AppHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <HStack
      w={wp("100%")}
      h={hp("8%")}
      bg={colors.primary}
      justifyContent={"space-between"}
      alignItems={"center"}
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
        {title}
      </Text>
      <Button variant={"unstyled"} color="#fff">
        <MaterialIcons name="notifications" size={30} color={colors.white} />
      </Button>
    </HStack>
  );
};

export default AppHeader;
