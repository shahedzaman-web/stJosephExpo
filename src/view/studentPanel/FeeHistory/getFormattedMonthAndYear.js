const getFormattedMonthAndYear = (month, year) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let monthNumber = parseInt(month)
    let monthName = months[monthNumber - 1];
    
    return `${monthName}, ${year}`;
    }

    export default getFormattedMonthAndYear;