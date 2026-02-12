import HomeImg1 from "../../assets/userImages/trial2.jpg"
import Switch from "../../assets/userImages/socket.webp"
import Light from "../../assets/userImages/lamp.jpeg"
import Fan from "../../assets/userImages/fan.webp"
import Fuse from "../../assets/userImages/fuse.webp"
import Doorbell from "../../assets/userImages/doorbell.webp"
import Appliance from "../../assets/userImages/appliance.webp"



export function LandingPage() {
  return (
    <>
      <div className="flex justify-between ">


        <div className="w-1/2 pt-45 ">
          <p className="font-bold text-5xl pb-20">Home Services At Your Doorstep!</p>
          <div>
            <p>Services</p>
            <div className="grid grid-cols-3 gap-4">
              <button className=""  ><img className="pl-10"src={Switch} alt="" />Switch</button>
             <button className=" "> <img className="pl-10" src={Light} alt="" />Light</button>
              <img src={Fan} alt="" />
              <img src={Fuse} alt="" />
              <img src={Doorbell} alt="" />
              <img src={Appliance} alt="" />

            </div>
          </div>
        </div>

<div>
    <img src={HomeImg1}  alt="" />
</div>

      </div>
    </>
  );
}
