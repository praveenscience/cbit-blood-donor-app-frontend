import { useState } from "react";
import DonorItem from "./DonorItem";
import Card from "./Bootstrap/Card";
import FormGroup from "./Bootstrap/FormGroup";

const DonorList = ({ List }) => {
  const [Filter, setFilter] = useState("");
  return (
    <div className="DonorList col-12 col-md-8">
      <h2>List of Blood Donors</h2>
      <Card className="my-4">
        <FormGroup
          Label="Search for Anything"
          Placeholder="Type Something...."
          Value={Filter}
          onChange={e => {
            setFilter(e.target.value);
          }}
        />
      </Card>
      {List &&
      List.filter(
        f =>
          f.Name?.toLowerCase().indexOf(Filter.toLowerCase()) > -1 ||
          f.ContactNumber?.toLowerCase().indexOf(Filter.toLowerCase()) > -1 ||
          f.BloodGroup?.toLowerCase().indexOf(Filter.toLowerCase()) > -1
      ).length > 0 ? (
        <div className="list-group">
          {List.filter(
            f =>
              f.Name?.toLowerCase().indexOf(Filter.toLowerCase()) > -1 ||
              f.ContactNumber?.toLowerCase().indexOf(Filter.toLowerCase()) >
                -1 ||
              f.BloodGroup?.toLowerCase().indexOf(Filter.toLowerCase()) > -1
          ).map((item, key) => (
            <DonorItem item={item} key={key} />
          ))}
        </div>
      ) : (
        <div className="alert alert-danger" role="alert">
          Sorry! No donors found! Come back later. Alternatively, if you want to
          donate blood, please fill in the form on the right! 👉🏻
        </div>
      )}
    </div>
  );
};

export default DonorList;
