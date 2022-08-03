import React from "react";
import EvaluationHeader from "./EvaluationHeader";
import { Box, Center, FlatList, Text } from "native-base";
import EvaluationCard from "./EvaluationCard";
import colors from "../../../../theme/colors";
export default function Evaluation() {
  const [homeworkData, setHomeworkData] = React.useState([]);
  const [isHomeWorkEmpty, setIsHomeWorkEmpty] = React.useState(false);
  return (
    <Box flex={"1"}>
      <EvaluationHeader
        setIsHomeWorkEmpty={setIsHomeWorkEmpty}
        setHomeworkData={setHomeworkData}
      />
      {homeworkData.length === 0 && isHomeWorkEmpty ? (
        <Box
          mt="6"
          flex={1}
          bg={colors.primaryLight}
          borderTopLeftRadius={"30"}
          borderTopRightRadius={"30"}
        >
          <Center mt="3">
            <Text fontSize={"lg"} bold color={colors.primary}>
              No Home Work Found!
            </Text>
          </Center>
        </Box>
      ) : (
        <FlatList
          contentContainerStyle={{ paddingBottom: "10%" }}
          mt="6"
          bg={colors.primaryLight}
          py="2"
          showsVerticalScrollIndicator={false}
          borderTopLeftRadius={"30"}
          borderTopRightRadius={"30"}
          data={homeworkData}
          renderItem={({ item, index }) => (
            <EvaluationCard item={item} index={index} />
          )}
          keyExtractor={(item) => item.subject}
        />
      )}
    </Box>
  );
}
