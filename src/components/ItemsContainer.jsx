import React, { useEffect, useState } from "react";
import AddSign from "../assets/svgIcons/AddSign";
import Chicken from "../assets/svgIcons/Chicken";
import Hamburger from "../assets/svgIcons/Hamburger";
import Pizza from "../assets/svgIcons/Pizza";
import Submarine from "../assets/svgIcons/Submarine";

const iconComponents = {
  Hamburger,
  Chicken,
  Submarine,
  Pizza,
};

const ItemsContainer = ({onAddItem}) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("/menuItems.json")
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error("Error loading menu items:", error));
  }, []);

  return (
    <div className="items-container">
      {menuItems.map((item) => {
        const IconComponent = iconComponents[item.icon];
        return (
          <div
            key={item.id}
            className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 flex items-center justify-center mr-3">
                {IconComponent && <IconComponent />}
              </div>
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-xs text-gray-400">BDT {item.price}</p>
              </div>
            </div>
            <button
              onClick={() => onAddItem(item)}
              className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <AddSign />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsContainer;
