export default function getTimeElapsed(timestamp: string) {
  const currentDate = new Date();
  const previousDate = new Date(timestamp);
  const timeDifference = currentDate.getTime() - previousDate.getTime();
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const millisecondsPerHour = 60 * 60 * 1000;
  const millisecondsPerMinute = 60 * 1000;
  const daysElapsed = Math.floor(timeDifference / millisecondsPerDay);
  const hoursElapsed = Math.floor((timeDifference % millisecondsPerDay) / millisecondsPerHour);
  const minutesElapsed = Math.floor((timeDifference % millisecondsPerHour) / millisecondsPerMinute);

  return { daysElapsed, hoursElapsed, minutesElapsed };
}
