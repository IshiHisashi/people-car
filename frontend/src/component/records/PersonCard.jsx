import React from "react";
import CarCard from "./CarCard";
import { Card } from "antd";

const PersonCard = () => {
  return (
    <Card title="Person Name here" className="text-start">
      <CarCard />
      <p className="mt-4 text-blue-500 font-medium">Learn more</p>
    </Card>
  );
};

export default PersonCard;
