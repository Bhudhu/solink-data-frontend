import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

interface WeatherData {
  timestamp: string;
  air_temp: number;
  dni: number;
  ghi: number;
  surface_pressure: number;
  pv_power_rooftop: number;
}

interface ChartProps {
  data: WeatherData[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <div style={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", color: "#007bff" }}>📊 Weather Trends</h2>
      <ResponsiveContainer width="110%" height={450}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="air_temp" stroke="#ff7300" name="Air Temp (°C)" />
          <Line type="monotone" dataKey="dni" stroke="#007bff" name="DNI" />
          <Line type="monotone" dataKey="ghi" stroke="#28a745" name="GHI" />
          <Line type="monotone" dataKey="surface_pressure" stroke="#8884d8" name="Surface Pressure" />
          <Line type="monotone" dataKey="pv_power_rooftop" stroke="#ff69b4" name="PV Power Rooftop" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
