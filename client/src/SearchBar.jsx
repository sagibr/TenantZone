import axios from "axios"
const { useState } = require("react")

const SearchBar = () => {
  const [value, setValue] = useState("")

  function isNumber(char) {
    if (typeof char !== "string") {
      return false
    }

    if (char.trim() === "") {
      return false
    }

    return !isNaN(char)
  }
  const ExtractNumber = (string, start) => {
    let endOfNumber
    for (let index = start; index < string.length; index++) {
      if (!isNumber(string[index + 1])) {
        endOfNumber = index + 1
        break
      }
    }
    const number = string.substring(start, endOfNumber)
    return number.toString()
  }

  async function search() {
    let query = ""
    let input = value

    if (input) {
      if (input.includes("floor")) {
        query
          ? (query += `&floor=${await ExtractNumber(
              input.substring(input.indexOf(`floor`)),
              5
            )}`)
          : (query += `?floor=${await ExtractNumber(
              input.substring(input.indexOf(`floor`)),
              5
            )}`)
        const number = await ExtractNumber(
          input.substring(input.indexOf(`floor`)),
          5
        )
        input =
          input.slice(0, input.indexOf(`floor`)) +
          input.slice(input.indexOf(number) + number.length, input.length)
      }
      if (input.includes("price")) {
        query
          ? (query += `&price=${await ExtractNumber(
              input.substring(input.indexOf(`price`)),
              5
            )}`)
          : (query += `?price=${await ExtractNumber(
              input.substring(input.indexOf(`price`)),
              5
            )}`)
        const number = await ExtractNumber(
          input.substring(input.indexOf(`price`)),
          5
        )
        input =
          input.slice(0, input.indexOf(`price`)) +
          input.slice(input.indexOf(number) + number.length, input.length)
      }
      if (input.includes("room")) {
        query
          ? (query += `&romms=${await ExtractNumber(
              input.substring(input.indexOf(`room`) - 3),
              0
            )}`)
          : (query += `?romms=${await ExtractNumber(
              input.substring(input.indexOf(`room`) - 3),
              0
            )}`)
        const number = await ExtractNumber(
          input.substring(input.indexOf(`room`) - 3),
          0
        )
        input =
          input.slice(0, input.indexOf(number)) +
          input.slice(input.indexOf("room") + 5, input.length)
      }
      if (input.includes("size")) {
        query
          ? (query += `&size=${await ExtractNumber(
              input.substring(input.indexOf(`size`)),
              4
            )}`)
          : (query += `?size=${await ExtractNumber(
              input.substring(input.indexOf(`size`)),
              4
            )}`)
        const number = await ExtractNumber(
          input.substring(input.indexOf(`size`)),
          4
        )
        input =
          input.slice(0, input.indexOf(`size`)) +
          input.slice(input.indexOf(number) + number.length, input.length)
      }
      query += `&adress=${input}`
    }
    query = query.replace(/\s/g, "")
    axios.get(`http://localhost:3001/apartments/${query}`).then((res) => {
      res.data && console.log(res.data)
    })
  }

  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      ></input>
      <button onClick={() => search()}>Search</button>
    </div>
  )
}
export default SearchBar
