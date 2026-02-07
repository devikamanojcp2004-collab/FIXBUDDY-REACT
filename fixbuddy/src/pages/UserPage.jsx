import switchImg from  "../assets/userImages/socket.webp";

export function UserPage(){
    return(
        <>
        <div className="bg-[url('trial2.jpg')] h-screen bg-cover bg-no-repeat">

        <p>Home Services At Your Doorstep!</p>
        <div>
            <p>Services</p>
            <div>
                <img src={switchImg} alt=""/>
                

            </div>
        </div>
        </div>
        </>
    )
}