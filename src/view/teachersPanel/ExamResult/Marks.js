import React from "react";
import { Box, Center, FlatList, Text } from "native-base";
import ExamHeader from "../Examination/ExamHeader";
import MarksCard from "../../studentPanel/Examination/MarksCard";
import colors from "../../../theme/colors";

export default function Marks() {
  const [examMarksData, setExamMarksData] = React.useState([]);
  const [isMarksEmpty, setIsMarksEmpty] = React.useState(false);
  return (
    <Box flex={"1"}>
      <ExamHeader
        setIsMarksEmpty={setIsMarksEmpty}
        setExamMarksData={setExamMarksData}
        type="Marks"
      />
      {examMarksData?.length === 0 && isMarksEmpty ? (
        <Box
          mt="6"
          flex={1}
          bg={colors.primaryLight}
          borderTopLeftRadius={"30"}
          borderTopRightRadius={"30"}
        >
          <Center mt="3">
            <Text fontSize={"lg"} bold color={colors.primary}>
              No Marks Found!
            </Text>
          </Center>
        </Box>
      ) : (
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
      )}
    </Box>
  );
}
