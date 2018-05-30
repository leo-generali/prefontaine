import React from 'react';
import View from './View';

export default ({ id, firstname, profile }) => {
  const url = `https://www.strava.com/athletes/${id}`;

  return (
    <View profile={profile} url={url} firstname={firstname} />
  );
};