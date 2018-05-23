import { DAY_IN_MILLI } from './constants';

const isSameDate = (dateOne, dateTwo) => {
  return (
    dateOne.getUTCFullYear() === dateTwo.getUTCFullYear() &&
    dateOne.getUTCMonth() === dateTwo.getUTCMonth() &&
    dateOne.getUTCDate() === dateTwo.getUTCDate()
  );
}

const getDay = (day) => {
  return day >= 0 ? day : 7 - Math.abs(day);
};

const createArray = (runActivities) => {
  const days = [];
  const currentDay = new Date(runActivities[0]['start_date']);
  console.log(currentDay);

  for(let i = 6; i > -1; i--) {
    const dateInMilliseconds = getDay(currentDay - (i * DAY_IN_MILLI));
    const pastDate = new Date(dateInMilliseconds);
    const object = { date: pastDate };

    for(let x = 0; x < runActivities.length; x++) {
      const activityDate = new Date(runActivities[x]['start_date']);

      if(isSameDate(activityDate, pastDate)) {
        object['name'] = runActivities[x]['name'];
        object['distance'] = runActivities[x]['distance'] += runActivities[x]['distance'];
      }
    }
    days.push(object);
  };
  return days;
};

export { createArray };