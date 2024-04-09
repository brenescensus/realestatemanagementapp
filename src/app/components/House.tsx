"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";


const Property = () => {
  const [data, setProperty] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    // setIsLoading(true);

    const options = {
      method: "GET",
      url: "https://house-managment-backend.vercel.app/houses",
    };

    const response = await fetch(options.url, options);
    const data = await response.json();
    console.log(data);
    const property = data;
    setProperty(property);
  }
  return (    
    <div className="flex justify-center items-center h-screen">
      {data.map((property) => (
        <div
          key=""
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          
            
              <Link href="#" >
                <Image  
                  className="rounded-t-lg"
                  src=""
                  alt=""
                  width={500}
                  height={500}
                />
              </Link>
              
          <div className="p-5">
            <Link href="#">
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </p>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              ""
            </p>
            {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a> */}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Property;
