import Link from "next/link";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner w-full">
      <div className="md:w-3/4 text-center md:text-left space-y-6">
        <h1 className="text-2xl md:text-5xl font-bold text-light">
          Discover Your Perfect Ride
        </h1>
        <p className="text-[16px] w-full md:w-3xl md:text-xl text-gray-100">
          Explore our wide selection of bikes, from mountain bikes to road
          bikes, and find the one that matches your style and adventure.
        </p>
        <div className="space-x-4">
          <Link
            href="/products"
            className="btn btn-sm md:btn-lg bg-[#1D4ED8] hover:bg-[#5175d8] border-0 text-white"
          >
            Shop Bikes
          </Link>
          <Link
            href="/contact"
            className="btn btn-sm md:btn-lg bg-transparent border border-white text-white hover:bg-white hover:text-blue-900"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
