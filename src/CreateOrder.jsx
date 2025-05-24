import React, { useState } from 'react';
import ItemsContainer from './components/ItemsContainer';

export default function CreateOrder({ onPlaceOrder }) {
    const [customerName, setCustomerName] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);

    const handleAddItem = (item) => {
        setSelectedItems((prevItems) => [...prevItems, item]);
    };

    const handleSubmit = () => {
        if (!customerName || selectedItems.length === 0) {
            alert('Please fill in all details!');
            return;
        } 

        const order = {
            id: Date.now(),
            customerName,
            items: selectedItems,
            total: selectedItems.reduce((sum, item) => sum + item.price, 0),
            status: 'Pending',
        };

        onPlaceOrder(order);
        setCustomerName('');
        setSelectedItems([]);
    };

    return (
        <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
            <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
            <p className="text-gray-400 text-sm mb-4">
                Accurately fulfill customer orders based on a precise understanding of their requirements.
            </p>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Customer Name</label>
                <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Choose Items</label>
                <ItemsContainer onAddItem={handleAddItem} />
            </div>

            <button
                onClick={handleSubmit}
                className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
                Place Order (BDT {selectedItems.reduce((sum, item) => sum + item.price, 0)})
            </button>
        </div>
    );
}
