import React from "react";
import PersonCard from "./PersonCard";

const Records = () => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-3xl font-semibold">Records</p>
      {/* Map PaersonCard */}
      <PersonCard />
      {/* Then, Map CarCard inside each of PersonCard */}
    </div>
  );
};

export default Records;
