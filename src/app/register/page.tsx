"use client"
import Image from "next/image";
import dynamic from 'next/dynamic';
import Link from "next/link";
import { AuthSignUp } from "../../../libs/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

// import Footer from '../components/Footer';


export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSignUp = async (event: any) => {
    event.preventDefault();
    setIsLoggingIn(true);
    // Call StartSession function with phone and password
    await AuthSignUp(email, password, firstName, lastName);
    setIsLoggingIn(false);
    console.log("registered")
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
    <div className="flex justify-center items-center h-screen">
      <div className=" ">
        <form className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4" onSubmit={handleSignUp}
        >
          <div className="items-center">

            <h2 className="font-bold mb-2 items-center">Registration Form</h2>

          </div>


          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              FirstName
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="Firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              LastName
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastname" type="text"
              placeholder="Lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email" type="email" placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" type="password" placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="flex items-center justify-between">

            <Link href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</Link>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Register
            </button>


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
