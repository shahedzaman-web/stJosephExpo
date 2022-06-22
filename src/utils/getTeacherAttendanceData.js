import moment from "moment";
const getTeacherAttendanceData = (attendances = []) => {
  const markedDates = {};
  attendances.forEach((attendance) => {
    const date = attendance.date;
    const formattedDate = moment(date, "DD-MM-YYYY").format("YYYY-MM-DD");
    const loginTime = attendance.login;
    const logoutTime = attendance.logout;
    markedDates[formattedDate] = {
      color: (loginTime !== "" || logoutTime !== "") && "#3dcf8b",
    };
  });

  return markedDates;
};
export default getTeacherAttendanceData;
