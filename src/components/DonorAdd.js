import { useState } from "react";
import FormGroup from "./Bootstrap/FormGroup";

const DonorAdd = ({ addDonors }) => {
  const [Name, setName] = useState("");
  const [ContactNumber, setContactNumber] = useState("");
  const [BloodGroup, setBloodGroup] = useState("");

  const Fields = {
    Name: [Name, setName],
    ContactNumber: [ContactNumber, setContactNumber]
  };

  const handleSubmit = e => {
    e.preventDefault();
    addDonors({ Name, ContactNumber, BloodGroup });
  };

  return (
    <div className="DonorAdd col-12 col-md-4">
      <h2>Add yourself as Blood Donor</h2>
      <form onSubmit={handleSubmit}>
        {["Name", "Contact Number"].map(fg => (
          <FormGroup
            key={fg}
            Label={fg}
            Id={fg.replace(" ", "")}
            Type={fg.replace(" ", "") === "Name" ? "text" : "number"}
            Value={Fields[fg.replace(" ", "")][0]}
            onChange={e => Fields[fg.replace(" ", "")][1](e.target.value)}
            Placeholder={`Please enter your ${fg}.`}
          />
        ))}
        <div className="form-group">
          <label htmlFor="BloodGroup">Blood Group</label>
          <select
            name="BloodGroup"
            id="BloodGroup"
            className="custom-select"
            value={BloodGroup}
            onChange={e => setBloodGroup(e.target.value)}
          >
            <option value="" disabled="disabled">
              Select your Blood Group
            </option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
            <option value="O+">O+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="AB-">AB-</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <input
          disabled={
            Name.trim().length < 3 ||
            ContactNumber.trim().length < 12 ||
            BloodGroup.trim().length < 2
          }
          type="submit"
          className="btn btn-primary"
          value="Add Me!"
        />
      </form>
    </div>
  );
};

export default DonorAdd;
