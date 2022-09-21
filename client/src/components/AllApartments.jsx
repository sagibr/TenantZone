import "./allApartments.css";
import SingleApartment from "./SingleApartment";

const Data = require("../Apartments.json");

const AllApartments = () => {
  // console.log(typeof Data);

  const apartment = Data;

  return (
    <div>
      <div className="titleApartment">
        <h1>choose apartment</h1>
      </div>
      <div className="PicturesDiv">
        {Data?.map((apartment, index) => {
          console.log(apartment);
          {
            return (
              <SingleApartment
                key={index}
                image={apartment.image}
                adress={apartment.adress}
                price={apartment.price}
              ></SingleApartment>
            );
          }
        })}
      </div>
    </div>
  );
};
export default AllApartments;
