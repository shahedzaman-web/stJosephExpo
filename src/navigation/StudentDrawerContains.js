import {
  Box,
  Text,
  Avatar,
  HStack,
  Divider,
  VStack,
  Button,
  Pressable,
  ZStack,
  Center,
  ScrollView
} from 'native-base';
import React from 'react';
import colors from '../theme/colors';
import { AntDesign,FontAwesome,FontAwesome5,Feather,MaterialIcons,Ionicons } from '@expo/vector-icons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { logout } from '../store/slices/authSlice';
import baseURL from '../utils/baseURL';

const StudentDrawerContains = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [toggleDropdownAcademic, setToggleDropdownAcademic] =
    React.useState(false);
    const userInfo = useSelector(state => state.auth.userInfo);

  const handleLogout = async() => {
    dispatch(logout())
 
     navigation.replace('Login');
  };
  return (
    <ZStack
      borderTopLeftRadius={'30'}
      borderTopRightRadius={'30'}
      mt={hp('18%')}
      bg={colors.primaryLight}
      flex={1}>
      <Center
        position={'absolute'}
        zIndex={2}
        top={hp('-13%')}
        w={wp('68%')}
        h={hp('20%')}
        alignSelf={'center'}>
        <Text
          py="3"
          color={colors.primary}
          fontSize="lg"
          fontWeight="bold"
          textAlign="center">
          Dashboard
        </Text>
        <Box
          justifySelf={'center'}
          bg={colors.white}
          shadow={'5'}
          w={wp('60%')}
          borderRadius="md"
          p="3">
          <HStack w="100%" alignItems="center" justifyContent="space-between">
            <Avatar
              bg="green.500"
              source={{
                uri: baseURL + '/studentProfile/' + userInfo.profilePhoto,
              }}>
               <Text fontSize={"2xs"}> {userInfo.firstName} {userInfo.lastName}</Text>
            </Avatar>
            <Box w="70%">
              <Text color={colors.primary} fontSize="md" fontWeight="bold">
              {userInfo.firstName} {userInfo.lastName}
              </Text>
              <Divider
                my="2"
                _light={{
                  bg: '#BBBFCA',
                }}
                _dark={{
                  bg: 'muted.50',
                }}
              />
              <Text>Class : {userInfo.class.className}</Text>
              <Text>Section : {userInfo.section.sectionName}</Text>
              <Text>Roll : {userInfo.roll} </Text>
              
            </Box>
          </HStack>
        </Box>
      </Center>
      <ScrollView style={{flex: 1}}>
      <VStack w="100%" mx="3" alignItems={'flex-start'} mt={hp('12%')}>
        <Button
          onPress={() => navigation.navigate('StudentTab', {screen: 'Profile'})}
          _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: colors.primary,
            paddingLeft: '4',
          }}
          variant={'unstyled'}
          leftIcon={
            <FontAwesome5 name="user-alt" size={20} color={colors.primary} />
          }>
          Profile
        </Button>
        {/* <Button
          onPress={() => navigation.navigate('TeacherList')}
          _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: colors.primary,
            paddingLeft: '4',
          }}
          variant={'unstyled'}
          leftIcon={
            <FontAwesome5
              name="chalkboard-teacher"
              size={16}
              color={colors.primary}
            />
          }>
          Teacher
        </Button> */}
        <Pressable
          variant={'unstyled'}
          w="100%"
          onPressIn={() => setToggleDropdownAcademic(prevState => !prevState)}>
          <HStack
            w="100%"
            pr="5"
            alignItems="center"
            justifyContent="space-between">
            <HStack alignItems={'center'} pl="3">
              <FontAwesome5
                name="school"
                size={18}
                color={colors.primary}
              />
              <Text
                 pl="5"
                fontWeight="bold"
                fontSize="md"
                color={colors.primary}>
                Academic
              </Text>
            </HStack>

            <AntDesign name="down" size={wp('6%')} color={colors.primary} />
          </HStack>
          <VStack w="100%">
            {toggleDropdownAcademic && (
              <Box ml="8" alignItems={'flex-start'}>
                <Button
                  onPress={() => navigation.navigate('AcademicSubject')}
                  variant={'unstyled'}
                  leftIcon={
                    <FontAwesome5
                      name="book-open"
                      size={20}
                      color={colors.primary}
                    />
                  }
                  _text={{
                    fontSize: 'md',
                    fontWeight: 'bold',
                    color: colors.primary,
                  }}>
                  Subject
                </Button>
                <Button
                  onPress={() => navigation.navigate('ClassSchedule')}
                  variant={'unstyled'}
                  leftIcon={
                    <FontAwesome5
                      name="clock"
                      size={20}
                      color={colors.primary}
                    />
                  }
                  _text={{
                    fontSize: 'md',
                    fontWeight: 'bold',
                    color: colors.primary,
                  }}>
                  Class Schedule
                </Button>
              </Box>
            )}
          </VStack>
        </Pressable>
        {/* <Button
          onPress={() => navigation.navigate('LeaveApplication')}
          _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: colors.primary,
            paddingLeft: '4',
          }}
          variant={'unstyled'}
          leftIcon={
            <FontAwesome5
              name="newspaper"
              size={18}
              color={colors.primary}
            />
          }>
          Leave Application
        </Button> */}
        <Button
          onPress={() => navigation.navigate('AttachmentsBook')}
          _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: colors.primary,
            paddingLeft: '4',
          }}
          variant={'unstyled'}
          leftIcon={
            <FontAwesome
              name="cloud-upload"
              size={18}
              color={colors.primary}
            />
          }>
          Attachments Book
        </Button>
        <Button
          onPress={() => navigation.navigate('HomeWork')}
          _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: colors.primary,
            paddingLeft: '4',
          }}
          variant={'unstyled'}
          leftIcon={
            <FontAwesome
              name="pencil-square-o"
              size={20}
              color={colors.primary}
            />
          }>
          Home Work
        </Button>
        <Button
          onPress={() =>
            navigation.navigate('StudentTab', {screen: 'Examination'})
          }
          _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: colors.primary,
            paddingLeft: '4',
          }}
          variant={'unstyled'}
          leftIcon={
            <Ionicons
              name="ios-school-sharp"
              size={20}
              color={colors.primary}
            />
          }>
          Exam Master
        </Button>

        <Button
          onPress={() =>
            navigation.navigate('StudentTab', {screen: 'Attendance'})
          }
          _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: colors.primary,
            paddingLeft: '4',
          }}
          variant={'unstyled'}
          leftIcon={
            <Feather
              name="bar-chart-2"
              size={20}
              color={colors.primary}
            />
          }>
          Attendance
        </Button>
        <Button
          onPress={() => navigation.navigate('Events')}
          _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: colors.primary,
            paddingLeft: '4',
          }}
          variant={'unstyled'}
          leftIcon={
            <MaterialIcons
              name="event-note"
              size={20}
              color={colors.primary}
            />
          }>
          Events
        </Button>
        <Button
          onPress={() => navigation.navigate('FeeHistory')}
          _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: colors.primary,
            paddingLeft: '4',
          }}
          variant={'unstyled'}
          leftIcon={
            <AntDesign
              name="calculator"
              size={20}
              color={colors.primary}
            />
          }>
          Fee History
        </Button>
        <Button
          onPress={handleLogout}
          _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: colors.primary,
            paddingLeft: '4',
          }}
          variant={'unstyled'}
          leftIcon={
            <MaterialIcons
              name="logout"
              size={20}
              color={colors.primary}
            />
          }>
          Logout
        </Button>
      </VStack>
      </ScrollView>
    </ZStack>
  );
};

export default StudentDrawerContains;
