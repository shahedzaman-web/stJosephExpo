import {Box, Button, HStack, Text} from 'native-base';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import bgCardColor from '../../../theme/bgCardColor';
import bgCardLighterColor from '../../../theme/bgCardLighterColor';
import colors from '../../../theme/colors';
import moment from 'moment';
import { FontAwesome } from '@expo/vector-icons';

const FeeHistoryCard = ({item, index}) => {
  // "_id": "62c6cec6032ea8d99db88411",
  // "branch": Object {
  //   "_id": "62bb09e14871208891665f08",
  //   "branchName": "Demo Branch",
  // },
  // "class": Object {
  //   "_id": "62bb0d10144703b4d29778b8",
  //   "className": "Five",
  // },
  // "dueAmount": 0,
  // "invoiceDate": "2022-07-06T09:22:59.125Z",
  // "paid": 25000,
  // "paidVia": "online_payment",
  // "payable": 25000,
  // "payingMonth": "June, 2022",
  // "section": Object {
  //   "_id": "62bb0d1ede31d8981355df93",
  //   "sectionName": "A",
  // },
  // "session": Object {
  //   "_id": "62bb0cfc4871208891665f15",
  //   "sessionName": "2022-2023",
  // },
  // "status": "Paid",
  // "student": Object {
  //   "_id": "62c67ec2032ea8d99db883e7",
  //   "firstName": "Juwel",
  //   "lastName": "Shaikh",
  //   "mobileNo": "1778907190",
  //   "regNo": "123-12-02",
  //   "roll": "2",
  return (
    <Box
      w={wp('90%')}

      my={"3"}
      borderRadius="md"
      p={"2"}
      borderLeftWidth={'10'}
      shadow={'3'}
      bg={bgCardLighterColor[index]}
      alignSelf="center"
      borderLeftColor={bgCardColor[index]}>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Text bold fontSize="lg" color={colors.primary}>
        Due Amount :{item.dueAmount}
        </Text>
        <Box
          w={"20%"}
          h={"10"}
          justifyContent={'center'}
          alignItems={'center'}
          borderRadius="md"
          bg={item.status === 'Paid' ? colors.passBg :colors.failBg}>
          <Text bold fontSize="md" color={colors.white}>
            {item?.status}
          </Text>
        </Box>
      </HStack>
      <HStack alignItems={'center'}>
        <FontAwesome name="calendar-o" size={24} color={colors.darkGary} />
        <Text ml="1" color={colors.darkGary}>
        Invoice Date : {moment(item?.invoiceDate).format('DD-MM-YYYY')}
        </Text>
      </HStack>
      <Text color={colors.darkGary}>Paid Amount: {item?.paid}</Text>
      <Text color={colors.darkGary}>Paid Via: {item?.paidVia}</Text>
      <Text color={colors.darkGary}>Paying Month: {item?.payingMonth}</Text>
     
    </Box>
  );
};

export default FeeHistoryCard;
