export default (hours: number, minutes: number) => {
  // Combine hours and minutes into total minutes of the day
  const totalMinutes = hours * 60 + minutes;

  // Define time ranges in minutes (24-hour format)
  const morningStart = 5 * 60; // 5:00 AM in minutes
  const morningEnd = 11 * 60 + 59; // 11:59 AM in minutes
  const afternoonStart = 12 * 60; // 12:00 PM in minutes
  const afternoonEnd = 16 * 60 + 59; // 4:59 PM in minutes

  if (totalMinutes >= morningStart && totalMinutes <= morningEnd) {
    return 'Good Morning! 🌞';
  } else if (totalMinutes >= afternoonStart && totalMinutes <= afternoonEnd) {
    return 'Good Afternoon! ⛅';
  } else {
    return 'Good Evening! 💤';
  }
};
