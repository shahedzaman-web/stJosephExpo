import moment from 'moment';
const getMarkedDates = (attendances = []) => {
  const markedDates = {};
  attendances.forEach(attendance => {
    const date = attendance.date;
    const status = attendance.status;
    const formattedDate = moment(date, 'DD-MM-YYYY').format('YYYY-MM-DD');

    markedDates[formattedDate] = {
      color:
        status === 'present'
          ? '#3dcf8b'
          : status === 'absent'
          ? '#f44336'
          : '#ffc107',
    };
  });

  return markedDates;
};
export default getMarkedDates;
