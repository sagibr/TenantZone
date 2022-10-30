import GoogleMapReact from "google-map-react"
import React from "react"

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 32.004984,
      lng: 34.947703,
    },
    zoom: 16,
  }
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAtNCkYfja2bOwriK8fLpaa2snE2jnVrAw" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  )
}
