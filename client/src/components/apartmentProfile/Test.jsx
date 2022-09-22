import { useSelector } from "react-redux"

const { default: axios } = require("axios")
const { useState, useEffect } = require("react")

const Test = (props) => {
  const [data, setData] = useState()
  const id = useSelector((state) => state.selectedId.value)
  const getData = () => {
    axios
      .get(`http://localhost:3001/apartments/${id}`)
      .then((res) => res.data && props.setData(res.data))
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      {props.data.map((d) => {
        return d.properties.elevator
      })}
    </div>
  )
}
export default Test
