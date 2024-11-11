import React from 'react';

function CateringPlates() {
  return (
    <div className="flex justify-center space-x-8 p-8 bg-gray-100 min-h-screen">
      {/* Plate 1: 3 Compartments (2x2 grid) */}
      <div className="w-64 h-64">
        <h2 className="text-center text-black font-semibold mb-4">3-Compartment Plate</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-1 bg-gray-200 p-1 rounded-lg h-full border-4 border-black">
          <div className="bg-gray-300 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-black">
              
          </div>
          <div className="bg-gray-300 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-black">
              
          </div>
          <div className="bg-gray-400 border-2 rounded-md border-black col-span-2 row-span-1 flex items-center justify-center text-black">
             
          </div>
        </div>
      </div>

      {/* Plate 2: 5 Compartments (3x2 grid) */}
      <div className="w-64 h-64">
        <h2 className="text-center text-black font-semibold mb-4">5-Compartment Plate</h2>
        <div className="grid grid-cols-2 grid-rows-3 gap-1 bg-gray-200 p-1 rounded-lg h-full border-4 border-black">
          <div className="bg-gray-300 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-black">
              
          </div>
          <div className="bg-gray-300 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-black">
              
          </div>
          <div className="bg-gray-400 border-2 rounded-md border-black col-span-2 row-span-1 flex items-center justify-center text-black">
             
          </div>
          <div className="bg-gray-300 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-black">
              
          </div>
          <div className="bg-gray-300 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-black">
              
          </div>
        </div>
      </div>

      {/* Plate 3: 8 Compartments (3x3 grid) */}
      <div className="w-64 h-64">
        <h2 className="text-center text-black font-semibold mb-4">8-Compartment Plate</h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-1 bg-gray-200 p-1 rounded-lg h-full border-4 border-black">
          <div className="bg-gray-300 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-black">
              
          </div>
          <div className="bg-gray-300 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-black">
              
          </div>
          <div className="bg-gray-400 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-black">
               
          </div>
          <div className="bg-gray-400 border-2 rounded-md border-black col-span-2 row-span-1 flex items-center justify-center text-black">
             
          </div>
          <div className="bg-gray-300 border-2 rounded-md border-black col-span-1 row-span-1 flex items-center justify-center text-black">
              
          </div>
          <div className="bg-gray-400 border-2 rounded-md border-black col-span-1 row-span-2 flex items-center justify-center text-black">
             
          </div>
          <div className="bg-gray-400 border-2 rounded-md border-black col-span-2 row-span-1 flex items-center justify-center text-black">
             
          </div>
        </div>
      </div>
    </div>
  );
}

export default CateringPlates;
