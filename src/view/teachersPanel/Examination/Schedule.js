import React from "react";
import { Box, Center, FlatList, Text } from "native-base";
import ExamHeader from "./ExamHeader";
import colors from "../../../theme/colors";
import ScheduleCard from "./ScheduleCard";

export default function Schedule() {
  const [examSchedule, setExamSchedule] = React.useState([]);
  const [isScheduleEmpty, setIsScheduleEmpty] = React.useState(false);
  return (
    <Box flex={"1"}>
      <ExamHeader
        setExamSchedule={setExamSchedule}
        examSchedule={examSchedule}
        type="Schedule"
        setIsScheduleEmpty={setIsScheduleEmpty}
      />
      {examSchedule.length === 0 && isScheduleEmpty ?  (
        <Box flex={1} bg={colors.white}>
          <Box
            flex={1}
            bg={colors.primaryLight}
            borderTopLeftRadius={"30"}
            borderTopRightRadius={"30"}
          >
            <Center mt="3">
              <Text fontSize={"lg"} bold color={colors.primary}>
                No Schedule Found!
              </Text>
            </Center>
          </Box>
        </Box>
      ) : (
        <FlatList
          mt="6"
          bg={colors.primaryLight}
          showsVerticalScrollIndicator={false}
          borderTopLeftRadius={"30"}
          borderTopRightRadius={"30"}
          data={examSchedule}
          renderItem={({ item, index }) => (
            <ScheduleCard item={item} index={index} />
          )}
          keyExtractor={(item) => item.subject}
        />
      )}
    </Box>
  );
}
