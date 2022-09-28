import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "./allApartments.css"
import SingleApartment from "./SingleApartment"
// const Data = require("../../Apartments.json")

function AllApartments() {
  const [isLoading, setIsLoading] = useState(true)
  const [Data, setData] = useState([])
  const query = useSelector((state) => state.searchResult.value)
  const getData = async () => {
    await axios.get(`http://localhost:3001/apartments/${query}`).then((res) => {
      res.data && setData(res.data)
    })
    setIsLoading(false)
  }
  useEffect(() => {
    getData()
  }, [query])

  if (!isLoading) {
    return (
      <div>
        <div className="titleApartment">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">
              Choose your favorite apartment,and view
            </span>{" "}
            <br />
            <span className="block text-indigo-600 xl:inline">
              the real details about it
            </span>
          </h1>
        </div>

        {/* <div className="PicturesDiv"> */}
        <div className=" bg-white">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {Data.map((apartment, index) => {
                return (
                  <SingleApartment
                    key={index}
                    image={apartment.image}
                    adress={apartment.adress}
                    price={apartment.price}
                    href={"/"}
                    id={apartment._id}
                  ></SingleApartment>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <div></div>
  }
}
// </div>

export default AllApartments
