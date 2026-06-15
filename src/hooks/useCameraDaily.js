// "use client";

// import React from "react";
// import axios from "axios";
// import { API_URL } from "@/lib/utils";

// export function useCameraDaily(initialRange = "30") {
//     const [range, setRange] = React.useState(initialRange);
//     const [chartData, setChartData] = React.useState([]);
//     const [loading, setLoading] = React.useState(false);
//     const [error, setError] = React.useState(null);

//     React.useEffect(() => {
//         const controller = new AbortController();

//         const fetchChartData = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);

//                 const res = await axios.get(`${API_URL}/camera/daily`, {
//                     params: {
//                         days: range,
//                     },
//                     signal: controller.signal,
//                 });

//                 const formattedData =
//                     res.data?.data?.map((item) => ({
//                         date: item.date,
//                         online: item.online,
//                         offline: item.offline,
//                         total: item.cameraCount,
//                     })) || [];

//                 setChartData(formattedData);
//             } catch (error) {
//                 if (axios.isCancel(error)) return;

//                 console.error("Failed to fetch camera daily data:", error);
//                 setError(error);
//                 setChartData([]);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchChartData();

//         return () => {
//             controller.abort();
//         };
//     }, [range]);

//     return {
//         range,
//         setRange,
//         chartData,
//         loading,
//         error,
//     };
// }
"use client";

import React from "react";
import axios from "axios";

const API_URL = "http://localhost:9000";

export function useCameraDaily(initialRange = "30") {
  const [range, setRange] = React.useState(initialRange);
  const [chartData, setChartData] = React.useState([]);
  const [districts, setDistricts] = React.useState([]);
  const [districtsDate, setDistrictsDate] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get(`${API_URL}/camera/daily`, {
          params: {
            days: range,
          },
        });

        const formattedChartData =
          res.data?.data?.map((item) => ({
            date: item.date,
            online: item.online,
            offline: item.offline,
            total: item.cameraCount,
          })) || [];

        setChartData(formattedChartData);
        setDistricts(res.data?.districts || []);
        setDistrictsDate(res.data?.districtsDate || "");
      } catch (error) {
        console.error("Failed to fetch camera daily data:", error);
        setError(error);
        setChartData([]);
        setDistricts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [range]);

  return {
    range,
    setRange,
    chartData,
    districts,
    districtsDate,
    loading,
    error,
  };
}