import { Box, Center, HStack, Text } from 'native-base';
import React from 'react';
import bgCardColor from '../../../theme/bgCardColor';
import bgCardLighterColor from '../../../theme/bgCardLighterColor';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import colors from '../../../theme/colors';
const PayrollCard = ({item,index}) => {
    return (
        <Box
        h={hp('10%')}
        borderLeftColor={bgCardColor[index]}
        borderLeftWidth={10}
        borderRadius={'md'}
        mx={"2"}
        w={wp('92%')}
        my={"2"}
        shadow={'5'}
        alignSelf="center"
        justifyContent={'center'}
        bg={bgCardLighterColor[index]}
        p="2">
           <HStack py="1" alignItems={'center'} justifyContent="space-between">
           <Text 
            fontSize="lg"
            bold
            color={bgCardColor[index]}
            >{item.month}</Text>
            <Center 
           borderRadius="md" 
            w={wp("16%")}
            h={hp("5%")}
                bg={
                    item.paid === "Paid" ? colors.passBg : colors.failBg
                }
            >
                <Text 
                    color={colors.white}
                    bold
                >{item.paid}</Text>
            </Center>
           </HStack>
        </Box>
    );
};

export default PayrollCard;