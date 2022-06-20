import { Button, Center, Text} from 'native-base';

import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import bgCardColor from '../../../theme/bgCardColor';

import bgCardLighterColor from '../../../theme/bgCardLighterColor';
import { useNavigation } from '@react-navigation/native';

const AcademicCard = ({item, index}) => {
  const { title,icon} = item;
    const navigation = useNavigation();
    var navigateTo = title.split(' ').join('')

  return (
    <Button
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
    </Button>
  );
};

export default AcademicCard;
