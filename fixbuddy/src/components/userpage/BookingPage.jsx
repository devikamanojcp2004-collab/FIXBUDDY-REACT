import { useState } from "react"
export function BookingPage(){
 
  const[name,setName]=useState("")
  const[phone,setPhone]=useState("")
  const[date,setDate]=useState("")
  const[address,setAddress]=useState("")

  const handleSubmit=async(e)=>{
     e.preventDefault()

     await fetch("http://localhost:5000/book",{
      method:"POST",
      headers:{
       "Content-Type":"application/json"
      },
      body:JSON.stringify({name,phone,date,address})
     })
     alert("booking saved")
  }

  return(
    <>
      <h1 className="flex justify-center text-orange-800 font-bold">BOOK YOUR SERVICE</h1>

    <div className="flex justify-center items-center">
    <form onSubmit={handleSubmit}  className="space-y-4 bg-white p-6 rounded-lg shadow-md w-96">

  <input
    type="text"
    placeholder="Full Name"
    className="w-full border p-2 rounded"
    onChange={(e) => setName(e.target.value)}

  />

  <input
    type="tel"
    placeholder="Phone Number"
    className="w-full border p-2 rounded"
    onChange={(e)=>setPhone(e.target.value)}
  />

  <input
    type="date"
    className="w-full border p-2 rounded"
    onChange={(e)=>setDate(e.target.value)}
  />

  <textarea
    placeholder="Address"
    className="w-full border p-2 rounded"
    onChange={(e)=>setAddress(e.target.value)}
  ></textarea>

  <button className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600">
    Book Service
  </button>

</form>
</div>

    </>
  )
}
