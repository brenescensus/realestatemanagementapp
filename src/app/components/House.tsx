"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Property {
  id: string;
  PictureUrl: any;
  title: string;
  description: string;
}
export default function House() {
  const [data, setProperty] =  useState<Property[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    //setIsLoading(true);
    try {
      const options = {
        method: "GET",
        url: "https://house-managment-backend.vercel.app/houses",
      };

      const response = await fetch(options.url, options);
      const data = await response.json();
      console.log(data);
      
    setProperty(data);
    }
    catch (error) {
      console.log("error fetching the data", error)
    }
  }
    return (
      <div className="flex justify-center items-center h-screen">
        {data.map((property) => (
          <div key={property.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">


            <a href="#" >
              <Image
                className="rounded-t-lg"
                src={property.PictureUrl}
                alt={property.title}
                width={500}
                height={500}
              />
            </a>


            <div className="p-5">
              <a href="#">
                <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </p>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                hello there
              </p>

            </div>
          </div>
        ))}
      </div>
    );
  }