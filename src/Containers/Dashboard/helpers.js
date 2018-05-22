const getRunActivities = (activities) => {
  const runActivities = activities.filter(activity => {
    return activity.type === "Run";
  });
  return runActivities;
};

export { getRunActivities };