// import { useState } from "react"
// import { Link } from "react-router-dom";

// function Signup(){

//     const [role, setRole] = useState("");

//     return(
//         <section className="min-h-screen from-amber-50 to-orange-100 flex items-center justify-center px-4">

//       <div className="bg-black w-full max-w-md p-8 rounded-2xl shadow-xl">

//         <h2 className="text-2xl font-bold text-center text-white mb-6">
//           Sign up
//         </h2>

//         <form className="space-y-4">

//           <input
//             type="text"
//             placeholder="Username"
//             required
//             className="w-full px-4 py-3  text-amber-50 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             required
//             className="w-full px-4 py-3 text-amber-50 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             required
//             className="w-full px-4 py-3  text-amber-50 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green -400 outline-none"
//           />

//           <button
//             type="submit"
//             className="w-full py-3 mt-4 rounded-xl bg-green-500 text-white font-semibold ">
//             Sign Up
//           </button>

//         </form>

//         <p className="text-sm text-center mt-6 text-amber-50">
//           Already have an account?{" "}
//           <Link to={"/signin"} className="text-blue-500 font-medium hover:underline">Login</Link>
//         </p>

//       </div>
//     </section>
//     )
// }

import { useState } from "react"
import { Link } from "react-router-dom";

export function Signup(){

    const [role, setRole] = useState("");

    return(
        <section className="min-h-screen from-amber-50 to-orange-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
          Sign up
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Username"
            required
            className="w-full px-4 py-3  text-orange-600 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 text-orange-600 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3  text-orange-600 rounded-xl border border-gray-300 focus:ring-2 focus:ring-green -400 outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-xl bg-orange-500 text-white font-semibold ">
            Sign Up
          </button>

        </form>

        <p className="text-sm text-center mt-6 text-amber-50">
          Already have an account?{" "}
          <Link to={"/signin"} className="text-orange-600 font-medium hover:underline">Login</Link>
        </p>

      </div>
    </section>
    )
}

