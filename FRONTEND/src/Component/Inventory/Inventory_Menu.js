import React from "react";
import issuedItemsImage from "./images/issueditems.png";
import managePartsImage from "./images/manageparts.png";
import manageOrdersImage from "./images/manageorders.png";

export default function Inventory_Menu() {
  return (
    <div className="h-screen w-screen bg-gray flex justify-center items-center flex-wrap">
      <div className="relative inline-flex group mr-4 fire-container">
        <a
          href="/issueditems"
          title="issued_items"
          className="relative inline-flex items-center justify-center px-12 py-8 text-lg font-bold text-white transition-all duration-200 bg-black bg-opacity-50 backdrop-blur-lg font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          <img src={issuedItemsImage} alt="Issued Items" className="mr-2" />
          Issued Items
        </a>
      </div>

      <div className="relative inline-flex group mr-4 fire-container">
        <a
          href="/manageitems"
          title="managed_parts"
          className="relative inline-flex items-center justify-center px-12 py-8 text-lg font-bold text-white transition-all duration-200 bg-black bg-opacity-50 backdrop-blur-lg font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          <img src={managePartsImage} alt="Manage Parts" className="mr-2" />
          Managed Parts
        </a>
      </div>

      <div className="relative inline-flex group mr-4 fire-container">
        <a
          href="/managedorders"
          title="managed_orders"
          className="relative inline-flex items-center justify-center px-12 py-8 text-lg font-bold text-white transition-all duration-200 bg-black bg-opacity-50 backdrop-blur-lg font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          <img src={manageOrdersImage} alt="Manage Orders" className="mr-2" />
          Managed Orders
        </a>
      </div>
    </div>
  );
}
