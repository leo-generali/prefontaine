import React from 'react';
import Bar from './Bar';
import Chart from './Chart';

const BarChart = ({ data }) => {
  const itemWidth = 30;
  const itemMargin = 15;
  const length = data.length;

  const mostMileage = data.reduce((acc, cur) => {
    const { distance } = cur;
    return distance > acc ? distance : acc;
  }, 0);

  const maxHeight = 200;
  const decrease = mostMileage - maxHeight;
  const percent = (100 - (decrease / mostMileage * 100)) / 100;

  const massagedData = data.map(activity =>
    Object.assign({}, activity,
      {
        distance: activity.distance,
        height: activity.distance * percent
      }
    )
  );

  const chartHeight = maxHeight;
  const chartWidth = length * (itemWidth + itemMargin);

  return (
    <Chart width={chartWidth} height={chartHeight} >
      {massagedData.map((activity, index) => {
        const itemHeight = activity.height;
        const barYAxis = chartHeight - itemHeight;
        return (
          <Bar
            key={activity.name}
            x={index * (itemWidth + itemMargin)}
            y={barYAxis ? barYAxis : 0}
            width={itemWidth}
            height={itemHeight ? itemHeight : 0}
          />
        );
      })}
    </Chart>
  );
}

export default BarChart;