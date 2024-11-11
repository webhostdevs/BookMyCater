import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const VendorMenu = () => {
    const { id } = useParams(); // Extract vendor ID from URL params
    const [menuItems, setMenuItems] = useState({});
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        // Fetch menu items from the backend
        const fetchMenuItems = async () => {
            try {
                const response = await fetch(`https://bookmycater.freewebhostmost.com/getvendormenu.php`);
                const data = await response.json();

                // Filter items by vendorId from the full dataset
                const filteredItems = data.filter(item => item.vendor_id === id);
                
                // Group items by category
                const itemsByCategory = filteredItems.reduce((acc, item) => {
                    const category = item.meal_type; // Assuming 'meal_type' is the category field
                    if (!acc[category]) {
                        acc[category] = [];
                    }
                    acc[category].push(item);
                    return acc;
                }, {});

                setMenuItems(itemsByCategory);
                setCategories(Object.keys(itemsByCategory)); // Store the categories
                if (Object.keys(itemsByCategory).length > 0) {
                    setSelectedCategory(Object.keys(itemsByCategory)[0]); // Set the first category as selected by default
                }
            } catch (error) {
                console.error("Error fetching menu items:", error);
            }
        };

        fetchMenuItems();
    }, [id]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Menu</h1>
            <div className="flex justify-center mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 mx-2 rounded-lg transition-colors duration-300 ${
                            selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            {selectedCategory && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuItems[selectedCategory].map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 shadow-md rounded-lg p-6 w-full sm:w-[300px] mx-auto bg-white transition-transform transform"
                        >
                            <div className="flex flex-col items-center space-y-4">
                                <div className="h-[150px] w-[150px] overflow-hidden rounded-full border border-gray-200 shadow-inner">
                                    <img
                                        src={`https://bookmycater.freewebhostmost.com/${item.image_path}`}
                                        alt={item.item_name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-gray-800">{item.item_name}</h3>
                                    <p className="text-gray-700 font-bold mt-2">₹{item.price}</p>
                                    <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
                                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-200 ease-in-out">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default VendorMenu;
