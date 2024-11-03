import React from "react";

const EventsPage = () => {
  const celebrations = [
    {
      title: "Birthday Party",
      description: "Make every birthday special with our tailored menus",
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/043/938/cover3.jpg",
    },
    {
      title: "Wedding Reception",
      description: "Elegant catering for your big day",
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/043/938/cover3.jpg",
    },
    {
      title: "Corporate Event",
      description: "Professional catering for business events",
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/043/938/cover3.jpg",
    },
    {
      title: "Anniversary",
      description: "Celebrate love with our special anniversary menus",
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/043/938/cover3.jpg",
    },
    {
      title: "Baby Shower",
      description: "Perfect menus for your baby shower",
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/043/938/cover3.jpg",
    },
    {
      title: "Graduation",
      description: "Celebrate milestones with delicious food",
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/043/938/cover3.jpg",
    },
    {
      title: "Holiday Gathering",
      description: "Enjoy seasonal menus for your holiday gatherings",
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/043/938/cover3.jpg",
    },
    {
      title: "Other Special Events",
      description: "Custom menus for your unique celebration",
      image:
        "https://i.kym-cdn.com/entries/icons/original/000/043/938/cover3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-0 pb-7">
      <h1 className="text-3xl font-bold text-gray-800 mt-10">
        Select Your Event Type
      </h1>
      <p className="text-lg text-gray-600 mt-2 mb-8 text-center max-w-lg">
        We cater to all types of celebrations! Choose your occasion to see
        tailored menus and services.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-6xl">
        {celebrations.map((celebration, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition transform duration-300"
          >
            <img
              src={celebration.image}
              alt={celebration.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col ">
              <h3 className="text-xl font-semibold text-gray-800">
                {celebration.title}
              </h3>
              <p className="text-gray-600 mt-2">{celebration.description}</p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-200">
                View Menus & Packages
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
