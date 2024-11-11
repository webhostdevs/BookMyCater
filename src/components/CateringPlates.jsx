import React from 'react';

function CateringPlates() {
  return (
    <div className="flex flex-col items-center space-y-8 p-8 bg-gray-100 min-h-screen">
      {/* Plate 1: 3 Compartments (2x2 grid) */}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">3-Compartment Plate</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 bg-white shadow-md p-4 rounded-lg">
          <div className="bg-green-200 col-span-1 row-span-1 p-4 flex items-center justify-center">
            Small
          </div>
          <div className="bg-green-200 col-span-1 row-span-1 p-4 flex items-center justify-center">
            Small
          </div>
          <div className="bg-green-400 col-span-2 row-span-1 p-4 flex items-center justify-center">
            Big
          </div>
        </div>
      </div>

      {/* Plate 2: 5 Compartments (3x2 grid) */}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">5-Compartment Plate</h2>
        <div className="grid grid-cols-2 grid-rows-3 gap-2 bg-white shadow-md p-4 rounded-lg">
          <div className="bg-blue-200 col-span-1 row-span-1 p-4 flex items-center justify-center">
            Small
          </div>
          <div className="bg-blue-200 col-span-1 row-span-1 p-4 flex items-center justify-center">
            Small
          </div>
          <div className="bg-blue-400 col-span-2 row-span-1 p-4 flex items-center justify-center">
            Big
          </div>
          <div className="bg-blue-200 col-span-1 row-span-1 p-4 flex items-center justify-center">
            Small
          </div>
          <div className="bg-blue-200 col-span-1 row-span-1 p-4 flex items-center justify-center">
            Small
          </div>
        </div>
      </div>

      {/* Plate 3: 8 Compartments (3x3 grid) */}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">8-Compartment Plate</h2>
        <div className="grid grid-cols-3 grid-rows-3 gap-2 bg-white shadow-md p-4 rounded-lg">
          <div className="bg-yellow-200 col-span-1 row-span-1 p-4 flex items-center justify-center">
            Small
          </div>
          <div className="bg-yellow-200 col-span-1 row-span-1 p-4 flex items-center justify-center">
            Small
          </div>
          <div className="bg-yellow-300 col-span-1 row-span-1 p-4 flex items-center justify-center">
            Medium
          </div>
          <div className="bg-yellow-400 col-span-2 row-span-1 p-4 flex items-center justify-center">
            Big
          </div>
          <div className="bg-yellow-200 col-span-1 row-span-1 p-4 flex items-center justify-center">
            Small
          </div>
          <div className="bg-yellow-400 col-span-1 row-span-2 p-4 flex items-center justify-center">
            Big
          </div>
          <div className="bg-yellow-400 col-span-2 row-span-1 p-4 flex items-center justify-center">
            Big
          </div>
        </div>
      </div>
    </div>
  );
}

export default CateringPlates;
