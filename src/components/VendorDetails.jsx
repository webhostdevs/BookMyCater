import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VendorDetails = () => {
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);

  useEffect(() => {
    axios.get(`https://bookmycater.freewebhostmost.com/getVendorDetails.php?id=${id}`)
      .then(response => setVendor(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!vendor) return <p>Loading...</p>;

  return (
    // <div className="p-6">
   //  <h2 className="text-3xl font-bold mb-4">{vendor.company_name}</h2> m
      // <p>Contact Person: {vendor.contact_person}</p>
    //   <p>Phone: {vendor.phone_number}</p>
    //   <p>Email: {vendor.email_address}</p>
      // <p>Address: {vendor.business_address}</p>    m
    //   <p>Operating Regions: {vendor.operating_regions}</p>  m
    //   <p>Per Plate Price: ₹{vendor.pricing_per_plate}</p>  m
    //   <p>Per Event Price: ₹{vendor.pricing_per_event}</p> m
    // </div>

        <div className="w-full bg-gray-50 p-8 max-[425px]:p-0 ">
      <div className="detail flex flex-col lg:flex-row gap-8 lg:gap-16 items-start p-4 sm:p-6 lg:p-8 justify-between ">
        {/* Left Section */}
        <div className="detail_Container w-full lg:w-3/4 flex flex-col items-center">
          {/* Image container */}
          <div className="detail_img w-full max-w-9xl h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg mb-4">
            <img
              src="https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              alt="Catering Service"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content container */}
          <div className="detail_content flex flex-row lg:flex-row max-[425px]:flex-col  justify-between items-start w-full max-w-8xl bg-white text-black rounded-lg p-6 text-center shadow-lg  max-[1020px]:bottom-0">
            <div className="flex flex-col items-start">
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
               {vendor.company_name}
              </h4>
              <p className="text-lg">{vendor.business_address}</p>
              <a
                href="#home"
                className="text-blue-300 underline mt-4 inline-block hover:text-blue-400"
              >
                Contact
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
              <div className="flex items-center gap-2">
                <div className="Rating bg-black text-white p-3 rounded-full text-lg font-semibold">
                  4.5
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
            <h4 className="text-3xl font-bold text-gray-800">Rs. {vendor.pricing_per_plate}</h4>
          </div>
          <div className="Starting_price flex flex-col sm:flex-row items-center justify-between text-center sm:text-left mb-6">
            <p className="text-lg font-medium text-gray-700">
              Event Starting from
            </p>
            <h4 className="text-3xl font-bold text-gray-800">Rs. {vendor.pricing_per_event}</h4>
          </div>

          {/* Buttons */}
          <div className="Buttons flex flex-col sm:flex-row gap-4 mb-6">
            <button className="w-full sm:w-auto px-6 py-2 bg-black text-nowrap text-white rounded-lg font-medium hover:bg-blue-700 transition">
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
      <div className="portfolio flex flex-row items-center justify-evenly bg-white text-black p-6 ml-10 mr-10 h-[500px] rounded-lg shadow-md">
        <a href="#portfolio" className="hover:text-blue-300">
          Portfolio
        </a>
        <a href="#album" className="hover:text-blue-300">
          Album
        </a>
        <a href="#videos" className="hover:text-blue-300">
          Videos
        </a>
      </div>

      {/* TextPart */}
      <div className="detail_text w-full bg-white rounded-lg p-6 shadow-lg mt-8 mx-auto">
        <p className="text-lg font-medium text-gray-800 mb-4">
          About Seasons Catering Services - {vendor.business_address}
        </p>
        <div className="text-gray-700 space-y-4">
          <p>
            <b>Cuisines offered:</b> Continental, Italian, Indian, Chinese, and
            more.
          </p>
          <p>
            <b>Services offered:</b> Custom menu design, live food counters,
            decorations, and staff service.
          </p>
          <p>
            <b>Areas covered:</b> {vendor.operating_regions}
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-12 bg-white rounded-lg shadow-lg mt-8 ">
        <div className="stat_date text-center">
          <b>Been on xyz Since</b>
          <p>9 years, 6 months</p>
        </div>
        <div className="stat_VegPrice text-center">
          <b>Veg price per plate</b>
          <p>Rs. 2,000</p>
        </div>
        <div className="stat_nonVegPrice text-center">
          <b>Starting plate Non Veg</b>
          <p>Rs. 4,000</p>
        </div>
        <div className="stat_MaxCapacity text-center">
          <b>Max Capacity</b>
          <p>2000 pax</p>
        </div>
        <div className="stat_MinCapacity text-center">
          <b>Min Capacity</b>
          <p>100 pax</p>
        </div>
      </div>
      {/* reviews */}

      <div className="review flex flex-col md:flex-row justify-between items-start mt-8">
        {/* Ratings Section */}
        <div className="reviews p-8 bg-white rounded-lg shadow-lg w-full md:w-1/3 h-[450px] max-[425px]:h-[290px] ">
          <div className="flex items-center mb-2">
            {[...Array(4)].map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
            <svg
              className="w-4 h-4 text-white me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-1 text-sm font-medium text-gray-700">
              4.95 out of 5
            </p>
          </div>
          <p className="text-sm font-medium text-gray-600">
            1,745 global ratings
          </p>
          {[
            { label: "5 star", width: "70%", percentage: "70%" },
            { label: "4 star", width: "17%", percentage: "17%" },
            { label: "3 star", width: "8%", percentage: "8%" },
            { label: "2 star", width: "4%", percentage: "4%" },
            { label: "1 star", width: "1%", percentage: "1%" },
          ].map((rating, index) => (
            <div key={index} className="flex items-center mt-4">
              <a
                href="#"
                className="text-sm font-medium text-black hover:underline text-nowrap"
              >
                {rating.label}
              </a>
              <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded">
                <div
                  className="h-5 bg-yellow-300 rounded"
                  style={{ width: rating.width }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-700">
                {rating.percentage}
              </span>
            </div>
          ))}
        </div>

        {/* Feedback Form Section */}
        <div className="p-6 bg-white rounded-lg shadow-lg w-full md:w-2/3 mt-6 md:mt-0 ml-0 md:ml-4">
          <h3 className="text-lg font-medium mb-4">Leave Your Feedback</h3>
          <form className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="feedback"
              >
                Feedback
              </label>
              <textarea
                id="feedback"
                className="mt-1 p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                rows="4"
                placeholder="Your feedback here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded hover:bg-black/80"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* COmments Section */}

      <div className="comments flex flex-col p-4 space-y-4">
        <div className="comment max-w-[100%] bg-white p-4 rounded-lg shadow-md">
          <div className="user_info flex flex-row items-center space-x-4">
            <div className="pfp rounded-full w-12 h-12 overflow-hidden border border-gray-300">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="User Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="names flex flex-col">
              <p className="name text-lg font-semibold">John Doe</p>
              <p className="date text-sm text-gray-500">2 days ago</p>
            </div>
            <div className="user_ratings flex items-center ml-auto">
              {/* Replace '⭐' with an icon or component for star ratings */}
              <span className="text-yellow-500">⭐ ⭐ ⭐ ⭐ ⭐</span>
              <p className="text-sm ml-1">5.0</p>
            </div>
          </div>
          <p className="comment_text mt-2 text-gray-700">
            This is a great service! Food was delicious and the staff were very
            professional.
          </p>
        </div>

        {/* Add more comments as needed */}
        <div className="comment max-w-[100%] bg-white p-4 rounded-lg shadow-md">
          <div className="user_info flex flex-row items-center space-x-4">
            <div className="pfp rounded-full w-12 h-12 overflow-hidden border border-gray-300">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="User Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="names flex flex-col">
              <p className="name text-lg font-semibold">Jane Smith</p>
              <p className="date text-sm text-gray-500">3 days ago</p>
            </div>
            <div className="user_ratings flex items-center ml-auto">
              <span className="text-yellow-500">⭐ ⭐ ⭐ ⭐</span>
              <p className="text-sm ml-1">4.0</p>
            </div>
          </div>
          <p className="comment_text mt-2 text-gray-700">
            The setup was beautiful, and the food was amazing, but they were a
            bit late in serving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
