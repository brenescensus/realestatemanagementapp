import react from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/layouts/Header";
// import Footer from '../components/Footer';

// homes_app\src\app\components\layouts\Header.js
export default function Login() {
  return (
    
    <div className ="flex justify-center items-center h-screen">
      {/* <Header/> */}
    <div className=" ">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="items-center">

    <h2 className="font-bold mb-2 items-center">Login Form</h2>

</div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
      <Link href ="/login">Login</Link> 
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
      <Link href ="/register">Register</Link> 
      </button>
      {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Register
      </a> */}
    </div>
  </form>
  {/* <div>
  
    <p className="text-center text-gray-500 text-xs">
  © {new Date().getFullYear()} BCM Technologies. All Rights
              
  </p>
  </div> */}
  </div>
</div>
   
  );
}
