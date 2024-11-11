import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserPage = () => {
  const [AddressForm, SetAddressForm] = useState(false);
  const [Orderform, SetOrderForm] = useState(false);
  const [Liked, SetLiked] = useState(false);
  const [recentlyViewed, SetRecentlyViewed] = useState(false);
  const [OrderView, SetOrderView] = useState(false);
  const [editButton, SetEditButton] = useState(false);
  const [reviewCount, setReviewCount] = useState(0);
  const { loginWithRedirect, logout, user } = useAuth0();
  const persistedUser = user;

  useEffect(() => {
    if (persistedUser?.email) {
      fetch(`https://bookmycater.freewebhostmost.com/getallreviews.php?email=${persistedUser.email}`)
        .then(response => response.json())
        .then(data => {
          setReviewCount(data.review_count || 0);
        })
        .catch(error => console.error("Error fetching review count:", error));
    }
  }, [persistedUser]);
  
  return (
    <>
      <div className="flex flex-col gap-12 items-start min-h-screen bg-gray-200 px-6 md:px-44 ">
        {/* Profile Section */}
        <div className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 rounded-3xl shadow-lg w-full flex flex-col md:flex-row md:items-center justify-between p-8 space-y-6 md:space-y-0 md:space-x-8 transform hover:scale-105 transition duration-300 ease-in-out mt-8">
          {/* Profile Picture and Name */}
          <div className="flex flex-row items-center space-x-6 w-full md:w-auto">
            <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-gray-100 shadow-md transform hover:scale-110 transition duration-300 ease-in-out">
              <img
                src={persistedUser.picture}
                alt="User Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-700 tracking-wide">
                {persistedUser.name}
              </h1>
              <p className="text-gray-500">{persistedUser.email}</p>
{/*               <p className="text-gray-500">+91 123456789</p> */}
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <button
              className="bg-gray-100 text-gray-700 font-semibold px-10 py-3 rounded-full shadow-md hover:bg-gray-700 hover:text-gray-100 transition duration-300 transform hover:scale-105"
              onClick={() => {
                SetEditButton(!editButton);
                SetAddressForm(false);
                SetOrderForm(false);
                SetLiked(false);
                recentlyViewed(false);
                SetOrderView(false);
              }}
            >
              Edit Profile
            </button>

            {/* Stats Section */}
            <div className="flex gap-10 mt-4 text-center">
              <div>
                <p className="text-lg font-semibold text-gray-100">Reviews</p>
                <p className="text-4xl font-bold text-gray-100">{reviewCount}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-100">Orders</p>
                <p className="text-4xl font-bold text-gray-100">15</p>
              </div>
            </div>
          </div>
        </div>


        
        {/* Main Content */}
        <div className="w-full flex flex-row gap-6 items-stretch mb-10">
          {/* Left Menu */}
          <div className="flex flex-col w-full md:w-[30%] bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-gray-100 rounded-xl shadow-lg p-6 space-y-6">
            {/* Address Section */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="border-b-2 border-gray-600 w-full pb-2">
                <h1 className="text-2xl font-semibold text-gray-300 tracking-wide">
                  Address
                </h1>
              </div>
              <div
                className="w-full rounded-lg p-2 transition transform hover:scale-105 hover:bg-gradient-to-r from-gray-600 to-gray-800 shadow-md duration-300 ease-in-out cursor-pointer"
                onClick={() => {
                  SetAddressForm(!AddressForm);
                  SetOrderForm(false);
                  SetLiked(false);
                  recentlyViewed(false);
                  SetOrderView(false);
                }}
              >
                <p className="text-lg font-medium text-gray-200">My Address</p>
              </div>
            </div>

            {/* Orders Section */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="border-b-2 border-gray-600 w-full pb-2">
                <h1 className="text-2xl font-semibold text-gray-300 tracking-wide">
                  Orders
                </h1>
              </div>
              <div
                className="w-full rounded-lg p-2 transition transform hover:scale-105 hover:bg-gradient-to-r from-gray-600 to-gray-800 shadow-md duration-300 ease-in-out cursor-pointer"
                onClick={() => {
                  /* Handle Orders Click */
                  SetOrderForm(!Orderform);
                  SetAddressForm(false);
                  SetLiked(false);
                  recentlyViewed(false);
                  SetOrderView(false);
                }}
              >
                <p className="text-lg font-medium text-gray-200">My Orders</p>
              </div>
            </div>

            {/* Activity Section */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="border-b-2 border-gray-600 w-full pb-2">
                <h1 className="text-2xl font-semibold text-gray-300 tracking-wide">
                  Activity
                </h1>
              </div>
              <div
                className="w-full rounded-lg p-2 transition transform hover:scale-105 hover:bg-gradient-to-r from-gray-600 to-gray-800 shadow-md duration-300 ease-in-out cursor-pointer"
                onClick={() => {
                  SetLiked(!Liked);
                  SetOrderForm(false);
                  SetAddressForm(false);
                  SetRecentlyViewed(false);
                  SetOrderView(false);
                }}
              >
                <p className="text-lg font-medium text-gray-200">
                  Liked Caterers
                </p>
              </div>
              <div
                className="w-full rounded-lg p-2 transition transform hover:scale-105 hover:bg-gradient-to-r from-gray-600 to-gray-800 shadow-md duration-300 ease-in-out cursor-pointer"
                onClick={() => {
                  SetRecentlyViewed(!recentlyViewed);
                  SetOrderForm(false);
                  SetAddressForm(false);
                  SetLiked(false);
                  SetOrderView(false);
                }}
              >
                <p className="text-lg font-medium text-gray-200">
                  Recently Viewed
                </p>
              </div>
            </div>
          </div>

          {/* Conditional Address Form */}
          {AddressForm && (
            <div className="flex-grow p-6 bg-gray-100 rounded-xl shadow-lg w-full">
              <h1 className="text-3xl font-semibold text-gray-700 mb-6">
                My Addresses
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Add Address Card */}
                <div
                  className="bg-gray-100 border rounded-lg flex flex-col justify-center items-center py-10 shadow-md hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
                  onClick={() => {
                    /* Handle Add Address Click */
                  }}
                >
                  <div className="text-red-500 text-4xl font-bold">+</div>
                  <p className="text-lg font-medium text-gray-600 mt-4">
                    Add Address
                  </p>
                </div>

                {/* Address Card 1 */}
                <div className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Home
                  </h2>
                  <p className="text-gray-600">
                    Villa No. 29, GK Alam Villas, Shaili Gardens, Sainikpuri,
                    Secunderabad
                  </p>
                  <div className="flex mt-4 space-x-4 text-sm">
                    <button className="text-red-500 font-medium">Edit</button>
                    <span className="text-gray-400">|</span>
                    <button className="text-gray-500">Delete</button>
                  </div>
                </div>

                {/* Address Card 2 */}
                <div className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Work
                  </h2>
                  <p className="text-gray-600">
                    56 Prashant Nagar, Boduppal, Hyderabad, Mallika Arjun Nagar
                  </p>
                  <div className="flex mt-4 space-x-4 text-sm">
                    <button className="text-red-500 font-medium">Edit</button>
                    <span className="text-gray-400">|</span>
                    <button className="text-gray-500">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Conditional Orders Form */}
          {Orderform && (
            <div className="flex-grow p-6 bg-gray-100 rounded-xl shadow-lg w-full">
              <h1 className="text-3xl font-semibold text-gray-700 mb-6">
                My Orders
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Order Card 1 */}
                <div className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Order 1
                  </h2>
                  <p className="text-gray-600">Order ID: 123456789</p>
                  <p>
                    Margherita Semizza (Half Pizza)(Serves 1) x 1 <br /> Mac &
                    Cheese Paneer Tikka Pasta Bowl x 1
                  </p>
                  <p>
                    <b>Total: $50</b>
                  </p>
                  <div className="flex mt-4 space-x-4 text-sm">
                    <button
                      className="text-red-500 font-medium"
                      onClick={() => {
                        SetOrderView(true);

                        SetAddressForm(false);
                        SetLiked(false);
                        SetRecentlyViewed(false);
                      }}
                    >
                      View
                    </button>
                    <span className="text-gray-400">|</span>
                    <button className="text-gray-500">Cancel</button>
                  </div>
                </div>

                {/* Order Card 2 */}
                <div className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Order 2
                  </h2>
                  <p className="text-gray-600">Order ID: 987654321</p>
                  <div className="flex mt-4 space-x-4 text-sm">
                    <button className="text-red-500 font-medium">View</button>
                    <span className="text-gray-400">|</span>
                    <button className="text-gray-500">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Conditional Liked Caterers */}
          {Liked && (
            <div className="flex-grow p-6 bg-gray-100 rounded-xl shadow-lg w-full">
              <h1 className="text-3xl font-semibold text-gray-700 mb-6">
                Liked Caterers
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Liked Caterer Card 1 */}
                <div className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Caterer 1
                  </h2>
                  <p className="text-gray-600">Caterer ID: 123456789</p>
                  <div className="flex mt-4 space-x-4 text-sm">
                    <button className="text-red-500 font-medium">View</button>
                    <span className="text-gray-400">|</span>
                    <button className="text-gray-500">UnLike</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Conditional recently viewd Caterers */}
          {recentlyViewed && (
            <div className="flex-grow p-6 bg-gray-100 rounded-xl shadow-lg w-full">
              <h1 className="text-3xl font-semibold text-gray-700 mb-6">
                Recently Viewed Caterers
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Recently Viewed Caterer Card 1 */}
                <div className="bg-white border rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Caterer 1
                  </h2>
                  <p className="text-gray-600">Caterer ID: 123456789</p>
                  <div className="flex mt-4 space-x-4 text-sm">
                    <button className="text-red-500 font-medium">View</button>
                    <span className="text-gray-400">|</span>
                    <button className="text-gray-500">UnLike</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {OrderView && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Order Details
                </h2>
                <p>
                  <b>Order ID:</b> 123456789
                </p>
                <p>
                  <b>Items:</b>
                </p>
                <ul className="list-disc list-inside">
                  <li>Margherita Semizza (Half Pizza) x 1</li>
                  <li>Mac & Cheese Paneer Tikka Pasta Bowl x 1</li>
                </ul>
                <p className="mt-4">
                  <b>Total:</b> $50
                </p>
                <p className="mt-2">
                  <b>Delivery Address:</b> 56 Prashant Nagar, Boduppal,
                  Hyderabad
                </p>
                <p>
                  <b>Status:</b> Preparing
                </p>
                <div className="flex justify-end mt-6">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                    onClick={() => SetOrderView(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          {editButton && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Edit Profile
                </h2>
                <div className="mb-4">
                  <label className="block text-gray-600">Name:</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600">Email:</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600">Phone number:</label>
                  <input
                    type="number"
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600">Profile Pic:</label>
                  <input
                    type="image"
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600">Password:</label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg"
                    onClick={() => setEditButton(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserPage;
