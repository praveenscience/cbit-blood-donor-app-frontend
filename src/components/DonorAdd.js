import FormGroup from "./Bootstrap/FormGroup";

const DonorAdd = () => {
  return (
    <div className="DonorAdd col-12 col-md-4">
      <h2>Add yourself as Blood Donor</h2>
      <form>
        {["Name", "Contact Number"].map(fg => (
          <FormGroup
            key={fg}
            Label={fg}
            Id={fg.replace(" ", "")}
            Placeholder={`Please enter your ${fg}.`}
          />
        ))}
        <div className="form-group">
          <label htmlFor="BloodGroup">Blood Group</label>
          <select name="BloodGroup" id="BloodGroup" className="custom-select">
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
        <input type="submit" className="btn btn-primary" value="Add Me!" />
      </form>
    </div>
  );
};

export default DonorAdd;
