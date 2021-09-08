const currentDate = (unix) => {
  const timeElapsed = unix;
  const date = new Date(timeElapsed * 1000);

  const monthNames = [
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
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const shortWDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const currentMonth = monthNames[date.getMonth()];
  const currentWDay = weekDays[date.getDay()];
  const shortWDay = shortWDays[date.getDay()];

  return {
    day: date.getDate(),
    month: currentMonth,
    weekday: currentWDay,
    monthNum: date.getMonth(),
    weekNum: date.getDay(),
    short: shortWDay,
  };
};

export default currentDate;
