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
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">{vendor.company_name}</h2>
      <p>Contact Person: {vendor.contact_person}</p>
      <p>Phone: {vendor.phone_number}</p>
      <p>Email: {vendor.email_address}</p>
      <p>Address: {vendor.business_address}</p>
      <p>Operating Regions: {vendor.operating_regions}</p>
      <p>Per Plate Price: ₹{vendor.pricing_per_plate}</p>
      <p>Per Event Price: ₹{vendor.pricing_per_event}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default VendorDetails;
