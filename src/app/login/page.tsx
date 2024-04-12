"use client"; 
import react from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthSignIn } from "../../../libs/auth";

import Image from "next/image";
import Link from "next/link";
import Header from "../components/layouts/Header";
import toast, { Toaster } from "react-hot-toast";

// import Footer from '../components/Footer';

// homes_app\src\app\components\layouts\Header.js
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
 
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const handleSignIn = async (event: any) => {
    event.preventDefault();
    try {
      setIsLoggingIn(true);
      // Call StartSession function with phone and password
      await AuthSignIn(email, password);
      setIsLoggingIn(false);

      toast.success("Logged in successfully");
    } catch (error) {
      // Error posting Property
      console.error("Error posting Property:", error);
      toast.error("Credentials Is Incorrect, Please Try Again");
    }
  };

  useEffect(() => {
    if (!isLoggingIn) {
      const loggedIn =
        typeof window !== "undefined" && localStorage.getItem("loggedIn");
      if (loggedIn === "true") {
        router.push("/");
        router.refresh();
      }
    }
  }, [router, isLoggingIn]);

  return (
    
    <div className ="flex justify-center items-center h-screen">
      {/* <Header/> */}
    
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSignIn}>
  <div className="items-center">

    <h2 className="font-bold mb-2 items-center">Login Form</h2>

</div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" 
      placeholder="Enter your email address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" 
       value={password}
       onChange={(e) => setPassword(e.target.value)}
      placeholder="******************"/>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
      Login
      </button>
  <Link href="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
      Register
      </Link>
    
    </div>
  </form>
 </div> 
  );
}
