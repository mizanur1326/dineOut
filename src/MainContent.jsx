import { useState } from "react";
import CreateOrder from "./CreateOrder";
import OrderSummary from "./OrderSummary";

export default function MainContent() {
     const [order, setOrder] = useState(null);

    const onPlaceOrder = (newOrder) => {
        setOrder(newOrder);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
            <CreateOrder onPlaceOrder={onPlaceOrder}/>
            <OrderSummary order={order}/>
        </div>
    ); 
}