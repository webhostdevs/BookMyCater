import React from 'react';

function CateringPlates() {
  return (
    <div className="flex flex-col items-center space-y-8 p-8 bg-gray-100 min-h-screen">
      {/* Plate 1: 3 Compartments (2x2 grid) */}
      <div className="w-64 h-64">
        <h2 className="text-center text-black font-semibold mb-4">3-Compartment Plate</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 bg-gray-200 p-2 rounded-lg border-4 border-black h-full">
          <div className="bg-gray-300 border-2 border-black col-span-1 row-span-1 flex items-center justify-center text-black">
            Small
          </div>
          <div className="bg-gray-300 border-2 border-black col-span-1 row-span-1 flex items-center justify-center text-black">
            Small
          </div>
          <div className="bg-gray-400 border-2 border-black col-span-2 row-span-1 flex items-center justify-center text-black">
            Big
          </div>
        </div>
      </div>

      {/* Plate 2: 5 Compartments (3x2 grid) */}
      <div className="w-64 h-64">
        <h2 className="text-center text-black font-semibold mb-4">5-Compartment Plate</h2>
        <div className="grid grid-cols-2 grid-rows-3 gap-2 bg-gray-200 p-2 rounded-lg border-4 border-black h-full">
          <div className="bg-gray-300 border-2 border-black col-span-1 row-span-1 flex items-center justify-center text-black">
            Small
          </div>
          <div className="bg-gray-300 border-2 border-black col-span-1 row-span-1 flex items-center justify-center text-black">
            Small
          </div>
          <div className="bg-gray-400 border-2 border-black col-span-2 row-span-1 flex items-center justify-center text-black">
            Big
          </div>
          <div className="bg-gray-300 border-2 border-black col-span-1 row-span-1 flex items-center justify-center text-black">
            Small
          </div>
          <div className="bg-gray-300 border-2 border-black col-span-1 row-span-1 flex items-center justify-center text-black">
            Small
          </div>
        </div>
      </div>

      {/* Plate 3: 8 Compartments (3x3 grid) */}
      <div className="w-64 h-64">
        <h2 className="text-center text-black font-semibold mb-4">8-Compartment Plate</h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-2 bg-gray-200 p-2 rounded-lg border-4 border-black h-full">
          <div className="bg-gray-300 border-2 border-black col-span-1 row-span-1 flex items-center justify-center text-black">
            Small
          </div>
          <div className="bg-gray-300 border-2 border-black col-span-1 row-span-1 flex items-center justify-center text-black">
            Small
          </div>
          <div className="bg-gray-400 border-2 border-black col-span-1 row-span-1 flex items-center justify-center text-black">
            Medium
          </div>
          <div className="bg-gray-400 border-2 border-black col-span-2 row-span-1 flex items-center justify-center text-black">
            Big
          </div>
          <div className="bg-gray-300 border-2 border-black col-span-1 row-span-1 flex items-center justify-center text-black">
            Small
          </div>
          <div className="bg-gray-400 border-2 border-black col-span-1 row-span-2 flex items-center justify-center text-black">
            Big
          </div>
          <div className="bg-gray-400 border-2 border-black col-span-2 row-span-1 flex items-center justify-center text-black">
            Big
          </div>
        </div>
      </div>
    </div>
  );
}

export default CateringPlates;
