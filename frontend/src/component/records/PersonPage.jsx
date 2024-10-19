import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { PERSON_WITH_CARS } from "../../utils/queries";
import { formatCurrency } from "../../utils/fnc";
import { Button, Card, Spin } from "antd";

const PersonPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(PERSON_WITH_CARS, {
    variables: { id },
  });

  if (loading) return <Spin />;
  if (error) return <p>Error: {error.message}</p>;

  const titleText = `${data.personWithCars.firstName} ${data.personWithCars.lastName}`;
  return (
    <div className="p-10">
      <Card title={titleText} className="bg-slate-200">
        <div className="flex flex-col gap-4">
          {data?.personWithCars.cars.length > 0 ? (
            data?.personWithCars.cars.map((car, index) => (
              <Card key={index}>
                <p className="text-xl">{`${car.year} ${car.make} ${car.model}`}</p>
                <p className="text-lg">{`Price: ${formatCurrency(
                  car.price
                )}`}</p>
              </Card>
            ))
          ) : (
            <p>This person has no car...</p>
          )}
        </div>
      </Card>
      <Link to="/">
        <Button className="mt-4">Go Back Home</Button>
      </Link>
    </div>
  );
};

export default PersonPage;
