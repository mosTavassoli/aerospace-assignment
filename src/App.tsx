import { useState } from "react";
import "react-tabs/style/react-tabs.css";
import SpectrumWS from "./pages/SpectrumWS";
import SpectrumStatus from "./pages/SpectrumStatus";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Assignment A</Tab>
        <Tab>Assignment B</Tab>
      </TabList>
      <TabPanel>
        <SpectrumStatus />
      </TabPanel>
      <TabPanel>
        <SpectrumWS />
      </TabPanel>
    </Tabs>
  );
}

export default App;
