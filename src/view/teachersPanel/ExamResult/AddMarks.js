import { Box, FlatList } from "native-base";
import React from "react";
import colors from "../../../theme/colors";
import AddMarksCard from "./AddMarksCard";

import ExamHeader from "./ExamHeader";

export default function AddMarks() {
  const [examMarksData, setExamMarksData] = React.useState([]);
  const [studentData, setStudentData] = React.useState([]);
  console.log(
    "studentData===============================================>",
    studentData
  );
  return (
    <Box flex={"1"}>
      <ExamHeader setStudentData={setStudentData} type="AddMarks" />
      <FlatList
      contentContainerStyle={{ paddingBottom: "5%" }}
        mt="6"
        bg={colors.primaryLight}
        py="2"
        showsVerticalScrollIndicator={false}
        borderTopLeftRadius={"30"}
        borderTopRightRadius={"30"}
        data={studentData}
        renderItem={({ item, index }) => (
          <AddMarksCard item={item} index={index} />
        )}
        keyExtractor={(item) => item.subject}
      />
    </Box>
  );
}
