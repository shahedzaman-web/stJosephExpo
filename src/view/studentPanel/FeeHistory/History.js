import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import DatePicker from "react-native-modern-datepicker";
import colors from "../../../theme/colors";
import { Box, Button, HStack, Text } from "native-base";
import { Modalize } from "react-native-modalize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useModalize } from "react-native-modalize/lib/utils/use-modalize";
import moment from "moment";
import { Portal } from "react-native-portalize";
import getFormattedMonthAndYear from "./getFormattedMonthAndYear";
export default function History() {
  const [date, setDate] = React.useState("");
  const { ref, open, close } = useModalize();
  const handleMonthYearChange = (selectedDate) => {
    let year = selectedDate.split(" ")[0];
    let month = selectedDate.split(" ")[1];
    console.log({ year, month });
    let res = getFormattedMonthAndYear(month, year);
    setDate(res);
  };

  return (
    <Box>
      <HStack p="2" justifyContent={"space-between"} alignItems={"center"}>
        <Text bold fontSize="lg" color={colors.primary}>
          Billing Month
        </Text>
        <Button variant={"unstyled"} onPress={() => open()}>
          <FontAwesome name="calendar" size={24} color={colors.primary} />
        </Button>
      </HStack>
      <Portal>
        <Modalize
          ref={ref}
          scrollViewProps={{
            keyboardShouldPersistTaps: "handled",
            scrollEnabled: false,
          }}
          disableScrollIfPossible
          adjustToContentHeight
        >
          <DatePicker
            mode="monthYear"
            onMonthYearChange={(selectedDate) =>
              handleMonthYearChange(selectedDate)
            }
          />
          <Button
            my="4"
            w="90%"
            alignSelf={"center"}
            h={hp("8%")}
            variant={"unstyled"}
            onPress={() => close()}
            bg={colors.primary}
          >
            <Text color={colors.white}>Close</Text>
          </Button>
        </Modalize>
      </Portal>
    </Box>
  );
}
