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

  for(let i = 6; i > -1; i--) {
    const dateInMilliseconds = getDay(currentDay - (i * DAY_IN_MILLI));
    const pastDate = new Date(dateInMilliseconds);

    const filteredArray = runActivities.filter(activity =>
      isSameDate(new Date(activity['start_date']), pastDate)
    );

    let distance = 0;
    for(let x = 0; x < filteredArray.length; x++) {
      distance += filteredArray[x]['distance'];
    }

    const object = {
      date: pastDate,
      distance
    };

    days.push(object);
  };
  return days;
};

export { createArray };