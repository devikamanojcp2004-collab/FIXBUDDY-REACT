// import { Link } from "react-router-dom";

// function Signin() {
//   return (
//     <section className="min-h-screen from-amber-50 to-amber-100 flex items-center justify-center px-4">
//       <div className="bg-black w-full max-w-sm p-8 rounded-2xl shadow-xl">
//         <h2 className="text-2xl font-bold text-center text-amber-50 mb-6">
//           Sign in
//         </h2>
//         <form className="flex flex-col gap-4">
//           <input
//             type="email"
//             placeholder="Email"
//             required
//             className="w-full px-4 py-3 rounded-xl border text-amber-50 border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             required
//             className="w-full px-4 py-3 rounded-xl border text-amber-50 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
//           />
//           <button
//             type="submit"
//             className="w-full py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-300"
//           >
//             Log In
//           </button>
//         </form>
//         <div className="text-center mt-4">
//           <a onClick={()=>{alert("Coming soon...")}} href="#" className="text-sm text-blue-500 hover:underline">
//             Forgot password?
//           </a>
//         </div>
//         <p className="text-sm text-center mt-6 text-amber-50">
//           Don't have an account?{" "}
//           <Link
//             to={"/Signup"}
//             className="text-blue-500 font-medium hover:underline"
//           >
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </section>
//   );
// }

// export default Signin;




import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

 export function Signin() {
  const navigate = useNavigate();

  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Submit function
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      // If backend sends token
      localStorage.setItem("token", res.data.token);

      alert("Login successful");

      // Redirect to home/dashboard
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-sm p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
          Sign in
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border text-orange-600 border-gray-300 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border text-orange-600 border-gray-300 outline-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-orange-500 text-orange-700 font-semibold hover:bg-orange-600"
          >
            Log In
          </button>
        </form>

        <div className="text-center mt-4">
          <a
            onClick={() => alert("Coming soon...")}
            href="#"
            className="text-sm  hover:underline"
          >
            Forgot password?
          </a>
        </div>

        <p className="text-sm text-orange-600 text-center mt-6 text-amber-50">
          Don't have an account?{" "}
          <Link
            to={"/Signup"}
            className="text-orange-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
 }