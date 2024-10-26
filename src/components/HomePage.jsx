import React, { useState, useEffect } from 'react';
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
      width: '50%',
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


      {/* Vendor Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVendors.length > 0 ? (
          filteredVendors.map(vendor => (
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
              <div className="p-4 bg-gray-100 flex-grow">
                <h2 className="text-lg font-semibold">{vendor.company_name}</h2>
                <p className="mt-1">Per Plate: ₹{vendor.pricing_per_plate}</p>
                <p>Per Event: ₹{vendor.pricing_per_event}</p>
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
