import React from "react";
import EvaluationHeader from "./EvaluationHeader";
import { Box, FlatList } from "native-base";
import EvaluationCard from "./EvaluationCard";
import colors from "../../../../theme/colors";
export default function Evaluation() {
  const [homeworkData, setHomeworkData] = React.useState([]);

  return (
    <Box flex={"1"}>
      <EvaluationHeader setHomeworkData={setHomeworkData} />
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
    </Box>
  );
}
