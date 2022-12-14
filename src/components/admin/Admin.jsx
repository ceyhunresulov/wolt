import React, { useEffect } from "react";
import Restaurant from "./Restaurant";
import AdminCategories from "./AdminCategories";
function Admin({ person }) {
  return (
    <div className="w-[97%] mx-auto border mt-20 flex">
      <Restaurant />
      <AdminCategories />
    </div>
  );
}

export default Admin;
