import {Avatar, Box, HStack, Text, VStack} from 'native-base';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import bgCardColor from '../../../theme/bgCardColor';
import bgCardLighterColor from '../../../theme/bgCardLighterColor';
const StudentCard = ({item, index}) => {
   
  return (
    <Box
      my="3"
      p="2"
      justifyContent={'center'}
      mx="auto"
      w={wp('92%')}
      h={hp('20%')}
      alignSelf="center"
      borderRadius={'md'}
      borderLeftWidth={'10'}
      borderLeftColor={bgCardColor[index]}
      shadow={'3'}
      bg={bgCardLighterColor[index]}>
        <HStack alignItems={"center"}>
        <Avatar
              bg="green.500"
              source={{
                uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
              }}>
              AJ
            </Avatar>      
            <VStack ml="4">
            <Text bold fontSize="md" color={bgCardColor[index]}>
        {item.name}
      </Text>
      <Text fontSize="md">Roll: {item.roll}</Text>
      <Text fontSize="md">Reg Number: {item.regNumber}</Text>
      <Text fontSize="md">Attendance: {item.attendance}</Text>
      <Text fontSize="md">Guardian: {item.guardian}</Text>
      <Text fontSize="md">Guardian Phone: {item.guardianPhone}</Text>
            </VStack>
        </HStack>
    </Box>
  );
};

export default StudentCard;
