import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IoCallOutline } from "react-icons/io5";

const VendorDetails = () => {
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);
  const [showImages, setShowImages] = useState(true);
  const [reviews, setReviews] = useState([]);

  // Open WhatsApp to send message
  const openWhatsApp = () => {
    window.open(`https://wa.me/${vendor.phone_number}`, '_blank');
  };

  // Fetch vendor details
  useEffect(() => {
    axios.get(`https://bookmycater.freewebhostmost.com/getVendorDetails.php?id=${id}`)
      .then(response => setVendor(response.data))
      .catch(error => console.error(error));
  }, [id]);

  // Fetch reviews
  useEffect(() => {
    fetch(`https://bookmycater.freewebhostmost.com/fetchreviews.php?vendor_id=${id}`)
      .then(response => response.json())
      .then(data => {
        if (!data.error) {
          setReviews(data);
        } else {
          console.error(data.error);
        }
      })
      .catch(error => console.error('Error fetching reviews:', error));
  }, [id]);

  if (!vendor) return <p>Loading...</p>;

  return (
    <div className="w-full bg-gray-50 p-8 max-[425px]:p-0">
      <div className="detail flex flex-col lg:flex-row gap-8 lg:gap-16 items-start p-4 sm:p-6 lg:p-8 justify-between ">
        {/* Left Section */}
        <div className="detail_Container w-full lg:w-3/4 flex flex-col items-center">
          <div className="detail_img w-full max-w-9xl h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg mb-4">
            <img
              src={`https://bookmycater.freewebhostmost.com/${vendor.event_photos}`}
              alt="Catering Service"
              className="w-full h-full object-cover"
            />
          </div>

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
          <div className="Starting_price flex flex-col sm:flex-row sm:text-left mb-6">
            <p className="text-lg font-medium text-gray-700 mr-2">
              Plate Starting from
            </p>
            <h4 className="text-l font-bold text-gray-800 ml-3">Rs. {vendor.pricing_per_plate}</h4>
          </div>
          <div className="Starting_price flex flex-col sm:flex-row sm:text-left mb-6">
            <p className="text-lg font-medium text-gray-700 mr-2">
              Event Starting from
            </p>
            <h4 className="text-l font-bold text-gray-800 ml-3">Rs. {vendor.pricing_per_event}</h4>
          </div>

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
        <div className="flex flex-row items-center justify-evenly h-[10%]">
          <button
            className="hover:text-blue-300"
            onClick={() => setShowImages(true)}
          >
            Portfolio
          </button>
          <button
            className="hover:text-blue-300"
            onClick={() => setShowImages(false)}
          >
            Album
          </button>
          <button
            className="hover:text-blue-300"
            onClick={() => setShowImages(false)}
          >
            Images
          </button>   
        </div>

        <div className="main flex flex-wrap h-[80%] overflow-y-scroll border-t">
          {showImages && vendor.portfolio.split(',').slice(0, 105).map((fileName, index) => (
            <img
              key={index}
              src={`https://bookmycater.freewebhostmost.com/${vendor.folder_location}/${fileName.trim()}`}
              alt="Prev Event Images"
              className="w-[160px] h-[160px] object-cover m-1 mb-0.5 mt-0.5"
            />
          ))}
        </div>
      </div>

      {/* TextPart */}
      <div className="detail_text w-full bg-white rounded-lg p-6 shadow-lg mt-8 mx-auto">
        <p className="text-lg font-medium text-gray-800 mb-4">
          About {vendor.company_name} Services - {vendor.business_address}
        </p>
        <div className="text-gray-700 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-12 ">
          <div>
            <b>Areas covered:</b>
            <ul className="list-disc ml-5">
              {vendor.operating_regions.split(',').map((region, index) => (
                <li key={index}>{region.trim()}</li>
              ))}
            </ul>
          </div>
          <div>
            <b>Dietary Options:</b>
            <ul className="list-disc ml-5">
              {vendor.dietary_accommodations.split(',').map((option, index) => (
                <li key={index}>{option.trim()}</li>
              ))}
            </ul>
          </div>
          <div>
            <b>Services offered:</b>
            <ul className="list-disc ml-5">
              {vendor.services.split(',').map((service, index) => (
                <li key={index}>{service.trim()}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ml-10 mr-10">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              ))}
            </div>
            <p className="text-gray-700 text-sm mb-2">{review.message}</p>
            <p className="text-gray-500 text-xs">{review.customer_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorDetails;
