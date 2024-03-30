import React from "react";

const Navbar = () => {
  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage:
          "url('https://mdbootstrap.com/img/new/slides/041.jpg')",
        height: "200px",
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Inventory Management</h1>
            <h4 className="mb-3">Stock</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
