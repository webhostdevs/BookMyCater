{/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch all vendors on component mount
    axios.get('https://bookmycater.freewebhostmost.com/getVendors.php')
      .then(response => {
        const data = Array.isArray(response.data) ? response.data : []; // Ensure it's an array
        setVendors(data);
      })
      .catch(error => console.error(error));
  }, []);

  // Filter vendors based on search term
  const filteredVendors = Array.isArray(vendors) ? vendors.filter(vendor => 
    vendor.company_name.toLowerCase().includes(searchTerm.toLowerCase())
  ) : [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Our Catering Service</h1>


      <div className="mb-4" style={{ position: 'relative' }}>
  <input
    type="text"
    placeholder="Search by vendor ..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    style={{
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '8px 8px 8px 32px', // padding-left for icon space
      width: '30%',
    }}
  />
  <span
    style={{
      position: 'absolute',
      left: '8px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#888',
      fontSize: '16px',
    }}
  >
    🔍
  </span>
</div>


      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredVendors.length > 0 ? (
    filteredVendors.map((vendor) => (
      <Link
        to={`/vendor/${vendor.id}`}
        key={vendor.id}
        className="shadow-lg p-4 bg-white rounded-md flex flex-col overflow-hidden transition-transform duration-200 transform hover:scale-105"
      >
        <div className="h-48">
          <img
            src={`https://bookmycater.freewebhostmost.com/${vendor.event_photos}`}
            alt={vendor.company_name}
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
  
        <div className="flex justify-between items-center mt-2">
          <h2 className="text-lg font-semibold">{vendor.company_name}</h2>
          <button className="flex items-center bg-yellow-400 text-white px-2 py-1 rounded-md text-sm">
            <span className="mr-1">⭐</span>
            {vendor.average_rating}
          </button>
        </div>
        <div className="p-4 bg-white flex-grow">
          <p className="text-gray-700" style={{ fontSize: '1rem', fontWeight: '500' }}>
        📍 {vendor.operating_regions}
      </p>
          

          <h2 className="text-lg text-black font-semibold">Starting from: ₹{vendor.pricing_per_event}</h2>
        </div>
      </Link>
    ))
  ) : (
    <p className="text-gray-500">No vendors found for the selected criteria.</p>
  )}
</div>

    </div>
  );
};

export default HomePage;
*/}
  




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [vendors, setVendors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All'); // Default to 'All'
  const [locations, setLocations] = useState([]); // State for locations

  useEffect(() => {
    // Fetch all vendors on component mount
    axios.get('https://bookmycater.freewebhostmost.com/getVendors.php')
      .then(response => {
        const data = Array.isArray(response.data) ? response.data : []; // Ensure it's an array
        setVendors(data);
        
        // Extract unique locations from the vendors data
        const uniqueLocations = Array.from(new Set(data.map(vendor => vendor.operating_regions)));
        setLocations(['All', ...uniqueLocations]); // Add 'All' option
      })
      .catch(error => console.error(error));
  }, []);

  // Filter vendors based on search term and selected location
  const filteredVendors = Array.isArray(vendors) ? vendors.filter(vendor => {
    const matchesName = vendor.company_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'All' || vendor.operating_regions === selectedLocation;
    return matchesName && matchesLocation;
  }) : [];

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Our Catering Service</h1>

      {/* Search Input */}
      <div className="mb-4" style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Search by vendor ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '8px 8px 8px 32px', // padding-left for icon space
            width: '30%',
          }}
        />
        <span
          style={{
            position: 'absolute',
            left: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#888',
            fontSize: '16px',
          }}
        >
          🔍
        </span>
      </div>

      {/* Location Dropdown */}
      <label htmlFor="location" className="block mb-2">Select Location:</label>
      <select
        id="location"
        value={selectedLocation}
        onChange={handleLocationChange}
        className="mb-4 border border-gray-300 rounded-md p-2"
      >
        {locations.map(location => (
          <option key={location} value={location}>{location}</option>
        ))}
      </select>

      {/* Vendor Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVendors.length > 0 ? (
          filteredVendors.map((vendor) => (
            <Link
              to={`/vendor/${vendor.id}`}
              key={vendor.id}
              className="shadow-lg p-4 bg-white rounded-md flex flex-col overflow-hidden transition-transform duration-200 transform hover:scale-105"
            >
              <div className="h-48">
                <img
                  src={`https://bookmycater.freewebhostmost.com/${vendor.event_photos}`}
                  alt={vendor.company_name}
                  className="w-full h-full object-cover rounded-t-md"
                />
              </div>
              <div className="flex justify-between items-center mt-2">
                <h2 className="text-lg font-semibold">{vendor.company_name}</h2>
                <button className="flex items-center bg-yellow-400 text-white px-2 py-1 rounded-md text-sm">
                  <span className="mr-1">⭐</span>
                  {vendor.average_rating}
                </button>
              </div>
              <div className="p-4 bg-white flex-grow">
                <p className="text-gray-700" style={{ fontSize: '1rem', fontWeight: '500' }}>
                  📍 {vendor.operating_regions}
                </p>
                <h2 className="text-lg text-black font-semibold">Starting from: ₹{vendor.pricing_per_event}</h2>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No vendors found for the selected criteria.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;


  );
};

export default HomePage;
