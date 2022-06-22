import React from "react";
import { Box, FlatList } from "native-base";
import ExamHeader from "./ExamHeader";
import colors from "../../../theme/colors";
import ScheduleCard from "./ScheduleCard";

export default function Schedule() {
  const [examSchedule, setExamSchedule] = React.useState([]);

  return (
    <Box flex={"1"}>
      <ExamHeader setExamSchedule={setExamSchedule}  examSchedule={examSchedule} type="Schedule"/>
      <FlatList
      mt="6"
        bg={colors.primaryLight}
        showsVerticalScrollIndicator={false}
        borderTopLeftRadius={'30'}
        borderTopRightRadius={'30'}
        data={examSchedule}
        renderItem={({item, index}) => (
          <ScheduleCard item={item} index={index} />
        )}
        keyExtractor={item => item.subject}
      />
    </Box>
  );
}
