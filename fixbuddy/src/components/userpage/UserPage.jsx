import { Header } from "../../pages/Header"
import { Footer } from "../footer/Footer"
import USER from "../../assets/userImages/ELECTRICISN.png"
import { Link } from "react-router-dom"

const services=[
    {id:"1",heading:"Switch Repair",price:"Starts at 299",time:"Wil take about 30 mins"},
    {id:"2",heading:"Switch Board Repair",price:"Starts at 399",time:"Wil take about 45 mins"},
    {id:"3",heading:"MCB/Fuse Repair",price:"Starts at 699",time:"Wil take about 1hr 30 mins"},
    {id:"4",heading:"Tubelight Repair",price:"Starts at 599",time:"Wil take about 45 mins"},
    {id:"5",heading:"Fan installation",price:"Starts at 699",time:"Wil take about 1hr"},
    {id:"6",heading:"Inverter Installation",price:"Starts at 799",time:"Wil take about 2hr"},
    {id:"7",heading:"Regulator Repair",price:"Starts at 499",time:"Wil take about 30 mins"},
    {id:"8",heading:"TV Installation",price:"Starts at 999",time:"Wil take about 2hr"},
    {id:"9",heading:"CCTV Installation",price:"Starts at 1199",time:"Wil take about 2hr"},

]


export function UserPage(){
    return(
        <>
    <Header/>

         <div
  className="bg-cover bg-center h-screen"
  style={{ backgroundImage: `url(${USER})` }}
></div>
<div className="p-6">
    <h1  className="text-2xl font-bold mb-4 flex justify-center">SERVICES PROVIDED</h1>
<div className="grid grid-cols-3 gap-5">
        {services.map((service)=>(
             <div key={service.id} className="border p-4 mb-3 rounded shadow">
              <h3 className="text-orange-800 flex justify-center font-semibold">{service.heading}</h3>
              <p className="flex justify-center">{service.price}</p>
              <p className="flex justify-center">{service.time}</p>
            <Link to="/booking">
              <button className=" flex justify-center ml-20 mt-2 bg-orange-500 text-white px-4 py-2 rounded">Add Service</button>
              </Link>
          </div>
        )) }  
        </div>
</div>
<Footer/>
        </>
    )
}