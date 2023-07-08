import React, { useEffect, useState } from "react";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
        .then( res => res.json() )
        .then( data => setServices(data));
    }, [])

  return (
    <div className="my-10 px-10">
      <div className="border-4 border-dashed w-40 mx-auto p-4">
        <h4 className="text-xl font-semibold text-center">Services</h4>
      </div>
      <h2 className="text-2xl text-center font-bold mt-4">
        We provide special services to our customers
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        {services.map((service) => (
          <div key={service.id} className="bg-gray-100 p-6 rounded-lg shadow">
            <img
              src={service.image}
              alt={service.name}
              className="mx-auto h-56 mb-4"
            />
            <h3 className="text-xl font-semibold text-center mb-2">
              {service.name}
            </h3>
            <p className="text-lg font-medium text-gray-500 text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
