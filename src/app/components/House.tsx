"use client";
import React, { useEffect, useState } from "react";
import {Houses} from "@/components/interface/house";
import Image from "next/image";
import Link from "next/link";

// interface Property {
//   id: string;
//   PictureUrl: any;
//   title: string;
//   description: string;
// }
export default function House() {
  const [propertys, setProperty] = useState<Houses[]>([]);
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
      const propertys = data;
      
    setProperty(propertys);
    }
    catch (error) {
      console.log("error fetching the data", error)
    }
  }
    return (
      <div className="flex justify-center items-center h-screen">
      {propertys.map((property) => (
        <div
          key={property.id}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <Link href="#">
            <Image
              className="rounded-t-lg"
              src={property.pictureUrl[1]}
              alt={property.title}
              width={500}
              height={500}
            />
          </Link>

          <div className="p-5">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {property.title}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {property.description}
            </p>
            <p>{property.price}</p>
          </div>
        </div>
      ))}
      </div>
    );
  }