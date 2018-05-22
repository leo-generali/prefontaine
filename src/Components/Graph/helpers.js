import { DAYS_OF_WEEK, DAY_IN_MILLI } from './constants';

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
  const currentDay = process.env.NODE_ENV === 'development' ? new Date(runActivities[0]['start_date']) : new Date();
  // if(process.env.NODE_ENV === 'development') {
  //   return activities;
  // } else {
  //   return fetch(url, requestOptions)
  //     .then(getObjectFromJson);
  // }
  // const currentDay = new Date();
  for(let i = 0; i < 7; i++) {
    const dateInMilliseconds = getDay(currentDay - (i * DAY_IN_MILLI));
    const pastDate = new Date(dateInMilliseconds);
    const object = { date: pastDate };
    for(let i = 0; i < runActivities.length; i++) {
      const activityDate = new Date(runActivities[i]['start_date']);
      if(isSameDate(activityDate, pastDate)) {
        object['name'] = runActivities[i]['name'];
        object['distance'] = runActivities[i]['distance'];
        break;
      }
    }
    days.push(object);
  };
  return days;
};

export { createArray };