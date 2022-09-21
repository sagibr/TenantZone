import "./apartment.css";
const Apartment = (props) => {
  return (
    <div className="divApartment">
      <div className="rightSide">
        {props.image.map((img, index) => {
          return (
            <img
              key={index}
              className="apartmentImg"
              alt={index}
              src={img.url}
            ></img>
          );
        })}
        <div className="underPictures">
          <div className="adressPicture">{props.adress}</div>
          <div className="pricePicture">{props.price}</div>
          <div className="floorPicture">{props.floor}</div>
          <div className="roomsPicture">{props.rooms}</div>
          <div className="sizePicture">{props.size}</div>
        </div>
        <div className="checkboxs">
          <div className="leftBox">
            <div className="checkbox">
              {props.elevator ? (
                <input type="checkbox" defaultChecked disabled />
              ) : (
                <input type="checkbox" disabled />
              )}
              elevator
            </div>
            <div className="checkbox">
              {props.parking ? (
                <input type="checkbox" defaultChecked disabled />
              ) : (
                <input type="checkbox" disabled />
              )}
              parking
            </div>
            <div className="checkbox">
              {props.bars ? (
                <input type="checkbox" defaultChecked disabled />
              ) : (
                <input type="checkbox" disabled />
              )}
              bars
            </div>
          </div>
          <div className="rightBox">
            <div className="checkbox">
              {props.storage ? (
                <input type="checkbox" defaultChecked disabled />
              ) : (
                <input type="checkbox" disabled />
              )}
              storage
            </div>
            <div className="checkboxs">
              {props.airConditioner ? (
                <input type="checkbox" defaultChecked disabled />
              ) : (
                <input type="checkbox" disabled />
              )}
              airConditioner
            </div>
            <div className="checkboxs">
              {props.porch ? (
                <input type="checkbox" defaultChecked disabled />
              ) : (
                <input type="checkbox" disabled />
              )}
              porch
            </div>
            <div className="checkboxs">
              {props.renovated ? (
                <input type="checkbox" defaultChecked disabled />
              ) : (
                <input type="checkbox" disabled />
              )}
              renovated
            </div>
          </div>
        </div>
        <div className="opinion">
          {props.opinions?.map((op, index) => {
            return (
              <div key={index}>
                <div>
                  <div>{op.user.name}</div>
                  <div>{op.user.profileImage.url}</div>
                </div>
                <div>{op.payed}</div>
                <div>{op.date}</div>
                <div>{op.opinion}</div>
              </div>
            );
          })}
        </div>
        <div className="ContactTheLandlord">
          <div className="pricePicture">{props.name}</div>
          <div className="pricePicture">{props.number}</div>
          <div className="pricePicture">{props.email}</div>
          <div id="payApartment"></div>
        </div>
        <button className="buttonBuy">Buy</button>
      </div>
    </div>
  );
};
export default Apartment;
