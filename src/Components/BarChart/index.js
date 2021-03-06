import React from 'react';
import Bar from './Bar';
import Chart from './Chart';

import { DAYS_OF_WEEK_SHORT } from '../Graph/constants';

const BarChart = ({ data, metricDisplayDistance }) => {
  const itemWidth = 50;
  const itemMargin = 20;
  const length = data.length;

  const mostMileage = data.reduce((acc, cur) => {
    const { distance } = cur;
    return distance > acc ? distance : acc;
  }, 0);

  const chartHeight = 215;
  const rectHeight = 200;

  const decrease = mostMileage - rectHeight;
  const percent = (100 - (decrease / mostMileage * 100)) / 100;

  const massagedData = data.map(activity =>
    Object.assign({}, activity,
      {
        distance: activity.distance,
        height: activity.distance * percent
      }
    )
  );

  const chartWidth = (length * (itemWidth + itemMargin)) - itemMargin;

  return (
    <Chart width={chartWidth} height={chartHeight} >
      {massagedData.map((activity, index) => {
        const itemHeight = activity.height;
        const barYAxis = rectHeight - itemHeight;
        const month = activity['date'].getMonth() + 1;
        const day = activity['date'].getDate();

        return (
          <Bar
            index={index}
            key={index}
            x={index * (itemWidth + itemMargin)}
            y={barYAxis ? barYAxis : 0}
            width={itemWidth}
            height={itemHeight ? itemHeight : 0}
            rx={0}
            ry={0}
            base={chartHeight}
            distance={activity.distance}
            day={DAYS_OF_WEEK_SHORT[activity['date'].getDay()]}
            date={`${month}/${day}`}
            metricDisplayDistance={metricDisplayDistance}
          />
        );
      })}
    </Chart>
  );
}

export default BarChart;