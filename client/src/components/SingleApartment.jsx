import "./allApartments.css";
import Apartment from "./Apartment";

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
              // <Apartment
              //   key={index}
              //   image={apartment.image}
              //   adress={apartment.adress}
              //   price={apartment.price}
              // ></Apartment>
            );
          }
        })}
      </div>
    </div>
  );
};
export default AllApartments;
