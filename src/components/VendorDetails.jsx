import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IoCallOutline } from "react-icons/io5";

let selected = "portfolio";
const VendorDetails = () => {
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);
  const [showImages, setShowImages] = useState(false); // New state for showing images

  const openWhatsApp = () => {
    window.open(`https://wa.me/${vendor.phone_number}`, '_blank');
  };

  useEffect(() => {
    axios.get(`https://bookmycater.freewebhostmost.com/getVendorDetails.php?id=${id}`)
      .then(response => setVendor(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!vendor) return <p>Loading...</p>;

  return (
    <div className="w-full bg-gray-50 p-8 max-[425px]:p-0">
      <div className="detail flex flex-col lg:flex-row gap-8 lg:gap-16 items-start p-4 sm:p-6 lg:p-8 justify-between ">
        {/* Left Section */}
        <div className="detail_Container w-full lg:w-3/4 flex flex-col items-center">
          {/* Image container */}
          <div className="detail_img w-full max-w-9xl h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg mb-4">
            <img
              src={`https://bookmycater.freewebhostmost.com/${vendor.event_photos}`}
              alt="Catering Service"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content container */}
          <div className="detail_content flex flex-row lg:flex-row max-[425px]:flex-col justify-between items-start w-full max-w-8xl bg-white text-black rounded-lg p-6 text-center shadow-lg max-[1020px]:bottom-0">
            <div className="flex flex-col items-start">
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                {vendor.company_name}
              </h4>
              <p className="text-lg">{vendor.business_address}</p>
              <a
                href={`tel:${vendor.phone_number}`}
                className="text-white bg-green-500 px-4 py-2 rounded-md mt-4 inline-block hover:bg-green-600 hover:text-white flex items-center gap-2"
              >
                <IoCallOutline /> Contact us
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
              <div className="flex items-center gap-2">
                <div className="Rating bg-black text-white p-3 rounded-full text-lg font-semibold">
                  {vendor.average_rating}
                </div>
                <p className="text-sm sm:text-base">4 Reviews</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="detail_price w-full h-max lg:w-1/2 xl:w-1/3 bg-white rounded-lg p-6 shadow-lg">
          {/* Price Info */}
          <div className="Starting_price flex flex-col sm:flex-row items-center justify-between text-center sm:text-left mb-6">
            <p className="text-lg font-medium text-gray-700">
              Plate Starting from
            </p>
            <h4 className="text-xl font-bold text-gray-800">Rs. {vendor.pricing_per_plate}</h4>
          </div>
          <div className="Starting_price flex flex-col sm:flex-row items-center justify-between text-center sm:text-left mb-6">
            <p className="text-lg font-medium text-gray-700">
              Event Starting from
            </p>
            <h4 className="text-xl font-bold text-gray-800">Rs. {vendor.pricing_per_event}</h4>
          </div>

          {/* Buttons */}
          <div className="Buttons flex flex-col sm:flex-row gap-4 mb-6">
            <button
              onClick={openWhatsApp}
              className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition"
            >
              Send Message
            </button>
            <button className="w-full sm:w-auto px-6 py-2 bg-gray-300 text-gray-800 text-nowrap rounded-lg font-medium hover:bg-gray-400 transition">
              View Contact
            </button>
          </div>

          {/* Form */}
          <div className="detail_form">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                placeholder="Function Date"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Details about my wedding"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
              />
              <button className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-green-700 transition mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="portfolio flex flex-col bg-white text-black p-6 ml-10 mr-10 h-[500px] rounded-lg shadow-md">
        {/* Top 20% section for buttons */}
        <div className="flex flex-row items-center justify-evenly h-[20%]">
          <button
            className="hover:text-blue-300"
            onClick={() => {
              selected = "portfolio";
              setShowImages(false);
            }}
          >
            Portfolio
          </button>
          <button
            className="hover:text-blue-300"
            onClick={() => {
              selected = "album";
              setShowImages(false);
            }}
          >
            Album
          </button>
          <button
            className="hover:text-blue-300"
            onClick={() => {
              selected = "images";
              setShowImages(true);
            }}
          >
            Images
          </button>
        </div>
        
        {/* Main container occupying 80% height */}
        <div className="main flex items-center justify-center h-[80%]">
          {showImages && (
            <img
              src={`https://bookmycater.freewebhostmost.com/${vendor.event_photos}`} // Assuming you want to show the same image
              alt="Event Image Thumbnail"
              className="h-full w-full object-cover rounded-md"
            />
          )}
        </div>
      </div>

      {/* TextPart */}
      <div className="detail_text w-full bg-white rounded-lg p-6 shadow-lg mt-8 mx-auto">
        <p className="text-lg font-medium text-gray-800 mb-4">
          About Seasons Catering Services - {vendor.business_address}
        </p>
        <div className="text-gray-700 space-y-4">
          <p>
            <b>Dietary Options:</b>
            <ul className="list-disc ml-5">
              {vendor.dietary_accommodations.split(',').map((option, index) => (
                <li key={index}>{option.trim()}</li>
              ))}
            </ul>
          </p>
          <p>
            <b>Services offered:</b>
            <ul className="list-disc ml-5">
              {vendor.services.split(',').map((service, index) => (
                <li key={index}>{service.trim()}</li>
              ))}
            </ul>
          </p>
          <p>
            <b>Areas covered:</b>
            <ul className="list-disc ml-5">
              {vendor.operating_regions.split(',').map((region, index) => (
                <li key={index}>{region.trim()}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-12 bg-white rounded-lg shadow-lg mt-8 ">
        <div className="stat_date text-center">
          <b>Been on xyz Since</b>
          <p>9 years, 6 months</p>
        </div>
        <div className="stat_review text-center">
          <b>Total Reviews</b>
          <p>{vendor.total_reviews}</p>
        </div>
        <div className="stat_rating text-center">
          <b>Overall Rating</b>
          <p>{vendor.average_rating}</p>
        </div>
        <div className="stat_event text-center">
          <b>Events Catered</b>
          <p>{vendor.total_events}</p>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
