import "./apartment.css";
const SingleApartment = (props) => {
  console.log(props.images);
  return (
    <div className="divApartment" key={props.index}>
      <div className="rightSide">
        <img className="adressPicture" src={props.image[0].url}></img>
        <div className="adressPicture">{props.adress}</div>
        <div className="pricePicture">{props.price}</div>
      </div>
    </div>
  );
};

export default SingleApartment;
