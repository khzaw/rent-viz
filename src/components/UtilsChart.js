import React, { Component } from 'react';
import { VictoryChart, VictoryBar, VictoryTheme, VictoryTooltip, VictoryStack } from 'victory';


const utilsData = [
  { month: 'January', value: (39.14 + 7.98), rent: 405, get label() { return this.value.toPrecision(4); } },
  { month: 'February', value: (50.45), rent: 405, get label() { return this.value.toPrecision(4); } },
  { month: 'March', value: (51.53), rent: 405, get label() { return this.value.toPrecision(4); } },
  { month: 'April', value: (52.87), rent: 405, get label() { return this.value.toPrecision(4); } },
];

class UtilsChart extends Component {
  render() {
  	return (
      <VictoryChart
        width={400}
        height={400}
        domainPadding={{ x: 20, y: [ 0, 20 ] }}
        name="2018"
        theme={VictoryTheme.material}
      >
      <VictoryBar
        style={{ data: { fill: '#c43a31' } }}
        data={utilsData}
        labels={d => `${d.month}`}
        x="month"
        y="value"
      />
    </VictoryChart>
		);
  }
}

export default UtilsChart;
