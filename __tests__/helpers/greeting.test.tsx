import getGreeting from '@screens/home/greeting'; // Update with the actual file name

describe('getGreeting', () => {
  test('should return "Good Morning! 🌞" between 5:00 AM and 11:59 AM', () => {
    expect(getGreeting(5, 0)).toBe('Good Morning! 🌞'); // Test start of morning
    expect(getGreeting(7, 30)).toBe('Good Morning! 🌞'); // Test mid-morning
    expect(getGreeting(11, 59)).toBe('Good Morning! 🌞'); // Test end of morning
  });

  test('should return "Good Afternoon! ⛅" between 12:00 PM and 4:59 PM', () => {
    expect(getGreeting(12, 0)).toBe('Good Afternoon! ⛅'); // Test start of afternoon
    expect(getGreeting(15, 45)).toBe('Good Afternoon! ⛅'); // Test mid-afternoon
    expect(getGreeting(16, 59)).toBe('Good Afternoon! ⛅'); // Test end of afternoon
  });

  test('should return "Good Evening! 💤" for the rest of the day', () => {
    expect(getGreeting(17, 0)).toBe('Good Evening! 💤'); // Test start of evening
    expect(getGreeting(23, 59)).toBe('Good Evening! 💤'); // Test late night
    expect(getGreeting(0, 0)).toBe('Good Evening! 💤'); // Test midnight
    expect(getGreeting(4, 59)).toBe('Good Evening! 💤'); // Test early morning before 5:00 AM
  });
});
