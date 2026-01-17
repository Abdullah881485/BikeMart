import useAuth from "@/Hooks/useAuth";
import Link from "next/link";

export default function CTA() {
  const { user } = useAuth();
  return (
    <section className="py-20 bg-linear-to-r from-gray-900 to-gray-800 text-white">
      <div className="w-9/10 md:w-8/10 mx-auto px-4 text-center">
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Find Your Perfect Bike?
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Browse our latest collection, explore details, and manage bikes easily
          with BikeMart.
        </p>

        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="flex justify-center gap-4"
        >
          <Link
            href="/items"
            className="btn btn-sm md:btn-lg bg-white text-gray-900 font-semibold hover:bg-gray-200 transition"
          >
            View Bikes
          </Link>
          {!user?.email && (
            <Link
              href="/login"
              className="btn btn-sm md:btn-lg border-white rounded-sm hover:bg-white hover:text-gray-900 transition"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
