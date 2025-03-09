import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WeatherCard from "../components/WeatherCard";
import Header from "../components/Header";
import axios from "axios";
import Chart from "../components/Chart";

const API_URL = "https://solink-weather-api-1749b9bb7b64.herokuapp.com/fetch"; // Ensure your backend is running

const Dashboard: React.FC = () => {
  // ✅ Define state to store weather data
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Fetch data from API
  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      console.log("🔄 Fetching latest weather data...");
      const response = await axios.get(API_URL);
      console.log("✅ API Response:", response.data);

      if (response.data && Array.isArray(response.data.data)) {
        setData(response.data.data);
      } else {
        throw new Error("Invalid data format received");
      }
    } catch (err) {
      console.error("❌ Error fetching data:", err);
      setError("Failed to fetch data. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Header />
      <Button onClick={fetchData} disabled={loading}>
        {loading ? "Fetching..." : "Fetch Latest Data"}
      </Button>
      {error && <ErrorText>{error}</ErrorText>}

      {data.length > 0 && (
        <>
          <CardContainer>
            <WeatherCard label="Air Temp" value={`${data[0].air_temp}°C`} />
            <WeatherCard label="DNI" value={data[0].dni} />
            <WeatherCard label="GHI" value={data[0].ghi} />
            <WeatherCard label="Humidity" value={`${data[0].relative_humidity}%`} />
            <WeatherCard label="Wind Speed" value={`${data[0].wind_speed_10m} m/s`} />
            <WeatherCard label="Surface Pressure" value={`${data[0].surface_pressure} hPa`} />
            <WeatherCard label="PV Power Rooftop" value={`${data[0].pv_power_rooftop} W`} />
          </CardContainer>

          <Chart data={data} />
        </>
      )}
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  padding: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  margin-top: 20px;
  transition: background 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 1rem;
`;

export default Dashboard;
