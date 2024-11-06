import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';
// import Overview from './Overview';
// import AssetList from '../../components/AssetList';
import Overview from '../components/Overview';

const Dashboard = () => {
  return (
    <main className="">
      <Tabs h="100vh">
        <TabList>
          {/* <Tab>OverView</Tab> */}
          <Tab>Assets</Tab>
          {/* <Tab>Three</Tab> */}
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <Overview />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
};
export default Dashboard;
