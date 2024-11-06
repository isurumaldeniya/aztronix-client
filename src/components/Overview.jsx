import { Grid, GridItem } from '@chakra-ui/react';
import PieChartComponent from './Charts/PieChart';
import LineChartComponent from './Charts/LineChart';
import BarChartComponent from './Charts/BarChart';
import StackedBarChartComponent from './Charts/StackedBarChart';
import PowerFactor from './Charts/PowerFactor';
import { GaugeChart } from './Charts/GaugeBar';

const Overview = () => {
  return (
    <Grid
      h="100%"
      templateRows="repeat(3, 1fr)"
      templateColumns={{ sm: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }}
      gap={4}
      bg="gray.300"
      p={3}
    >
      <GridItem boxShadow="dark-lg" rowSpan={2} colSpan={2} bg="gray.200" borderRadius="md" minWidth="fit-content">
        <BarChartComponent />
      </GridItem>
      <GridItem boxShadow="dark-lg" colSpan={2} bg="gray.200" borderRadius="md" minWidth="fit-content">
        <PieChartComponent />
      </GridItem>
      <GridItem boxShadow="dark-lg" colSpan={2} bg="gray.200" borderRadius="md" minWidth="fit-content" minHeight="fit-content">
        <GaugeChart
          title="Power Generation"
          label="Power Generation"
          leftTitle="Site generator capacity"
          rightTitle="Generated power"
          leftValue="80,0"
          rightValue="9,0"
          gaugeValue={56.7}
          valueUnit="kw"
        />
      </GridItem>
      <GridItem boxShadow="dark-lg" pt={2} colSpan={4} bg="gray.200" borderRadius="md" minWidth="fit-content" minHeight="fit-content">
        <LineChartComponent />
      </GridItem>
      <GridItem boxShadow="dark-lg" rowSpan={2} colSpan={4} bg="gray.200" borderRadius="md" minWidth="fit-content" minHeight="fit-content">
        <StackedBarChartComponent />
      </GridItem>
      <GridItem boxShadow="dark-lg" colSpan={2} bg="gray.200" borderRadius="md" minWidth="fit-content" minHeight="fit-content">
        <PowerFactor />
      </GridItem>
      <GridItem boxShadow="dark-lg" colSpan={2} bg="gray.200" borderRadius="md" minWidth="fit-content"> 
        <GaugeChart
          title="Power demand"
          label="Power demand"
          leftTitle="Contractual power"
          rightTitle="Active power"
          leftValue="400,0"
          rightValue="320,0"
          gaugeValue={72.6}
          valueUnit="kw"
        />
      </GridItem>
    </Grid>
  );
};
export default Overview;
