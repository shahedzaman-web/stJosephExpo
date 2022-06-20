import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Box, Button, HStack, Text} from 'native-base';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../theme/colors';

const NavigationAppHeader = props => {
  const navigation = useNavigation();
  // //console.log({props});
  const title = props.children.match(/[A-Z][a-z]+/g).join(' ');
  return (
    <HStack w="100%" alignItems={'center'} justifyContent={'center'}>
      <Button
        variant={'unstyled'}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <MaterialIcons
         
          name="menu"
          size={24}
          color={colors.white}
        />
      </Button>
      <Box justifyContent="center" alignItems="center" w="100%">
        <Text
          textAlign={'center'}
          fontWeight="bold"
          color={colors.white}
          fontSize="lg">
          {title}
        </Text>
      </Box>
    </HStack>
  );
};

export default NavigationAppHeader;
