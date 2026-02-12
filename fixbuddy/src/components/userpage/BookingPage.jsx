export function BookingPage(){
  return(
    <>
      <h1 className="flex justify-center text-orange-800 font-bold">BOOK YOUR SERVICE</h1>

    <div className="flex justify-center items-center">
    <form className="space-y-4 bg-white p-6 rounded-lg shadow-md w-96">

  <input
    type="text"
    placeholder="Full Name"
    className="w-full border p-2 rounded"
  />

  <input
    type="tel"
    placeholder="Phone Number"
    className="w-full border p-2 rounded"
  />

  <input
    type="date"
    className="w-full border p-2 rounded"
  />

  <textarea
    placeholder="Address"
    className="w-full border p-2 rounded"
  ></textarea>

  <button className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600">
    Book Service
  </button>

</form>
</div>

    </>
  )
}
