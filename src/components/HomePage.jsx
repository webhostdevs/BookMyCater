import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [vendors, setVendors] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch all vendors on component mount
    axios.get('https://bookmycater.freewebhostmost.com/getVendors.php')
      .then(response => setVendors(response.data))
      .catch(error => console.error(error));

    // Fetch locations for filtering
    axios.get('https://bookmycater.freewebhostmost.com/getVendorLocations.php')
      .then(response => setLocations(response.data))
      .catch(error => console.error(error));
  }, []);

  // Filter vendors based on selected location and search term
  const filteredVendors = vendors.filter(vendor => {
    const matchesLocation = selectedLocation === '' || 
                            (vendor.operating_regions && 
                             vendor.operating_regions.split(',').map(loc => loc.trim().toLowerCase()).includes(selectedLocation.trim().toLowerCase()));
    const matchesSearch = vendor.company_name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesLocation && matchesSearch;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to Our Catering Service</h1>

      {/* Search and Location Filters */}
      <div className="flex gap-4 mb-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by vendor ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded p-2 w-full"
        />

        {/* Location Filter Dropdown */}
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">All Locations</option>
          {/* Static locations */}
          <option value="New York">New York</option>
          <option value="Chicago">Chicago</option>
          <option value="Miami">Miami</option>
          {/* Dynamically generated locations */}
          {locations.map(location => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
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
                  src={`http://localhost/backend/${vendor.event_photos}`}
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
