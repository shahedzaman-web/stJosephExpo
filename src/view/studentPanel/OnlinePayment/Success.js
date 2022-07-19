import React from 'react'
import { Box, Button, Center, Image, Text } from 'native-base'
import colors from '../../../theme/colors'

export default function Success({navigation}) {
  return (
    <Box flex={"1"} safeArea bg={colors.primaryLight}>
        <Center flex="1">
            <Image
                source={require('../../../asset/paymentSuccess.gif')}
                        size="2xl"
            /> 
             <Text my="3"
        fontSize="lg"
         bold color={colors.passBg}>
          Payment Successful!
        </Text>
            <Button
            mt="6"
            onPress={() => navigation.replace("StudentProfile")}
            varient="unstyled"
            bg={colors.primary}
            ><Text bold color={colors.white}>
                Go to Home
            </Text></Button>
        </Center>
    </Box>
  )
}