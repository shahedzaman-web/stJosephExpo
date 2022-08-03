import React from "react";
import { useSslRequestQuery } from "../../../store/services/studentApi";
import { Box, Button, Center, HStack, Image, Text } from "native-base";
import colors from "../../../theme/colors";
import { WebView } from "react-native-webview";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import baseURL from "../../../utils/baseURL";
import { useNavigation } from "@react-navigation/native";
export default function OnlinePayment({ route }) {
  const { payload } = route.params;
  const { isLoading, data, error } = useSslRequestQuery(payload);

  const navigation = useNavigation();
  const handleWebViewNavigationStateChange = (e) => {
    let url = e.title;

    if (url.includes(baseURL + "/paymentSuccess")) {
      navigation.replace("Success");
    } else if (url.includes(baseURL + "/paymentFailed")) {
      navigation.replace("Failed");
    } else if (url.includes(baseURL + "/paymentCancel")) {
      navigation.replace("Cancel");
    } else {
      return;
    }
  };

  return (
    <Box flex={1} safeArea>
      <Box
        w={wp("100%")}
        h={hp("5%")}
        bg={colors.primary}
        justifyContent={"space-between"}
        alignItems={"center"}
        alignSelf={"center"}
      >
        <Text
          textAlign={"center"}
          fontWeight="bold"
          color={colors.white}
          fontSize="lg"
        >
          Online Payment
        </Text>
      </Box>

      {isLoading ? (
        <Center flex={"1"}>
          <Image
            source={require("../../../asset/paymentLoading.gif")}
            size="2xl"
          />
        </Center>
      ) : error?.originalStatus === 200 ? (
        <WebView
          style={{ flex: 1 }}
          source={{ uri: error.data }}
          onNavigationStateChange={handleWebViewNavigationStateChange}
        />
      ) : (
        <Center flex="1">
          <Text bold fontSize={"lg"}>
            Something went wrong. Please Try again.
          </Text>
          <Button
            onPress={() => navigation.goBack()}
            style={{ marginTop: hp("2%") }}
            bg={colors.primary}
            color={colors.white}
          >
            <Text color={colors.white} bold>
              Go Back
            </Text>
          </Button>
        </Center>
      )}
    </Box>
  );
}
