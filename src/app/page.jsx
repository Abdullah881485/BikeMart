import AboutUs from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import WhyChooseUs from "@/components/choseUs/ChoseUs";
import Testimonials from "@/components/Reviews/Reviews";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <AboutUs></AboutUs>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
    </div>
  );
}
