export default function OrderTable({ order }) {
    if (!order || !order.items || order.items.length === 0) {
        return <div className="text-center py-4">No orders available.</div>;
    }

    return (
        <table className="min-w-full">
            <thead>
                <tr className="text-left text-sm">
                    <th className="pb-3 font-medium">ID</th>
                    <th className="pb-3 font-medium">Customer Name</th>
                    <th className="pb-3 font-medium">Items</th>
                    <th className="pb-3 font-medium">Amount</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Action</th>
                </tr>
            </thead>
            <tbody className="text-sm">
                {order.items.map((item, index) => (
                    <tr key={index} className="border-t border-gray-700">
                        <td className="py-3">{order.id}</td>
                        <td className="py-3">{order.customerName}</td>
                        <td className="py-3">{item.name}</td>
                        <td className="py-3">{item.price}</td>
                        <td className="py-3">
                            <span className={order.status === "Pending" ? "text-red-500" : "text-green-500"}>
                                {order.status.toUpperCase()}
                            </span>
                        </td>
                        <td className="py-3">
                            <button className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                                Delete
                            </button>
                            <button className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                                DELIVER
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
