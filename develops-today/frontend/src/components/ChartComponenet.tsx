import { PopulationChartContainer } from "@/app/countries/Country.styled";
import { VictoryChart, VictoryLine, VictoryTooltip, VictoryAxis } from 'victory';

interface PopulationChartProps {
  populationData: { year: number; value: number }[];
}

const PopulationChartComponent = ({ populationData }: PopulationChartProps) => {
  return (
    <PopulationChartContainer>
    <h2>Population Over Time</h2>
      <VictoryChart>
        <VictoryAxis
          label="Year"
          tickFormat={populationData.map(item => item.year)}
        />
        <VictoryAxis
          dependentAxis
          label="Population"
          tickFormat={(x) => `${(x / 1e6).toFixed(1)}M`}
        />
        <VictoryLine
          data={populationData}
          x="year"
          y="value"
          labels={({ datum }) => `${datum.value.toLocaleString()}`}
          labelComponent={<VictoryTooltip />}
        />
      </VictoryChart>
  </PopulationChartContainer>
  );
};

export default PopulationChartComponent;
