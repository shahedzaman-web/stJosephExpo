import {Avatar, Box, HStack, Text} from 'native-base';
import React from 'react';
import moment from 'moment';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import colors from '../../../theme/colors';
import baseURL from '../../../utils/baseURL';
const HeaderComponent = ({userInfo, totalClass}) => {
  const now = Date.now();

  return (
    <>
      <Box safeArea flex={1} bg={colors.white}>
        <HStack w={wp('100%')} m="2" py="2" alignItems={'center'}>
          <Avatar
            size="lg"
            bg={colors.primary}
            source={{
              uri: baseURL + '/studentProfile/' + userInfo.profilePhoto,
            }}>
            {userInfo.firstName} {userInfo.lastName}
          </Avatar>
          <HStack
            justifyContent={'space-between'}
            alignItems={'center'}
            w={wp('75%')}>
            <Box ml="3" justifyContent={'center'}>
              <Text color={colors.primary} fontSize="md" fontWeight="bold">
                Hi {userInfo.firstName} {userInfo.lastName}!
              </Text>

              <Text color={colors.primary} w={wp('45%')} fontSize="md">
                {moment(now).format('MMMM Do YYYY')}
              </Text>
            </Box>
          </HStack>
        </HStack>   
        <Box
          py="2"
          bg={colors.primaryLight}
          borderTopLeftRadius={'30'}
          borderTopRightRadius={'30'}>
          <HStack w={wp('100%')} p="2" px="4" justifyContent={'space-between'}>
            <Text color="#4f4d65" fontSize="lg" fontWeight="bold">
              Today's Class
              <Text color={colors.gray}>({totalClass})</Text>
            </Text>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default HeaderComponent;
