import React from "react";

const DonorItem = ({ item }) => {
  const { Name, ContactNumber, BloodGroup } = item;
  return (
    <div className="DonorItem list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{Name}</h5>
        <small>3 days ago</small>
      </div>
      <p class="mb-1">Contact Number: {ContactNumber}</p>
      <p class="mb-1">Blood Group: {BloodGroup}</p>
    </div>
  );
};

export default DonorItem;
