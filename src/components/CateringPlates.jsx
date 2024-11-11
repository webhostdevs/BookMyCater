import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CateringPlates() {
  const [vendor, setVendor] = useState(null);
  const [id, setId] = useState(1); // Assume vendor ID for this example
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://bookmycater.freewebhostmost.com/getVendorDetails.php?id=${id}`
      )
      .then((response) => setVendor(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!vendor) return <p>Loading...</p>;

  const handleSelectPlate = (vendorId) => {
    navigate(`/menu/${vendor.id}`);
  };

  return (
    <div className="flex justify-center space-x-8 p-8 bg-gray-100 min-h-screen">
      {/* Plate 1: 3 Compartments (2x2 grid) */}
      <div className="w-64 h-64">
        <h2 className="text-center text-black font-semibold mb-4">3-Compartment Plate</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-1 bg-purple-500 p-1 rounded-lg h-full border-4 border-black">
          <div className="bg-purple-700 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-white">
             
          </div>
          <div className="bg-purple-700 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-white">
             
          </div>
          <div className="bg-purple-800 border-2 rounded-md border-black col-span-2 row-span-1 flex items-center justify-center text-white">
               
          </div>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg"
          onClick={() => handleSelectPlate(vendor.id)}
        >
          Select Plate
        </button>
      </div>

      {/* Plate 2: 5 Compartments (3x2 grid) */}
      <div className="w-64 h-64">
        <h2 className="text-center text-black font-semibold mb-4">5-Compartment Plate</h2>
        <div className="grid grid-cols-2 grid-rows-3 gap-1 bg-purple-500 p-1 rounded-lg h-full border-4 border-black">
          <div className="bg-purple-700 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-white">
             
          </div>
          <div className="bg-purple-700 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-white">
             
          </div>
          <div className="bg-purple-800 border-2 rounded-md border-black col-span-2 row-span-1 flex items-center justify-center text-white">
               
          </div>
          <div className="bg-purple-700 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-white">
             
          </div>
          <div className="bg-purple-700 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-white">
             
          </div>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg"
          onClick={() => handleSelectPlate(vendor.id)}
        >
          Select Plate
        </button>
      </div>

      {/* Plate 3: 8 Compartments (3x3 grid) */}
      <div className="w-64 h-64">
        <h2 className="text-center text-black font-semibold mb-4">8-Compartment Plate</h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-1 bg-purple-500 p-1 rounded-lg h-full border-4 border-black">
          <div className="bg-purple-700 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-white">
             
          </div>
          <div className="bg-purple-700 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-white">
             
          </div>
          <div className="bg-purple-800 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-white">
              
          </div>
          <div className="bg-purple-800 border-2 rounded-md border-black col-span-2 row-span-1 flex items-center justify-center text-white">
               
          </div>
          <div className="bg-purple-700 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-white">
             
          </div>
          <div className="bg-purple-800 border-2 rounded-md border-black col-span-1 row-span-2 flex items-center justify-center text-white">
               
          </div>
          <div className="bg-purple-800 border-2 rounded-md border-black col-span-2 row-span-1 flex items-center justify-center text-white">
               
          </div>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg"
          onClick={() => handleSelectPlate(vendor.id)}
        >
          Select Plate
        </button>
      </div>
    </div>
  );
}

export default CateringPlates;
