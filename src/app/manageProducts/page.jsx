"use client";
import ListCard from "@/components/ListCard/ListCard";
import Loader from "@/components/Loader/Loader";
import useAuth from "@/Hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function page() {
  const [loading, setLoading] = useState(false);
  const [bikes, setBikes] = useState([]);
  const router = useRouter();
  const { user } = useAuth();
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBikes(data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="py-10">
      {" "}
      <h1 className="text-2xl text-center font-semibold my-5">
        {" "}
        Manage Bikes{" "}
      </h1>{" "}
      {user?.email ? (
        <div className="flex flex-col gap-5 w-8/10 mx-auto">
          {" "}
          {bikes.map((bike) => (
            <ListCard
              key={bike._id}
              bike={bike}
              bikes={bikes}
              setBikes={setBikes}
            ></ListCard>
          ))}{" "}
        </div>
      ) : (
        router.push("/login")
      )}{" "}
    </div>
  );
}
