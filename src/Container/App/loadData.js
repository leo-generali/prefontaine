const key = process.env.REACT_APP_STRAVA_ACCESS_TOKEN;
const athleteId = process.env.REACT_APP_MY_ATHLETE_ID;

const stravaRootApiPath = 'https://www.strava.com/api/v3';
const getObjectFromJson = (response) => response.json();

const stravaPath = {
  athlete: `${stravaRootApiPath}/athletes/${athleteId}`,
  activities: `${stravaRootApiPath}/athlete/activities/`
}

const loadData = (query) => {
  console.log(loadData);
  const url = `${stravaPath[query]}?access_token=${key}`;
  console.log(url);
  return fetch(url)
    .then(getObjectFromJson)
};

export default loadData;

