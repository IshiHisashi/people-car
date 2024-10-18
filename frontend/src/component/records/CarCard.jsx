import React from "react";
import { Card } from "antd";

const CarCard = () => {
  const titleText = `2019 Toyota Carolla => $40,000`;

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
