import { Box, HStack, Text, VStack} from 'native-base';
import colors from "../../../theme/colors.js";
import bgCardColor from "../../../theme/bgCardColor.js";
import bgCardLighterColor from "../../../theme/bgCardLighterColor.js";
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const AcademicCard = ({data,index}) => {
  // "__v": 0,
  // "_id": "62764e461057b805baecb0cb",
  // "deviceId": "",
  // "employeeName": "Jahangir Hossain",
  // "endTime": "19:17",
  // "isBreak": "no",
  // "room": "101",
  // "startTime": "18:17",
  // "subjectId": "62694c925020b31b62a0eb95",
  // "subjectName": "Accounting",
  // "teacherId": "62764e461057b805baecb0cb",
  // const { title,icon} = item;
  //   const navigation = useNavigation();
  //   var navigateTo = title.split(' ').join('')
  const { startTime, subjectName, room } = data;
console.log({data});
  return (
    <Box
      alignSelf={"center"}
      alignItems={"center"}
      justifyContent={"center"}
      w={wp("92%")}
      h={hp("13%")}
      my={"2"}
      borderRadius={"md"}
      borderLeftWidth={wp("2%")}
      p={"2"}
      borderLeftColor={bgCardColor[index]}
      shadow={"5"}
      bg={bgCardLighterColor[index]}
    >
      <HStack w={wp("80%")} px="2" justifyContent={"space-between"}>
        <VStack
          w={wp("25%")}
          justifyContent={"center"}
          alignItems={"center"}
          p="2"
        >
          <Text fontSize="md" fontWeight="bold" color={colors.darkGary}>
            {startTime} 
          </Text>
        </VStack>
        <VStack w={wp("60%")} p="2">
          <Text fontSize="md" bold color={bgCardColor[index]}>
            {subjectName}
          </Text>
          <Text color={colors.darkGary} fontSize="sm">
            Room: {room}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default AcademicCard;

{/* <Button
onPress={() => navigation.navigate(navigateTo)}
  variant={'unstyled'}
  h={hp('20%')}
  p="2"
  m="3"
  alignSelf={'center'}
  borderRadius={'md'}
  w={wp('40%')}
  shadow={'3'}
  bg={bgCardLighterColor[index]}>
  <Center>
    {icon}
    <Text
      fontSize={'lg'}
      color={bgCardColor[index]}
      bold
      py="2"
      textAlign="center">
      
      {title}
    </Text>
  </Center>
</Button> */}