import React from "react"; 
import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 180px;
`;

interface WeatherCardProps {
  label: string;
  value: string | number;
  unit?: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ label, value, unit }) => {
  return (
    <Card>
      <p><strong>{label}:</strong> {value}{unit}</p>
    </Card>
  );
};

export default WeatherCard;
