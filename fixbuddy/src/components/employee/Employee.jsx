import Employer from "../../assets/userImages/employer.png";
import { useEffect, useState } from "react"
import { Header } from "../../pages/Header";
import { Footer } from "../footer/Footer";


export function Employee() {

  const [bookings, setBookings] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then(res => res.json())
      .then(data => setBookings(data))
  }, [])

  return (
    <>
      <Header/>
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${Employer})` }}
      
      >
        </div>
        
        <div className="bg-white p-6 rounded shadow w-600px max-h-[80vh] overflow-y-auto">
          <h1 className="text-2xl font-bold text-orange-700 mb-4 text-center">
            Employee Bookings
          </h1>

          {bookings.length === 0 ? (
            <p className="text-center">No bookings yet</p>
          ) : (
            bookings.map((booking) => (
              <div
                key={booking._id}
                className="border p-3 mb-3 rounded"
              >
                <p><b>Name:</b> {booking.name}</p>
                <p><b>Phone:</b> {booking.phone}</p>
                <p><b>Date:</b> {booking.date}</p>
                <p><b>Address:</b> {booking.address}</p>
              </div>
            ))
          )}
        </div>
        <Footer/>
    </>
  )
}
