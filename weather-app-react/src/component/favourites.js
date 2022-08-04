import { useEffect,useState } from "react"
import {citySearch,cityKey} from "./fetch.js"


export const Favourites = () => {
const [data1,setdata] = useState([])
const [temperature,settemperature] = useState(JSON.parse(localStorage.getItem("city")))

useEffect(() => {
temperature.forEach((ele) => {
  citySearch(ele)
    .then(data =>{
     cityKey(data.data[0].Key)
     .then(result => {
      setdata(oldArray => [...oldArray,{...result.data[0],CityName : data.data[0].EnglishName}])      
      })
      .catch(error => {
        console.log(error)
      })
       
    })
    .catch(error => {
      console.log(error)
    })
})
},[temperature])

console.log(data1)

const handleClick = (e) => {
  let s = temperature.indexOf(e.target.id.toLowerCase())
  temperature.splice(s,s+1)
  let splicedArray = [...temperature]
  localStorage.setItem("city",JSON.stringify(splicedArray))
  settemperature(splicedArray)
  let mapped = [...new Map(data1.map(ele =>[ele["CityName"],ele])).values(),]
  let filtered = mapped.filter(ele => ele.CityName != e.target.id)
  setdata(filtered)
}

const icon = (icon) => {
  return `https://developer.accuweather.com/sites/default/files/${icon.toString().length === 1? "0" + icon.toString(): icon}-s.png`
}

  return(
    <div className="d-flex flex-wrap gap-3 justify-content-center mt-5">
      {data1.length >=1?[...new Map(data1.map(ele =>[ele["CityName"],ele])).values(),].map((ele,index) =>{
          return(
            <div className="card d-flex align-items-center" key={index} style={{width:"250px",height:"300px"}}>
                <p className="pt-3">{ele.CityName}</p>
                <img src={icon(ele.WeatherIcon)} style={{height:"165px"}}/>
                <p className="pt-3">{ele.WeatherText}</p>
                <p>{`${ele.Temperature.Metric.Value}°C / ${ele.Temperature.Imperial.Value}°F`}</p>
                <button id={ele.CityName} onClick={handleClick} style={{width:"50%", border : "solid 1px black"}} className="btn btn-info mb-2">Remove</button>
            </div>
          )
      }):JSON.parse(localStorage.getItem("city")).length === 0 || null?<h1>No Favourites</h1>:<h1>Loading...</h1>}
    </div>
  )
}