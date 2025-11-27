"use client";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
          <div className=" p-6 rounded-lg ">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="button"
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center bg-linear-to-br from-white to-gray-50 p-8 rounded-xl space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <p className="text-gray-500 font-medium">
                  Email: support@bikeMart.com
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-gray-500 font-medium">
                  Phone: +880 1234 567 890
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-gray-500 font-medium">
                  Address: 123 Main Street, Chittagong, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 mt-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-black hover:text-blue-600 transition transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaXTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-blue-800 hover:text-blue-900 transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
