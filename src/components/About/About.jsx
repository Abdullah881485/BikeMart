import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="card card-side bg-base-100 shadow-sm my-20 w-8/10 mx-auto flex flex-col md:flex-row">
      <figure>
        <img
          src="https://i.ibb.co.com/39Ny7gXN/motorbike-is-being-driven-quickly-28914-32822.jpg"
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>

        <p className="max-w-2xl mx-auto text-gray-700 text-sm md:text-lg">
          BikeMart is your go-to online store for bikes and accessories. We
          provide high-quality products, fast delivery, and excellent customer
          support to ensure you get the best biking experience.
        </p>
      </div>
    </div>
  );
}
