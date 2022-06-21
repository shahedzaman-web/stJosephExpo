import React from "react";
import { Box, FlatList } from "native-base";
import ExamHeader from "./ExamHeader";
import MarksCard from "../../studentPanel/Examination/MarksCard";
import colors from "../../../theme/colors";

export default function Marks() {
  const [examMarksData, setExamMarksData] = React.useState([]);
  return (
    <Box flex={"1"}>
      <ExamHeader setExamMarksData={setExamMarksData} type="Marks" />
      <FlatList
        mt="6"
        bg={colors.primaryLight}
        py="2"
        showsVerticalScrollIndicator={false}
        borderTopLeftRadius={"30"}
        borderTopRightRadius={"30"}
        data={examMarksData}
        renderItem={({ item, index }) => (
          <MarksCard item={item} index={index} />
        )}
        keyExtractor={(item) => item.subject}
      />
    </Box>
  );
}
