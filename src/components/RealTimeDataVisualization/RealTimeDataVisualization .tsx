import React, { useEffect, useState } from "react";
import GenericLineChart from "../Charts/GenericLineChart";

const RealTimeDataVisualization = ({
  altitudeData,
  velocityData,
  temperatureData,
}: any) => {
  const [altitudeChartData, setAltitudeChartData] = useState<number[]>([]);
  const [velocityChartData, setVelocityChartData] = useState<number[]>([]);
  const [temperatureChartData, setTemperatureChartData] = useState<number[]>(
    []
  );

  const updateChartData = (
    data: number,
    setData: React.Dispatch<React.SetStateAction<number[]>>
  ) => {
    if (data !== undefined) {
      setData((prevData) => [...prevData, data]);
    }
  };

  useEffect(() => {
    updateChartData(altitudeData, setAltitudeChartData);
  }, [altitudeData]);

  useEffect(() => {
    updateChartData(velocityData, setVelocityChartData);
  }, [velocityData]);

  useEffect(() => {
    updateChartData(temperatureData, setTemperatureChartData);
  }, [temperatureData]);

  return (
    <div className="grid grid-cols-3">
      <GenericLineChart
        chartData={altitudeChartData}
        chartLabel="Altitude"
        chartColor="red"
      />
      <GenericLineChart
        chartData={velocityChartData}
        chartLabel="Velocity"
        chartColor="blue"
      />
      <GenericLineChart
        chartData={temperatureChartData}
        chartLabel="Temperature"
        chartColor="green"
      />
    </div>
  );
};

// import React, { useEffect, useState } from "react";
// import { Chart, registerables } from "chart.js";

// // Your altitude chart component
// import useWebSocket from "@/hook/useWebSocket";
// import AltitudeChart from "../Charts/AltitudeChart";
// import { config } from "@/core/config";
// // import VelocityChart from './VelocityChart'; // Your velocity chart component
// // import TemperatureChart from './TemperatureChart'; // Your temperature chart component

// Chart.register(...registerables);

// type RealTimeDataVisualizationType = {
//   altitudeData: number;
//   velocityData: number;
//   temperatureData: number;
// };

// const RealTimeDataVisualization = ({
//   altitudeData,
// }: RealTimeDataVisualizationType) => {
//   const [altitudeSeries, setAltitudeSeries] = useState<number[]>([]);
//   const [velocityData, setVelocityData] = useState([]);
//   const [temperatureData, setTemperatureData] = useState([]);
//   const [error, setError] = useState(null);

//   // Handling WebSocket data reception for altitude
//   // const onAltitudeDataReceived = (data: any) => {
//   //   checkIsActionRequired(data.isActionRequired);
//   //   setAltitudeData((prevData) => [...prevData, data.altitude]);
//   // };

//   // const checkIsActionRequired = (isActionRequired: boolean) => {
//   //   if (isActionRequired) {
//   //     stopWebSocket();
//   //   }
//   // };

//   // Handling WebSocket data reception for velocity
//   //   const onVelocityDataReceived = (data) => {
//   //     setVelocityData((prevData) => [...prevData, data.velocity]);
//   //   };

//   //   // Handling WebSocket data reception for temperature
//   //   const onTemperatureDataReceived = (data) => {
//   //     setTemperatureData((prevData) => [...prevData, data.temperature]);
//   //   };

//   // Using the useWebSocket hook for each data type
//   // const { stopWebSocket, reopenWebSocket } = useWebSocket(
//   //   onAltitudeDataReceived,
//   //   config.defaultDelaySpectrumWS
//   // );
//   //   useWebSocket(onVelocityDataReceived);
//   //   useWebSocket(onTemperatureDataReceived);

//   useEffect(() => {
//     if (altitudeData !== undefined) {
//       setAltitudeSeries((prevData) => [...prevData, altitudeData]);
//     }
//   }, [altitudeData]);

//   if (!altitudeData) return null;
//   return (
//     <div>
//       <AltitudeChart altitudeData={altitudeSeries} />
//       {/* <VelocityChart velocityData={velocityData} />
//       <TemperatureChart temperatureData={temperatureData} /> */}
//     </div>
//   );
// };

export default RealTimeDataVisualization;
