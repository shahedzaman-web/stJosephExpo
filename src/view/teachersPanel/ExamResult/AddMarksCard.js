import React from "react";
import { Box, HStack, Input, Text, VStack } from "native-base";
import bgCardLighterColor from "../../../theme/bgCardLighterColor";
import bgCardColor from "../../../theme/bgCardColor";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import colors from "../../../theme/colors";
export default function AddMarksCard({ item, index }) {
  // "_id": "62bb1d7c4871208891665f2f",
  // "firstName": "Juwel",
  // "lastName": " Shaikh",
  // "regNo": "123-12-01",
  // "roll": "1",
  return (
    <Box
      w={wp("90%")}
      h={hp("50%")}
      my={"2"}
      borderRadius={"md"}
      p={"3"}
      borderLeftWidth={"10"}
      shadow={"3"}
      bg={bgCardLighterColor[index]}
      borderLeftColor={bgCardColor[index]}
      alignSelf={"center"}
    >
      <Text bold fontSize={"lg"} color={bgCardColor[index]}>
        {item.firstName} {item.lastName}
      </Text>
      <Text bold color={colors.gray}>
        Reg. No. : {item.regNo}
      </Text>
      <Text bold color={colors.gray}>
        Roll No. : {item.roll}
      </Text>
      <HStack alignItems={"center"} justifyContent={"space-between"} my="1">
        <Text bold color={colors.gray}>
          WRITTEN (50)
        </Text>
        <Input
        w={wp("45%")}
          placeholder="Enter Marks"
          placeholderTextColor={colors.gray}
          borderRadius={"md"}
          borderColor={colors.primary}
          borderWidth={"1"}
        />
      </HStack>
      <HStack alignItems={"center"} justifyContent={"space-between"} my="1">
        <Text bold color={colors.gray}>
        PRACTICAL (0)
        </Text>
        <Input
        w={wp("45%")}
          placeholder="Enter Marks"
          placeholderTextColor={colors.gray}
          borderRadius={"md"}
          borderColor={colors.primary}
          borderWidth={"1"}
        />
      </HStack>
      <HStack alignItems={"center"} justifyContent={"space-between"} my="1">
        <Text bold color={colors.gray}>
        ATTENDANCE (0)
        </Text>
        <Input
        w={wp("45%")}
          placeholder="Enter Marks"
          placeholderTextColor={colors.gray}
          borderRadius={"md"}
          borderColor={colors.primary}
          borderWidth={"1"}
        />
      </HStack>
      <HStack alignItems={"center"} justifyContent={"space-between"} my="1">
        <Text bold color={colors.gray}>
        VIVA (0)
        </Text>
        <Input
        w={wp("45%")}
          placeholder="Enter Marks"
          placeholderTextColor={colors.gray}
          borderRadius={"md"}
          borderColor={colors.primary}
          borderWidth={"1"}
        />
      </HStack>
      <HStack alignItems={"center"} justifyContent={"space-between"} my="1">
        <Text bold color={colors.gray}>
        PRESENTATION (0)
        </Text>
        <Input
        w={wp("45%")}
          placeholder="Enter Marks"
          placeholderTextColor={colors.gray}
          borderRadius={"md"}
          borderColor={colors.primary}
          borderWidth={"1"}
        />
      </HStack>
    </Box>
  );
}
