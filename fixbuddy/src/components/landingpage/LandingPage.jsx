import HomeImg1 from "../../assets/userImages/trial2.jpg"
import Switch from "../../assets/userImages/socket.webp"
import Light from "../../assets/userImages/lamp.jpeg"
import Fan from "../../assets/userImages/fan.webp"
import Fuse from "../../assets/userImages/fuse.webp"
import Doorbell from "../../assets/userImages/doorbell.webp"
import Appliance from "../../assets/userImages/appliance.webp"
import { Link } from "react-router-dom"
import { Header } from "../../pages/Header"
import { Footer } from "../footer/Footer"

 
 



export function LandingPage() {
  return (
    <>
    <Header/>
      <div className="flex justify-between  gap-4">


        <div className="w-1/2 pt-8 ">
          <p className="font-bold text-4xl pb-10 h-25 text-orange-900">Home Services At Your Doorstep!</p>
          <div>
            <p className=" flex justify-center font-bold text-orange-900 mb-4">Services</p>
            <div className="grid grid-cols-3 gap-4">
              <button className="text-orange-800"><img className="pl-10"src={Switch} alt="" />Switch</button>
             <button className="text-orange-800 "> <img className="pl-10" src={Light} alt="" />Light</button>
              <button className="text-orange-800 "> <img className="pl-10" src={Fan} alt="" />Fan</button>
              <button className="text-orange-800 "> <img className="pl-10" src={Fuse} alt="" />Fuse</button>
              <button className="text-orange-800 "> <img className="pl-10" src={Doorbell} alt="" />Doorbell</button>
              <button className=" text-orange-800"> <img className="pl-10" src={Appliance} alt="" />Appliance</button>

            </div>
          </div>
        </div>

<div className="w-1/2">
    <img src={HomeImg1}  alt="" />
</div>

      </div>


      <div className="bg-white h-full w-full ">
    <h1 className="text-orange-600 pt-15 font-extrabold text-5xl flex justify-center text-center" >SAFETY, QUALITY AND <br/>
      CUSTOMER SATISFICATION IS FIRST</h1>
    <p className="text-orange-600 pt-10 text-1xl  flex justify-center text-center">Our platform helps customers find verified and experienced<br/>
electricians & a reliable electrical service provider connecting<br/>
skilled electricians with customers who need safe, fast, and<br/> 
professional electrical solutions</p>
<div className="flex gap-30 pt-10 pb-15 justify-center ">
   <div className=" text-black py-20 px-20 bg-orange-400 rounded-2xl text-2xl">
      <Link to={"/signin"}><button>Are you searching<br/> an electricians</button></Link>
   </div>
   <div className="text-black  py-20 px-20 bg-orange-400 rounded-2xl text-2xl ">
       <Link to="/signin">
            <button>
              Are you searching <br/>a job
            </button>
          </Link> 
   </div>
</div>

 </div>
 <Footer/>
    </>
  );
}
