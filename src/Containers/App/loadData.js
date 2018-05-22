import activities from '../../data/activities';

const key = process.env.REACT_APP_STRAVA_ACCESS_TOKEN;
const athleteId = process.env.REACT_APP_MY_ATHLETE_ID;

const stravaRootApiPath = 'https://www.strava.com/api/v3';
const getObjectFromJson = (response) => response.json();

const stravaPath = {
  athlete: `${stravaRootApiPath}/athletes/${athleteId}`,
  activities: `${stravaRootApiPath}/athlete/activities`
}

const requestOptions = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${key}`
  }
};

const getStartingDateOfCurrentWeek = () => {
  const currentDay = new Date(); // get current date
  const first = currentDay.getDate() - currentDay.getDay(); // First day is the day of the month - the day of the week
  const firstDay = new Date(currentDay.setDate(first)).setHours(0,0,0,0);
  return ( Math.round(firstDay / 1000) );
};

const loadData = (query) => {
  // const date = getStartingDateOfCurrentWeek();
  // const url = `${stravaPath[query]}?after=${date}`;
  const url = `${stravaPath[query]}`;
  if(process.env.NODE_ENV === 'development') {
    return activities;
  } else {
    return fetch(url, requestOptions)
      .then(getObjectFromJson);
  }
};

export default loadData;

