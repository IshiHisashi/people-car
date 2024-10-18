import React from "react";
import Records from "./component/records/Records.jsx";
import PersonForm from "./component/person-form/PersonForm.jsx";
import CarForm from "./component/car-form/CarForm.jsx";

function App() {
  return (
    <div className="flex flex-col gap-10 text-center py-10 px-4 text-slate-800">
      <p className="text-3xl font-semibold">PEOPLE AND THEIR CARS</p>
      <PersonForm />
      <CarForm />
      <Records />
    </div>
  );
}

export default App;
