"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Loader from "@/components/Loader/Loader";

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.productId;

  const [bike, setBike] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setBike(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading || !bike) {
    return <Loader></Loader>;
  }

  return (
    <div className="w-10/12 mx-auto rounded-md shadow-lg my-20 p-4">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <img
            className="rounded-md w-full"
            src={bike.image}
            alt={bike.title}
          />
        </div>

        <div className="flex flex-col gap-3 flex-1 ">
          <h1 className="text-2xl font-bold text-blue-600">{bike.title}</h1>

          <p className="text-gray-700">{bike.short_description}</p>

          <p className="text-gray-500">
            <span className="font-semibold text-blue-500">Details:</span>{" "}
            {bike.long_description}
          </p>

          <div className="flex items-center justify-between mt-4">
            <p className="text-blue-600 font-semibold">
              <span className="font-bold">Price:</span> ${bike.price}
            </p>

            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => router.back()}
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
