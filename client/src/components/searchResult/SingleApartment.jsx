import "../apartmentProfile/apartment.css";
const SingleApartment = (props) => {
  return (
    <div key={props.index} className="group relative">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          alt={props.adress}
          src={props.image[0].url}
        ></img>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={props.href} className="adress">
              <span aria-hidden="true" className="absolute inset-0" />
              {props.adress}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500"></p>
        </div>
        <p className="text-sm font-medium text-gray-900">{props.price}$</p>
      </div>
    </div>
  );
};

export default SingleApartment;
