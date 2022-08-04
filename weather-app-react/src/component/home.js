import "bootstrap/dist/css/bootstrap.min.css"
import { useState,useRef} from "react"
import {Weather} from "./weather.js"
import "./style.css"
import {ErrorBoundaries} from "./errorBoundaries.js"

export const Home = () => {
  const [city,setcity] = useState("")
  const userInput = useRef()

const handleClick = () => {
  setcity(userInput.current.value)
  console.log(city)
}

  return(
    <div className="mt-4">
      <input className="input" ref={userInput} type="text" placeholder="Search City"/>
      <input className="button" onClick={handleClick} type="submit" value="Search"/>
      {city?<ErrorBoundaries><Weather cityName = {city}/></ErrorBoundaries>:null}
    </div>
  )
}