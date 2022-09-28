import axios from "axios"
import { useEffect, useState } from "react"
import { BsBuilding, BsDoorClosed } from "react-icons/bs"
import { IoResize } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import { update } from "../../reducers/selectedIdSlice"
import "./apartment.css"
import ImageCarusal from "./ImagesCarusal"
import OpinionCarusal from "./OpinionsCarusal"
import SimpleMap from "./SimpleMap"
import Test from "./Test"

const Apartment = (props) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const id = useSelector((state) => state.selectedId.value)
  useEffect(() => {
    getData()
    setIsLoading(false)
  }, [])
  const getData = () => {
    axios
      .get(`http://localhost:3001/apartments/${id}`)
      .then((res) => res.data && setData(res.data))
  }
  const postOpinion = (payed, opinion) => {
    axios
      .patch(`http://localhost:3001/apartments/${id}`, {
        // ...data,
        opinions: [
          ...data[0].opinions,
          {
            user: { name: "aaa", profileImage: { url: "asa" } },
            payed: payed,
            opinion: opinion,
          },
        ],
      })
      .then((res) => res.data && getData())
  }
  // const images = data[0].image
  // const opinions = data[0].opinions

  if (!isLoading) {
    return (
      <div className="container w-auto m-10 flex shadow-2xl min-h-screen">
        {/* <Test data={data} setData={setData}></Test> */}
        <div className="basis-3/5 mx-3 container ">
          <div>
            <ImageCarusal images={data[0]?.image}></ImageCarusal>
          </div>
          <div className="flex justify-around">
            <h1 className="text-4xl font-mono font-semibold">
              {data[0]?.adress}
            </h1>
            <h1 className="text-4xl font-mono font-semibold">
              {data[0]?.price}$
            </h1>
          </div>
          <div className="flex justify-evenly">
            <h3 className="flex text-xl">
              <BsBuilding className="m-1" />
              floor: {data[0]?.floor}
            </h3>
            <h3 className="flex text-xl">
              <BsDoorClosed className="m-1" />
              rooms: {data[0]?.romms}
            </h3>
            <h3 className="flex text-xl">
              <IoResize className="m-1" />
              size: {data[0]?.size}
            </h3>
          </div>
          <div className="flex justify-evenly my-5 ">
            <div className="w-36">
              <h1>Elevator:</h1>
              {data[0]?.properties.elevator ? (
                <input
                  type={"checkbox"}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  disabled
                  checked
                ></input>
              ) : (
                <input
                  type={"checkbox"}
                  disabled
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              )}
            </div>
            <div className="w-36">
              <h1>Parking:</h1>
              {data[0]?.properties.parking ? (
                <input
                  type={"checkbox"}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  disabled
                  checked
                ></input>
              ) : (
                <input
                  type={"checkbox"}
                  disabled
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              )}
            </div>
          </div>
          <div className="flex justify-evenly my-5">
            <div className="w-36">
              <h1>Bars:</h1>
              {data[0]?.properties.bars ? (
                <input
                  type={"checkbox"}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  disabled
                  checked
                ></input>
              ) : (
                <input
                  type={"checkbox"}
                  disabled
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              )}
            </div>
            <div className="w-36">
              <h1>Storage:</h1>
              {data[0]?.properties.storage ? (
                <input
                  type={"checkbox"}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  disabled
                  checked
                ></input>
              ) : (
                <input
                  type={"checkbox"}
                  disabled
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              )}
            </div>
          </div>
          <div className="flex justify-evenly my-5">
            <div className="w-36">
              <h1>Air Conditioner:</h1>
              {data[0]?.properties.airConditioner ? (
                <input
                  type={"checkbox"}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  disabled
                  checked
                ></input>
              ) : (
                <input
                  type={"checkbox"}
                  disabled
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              )}
            </div>
            <div className="w-36">
              <h1>Porch:</h1>
              {data[0]?.properties.porch ? (
                <input
                  type={"checkbox"}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  disabled
                  checked
                ></input>
              ) : (
                <input
                  type={"checkbox"}
                  disabled
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              )}
            </div>
          </div>
          <div className="flex justify-evenly my-5">
            <div className="w-36">
              <h1>Renovated:</h1>
              {data[0]?.properties.renovated ? (
                <input
                  type={"checkbox"}
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  disabled
                  checked
                ></input>
              ) : (
                <input
                  type={"checkbox"}
                  disabled
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              )}
            </div>
          </div>
          <div className="h-36 flex flex-col justify-between shadow-md bg-gray-50 rounded-2xl">
            <div className="flex justify-around h-1/3 my-3">
              <div className="flex w-1/5 justify-between">
                <h1 className="m-3 font-mono font-semibold">
                  {data[0]?.ownerInfo.name}
                </h1>
              </div>
              <button className=" bg-transparent hover:border-gray-500 text-blue-700 font-semibold hover:text-gray-500 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                {data[0]?.ownerInfo.number}
              </button>
            </div>
            <div className="h-2/3 flex">
              <input
                className="w-1/2 h-1/2 m-auto block p-4  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                disabled
                placeholder="your phone number..."
              ></input>
              <button className="w-1/3 h-1/2 m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Contact me
              </button>
            </div>
          </div>
          <OpinionCarusal opinions={data[0]?.opinions}></OpinionCarusal>
          <div>
            <button
              onClick={() => postOpinion()}
              className="w-1/3 h-1/2 my-2  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Post Opinion
            </button>
          </div>
        </div>
        <div className="basis-2/5 mx-3">
          <SimpleMap></SimpleMap>
        </div>
      </div>
    )
  }
}
export default Apartment
