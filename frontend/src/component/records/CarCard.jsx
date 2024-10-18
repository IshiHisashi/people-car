import React from "react";
import { Card } from "antd";

const CarCard = ({ car }) => {
  const titleText = `${car.year} ${car.make} ${car.model} => $${car.price}`;

  return (
    <Card type="inner" title={titleText} className="text-start">
      <div className="flex gap-16 justify-end">
        <p>Icon</p>
        <p>Icon</p>
      </div>
    </Card>
  );
};

export default CarCard;
