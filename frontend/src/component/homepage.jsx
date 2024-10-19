import React, { useContext, useEffect } from "react";
import Records from "./records/Records.jsx";
import PersonForm from "./add-form/PersonForm.jsx";
import CarForm from "./add-form/CarForm.jsx";

function Homepage() {
  return (
    <div className="flex flex-col gap-10 text-center py-10 px-4 text-slate-800">
      <p className="text-3xl font-semibold">PEOPLE AND THEIR CARS</p>
      <PersonForm />
      <CarForm />
      <Records />
    </div>
  );
}

export default Homepage;
