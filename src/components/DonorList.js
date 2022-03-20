import DonorItem from "./DonorItem";

const DonorList = ({ List }) => {
  return (
    <div className="DonorList col-12 col-md-8">
      <h2>List of Blood Donors</h2>
      {List && List.length > 0 ? (
        <div className="list-group">
          {List.map((item, key) => (
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
