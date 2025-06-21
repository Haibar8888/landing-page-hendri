'use client'

import Image from "next/image";
import Button from "@/components/button";
import Card from "@/components/card";


const navigationItems = ["Service", "Agency", "Resource", "Contact"];

const navigationServices = [
  {
    title: "Analytics",
    icon: "/icons/icon-arrow-right-bottom.png",
  },
  {
    title: "Content Marketing",
    icon: "/icons/icon-arrow-right-bottom.png",
  },
  {
    title: "Social Media",
    icon: "/icons/icon-arrow-right-bottom.png",
  },
  {
    title: "Digital Marketing",
    icon: "/icons/icon-arrow-right-bottom.png",
  },
  {
    title: "Web Design",
    icon: "/icons/icon-arrow-right-bottom.png",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full min-h-screen flex flex-col lg:flex-row bg-black text-white overflow-x-hidden">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col px-6 sm:px-10 lg:px-[70px] py-10">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <Image
                src="/icons/Logomark.png"
                width={30}
                height={30}
                alt="Lumion Logo"
              />
              <p className="text-lg font-semibold">Lumion</p>
            </div>
            <ul className="hidden md:flex gap-6">
              {navigationItems.map((item) => (
                <li
                  key={item}
                  className="text-sm hover:text-white cursor-pointer flex items-center gap-1"
                >
                  {item}
                  <Image
                    src="/icons/chevron-down.png"
                    width={16}
                    height={16}
                    alt={`${item} Arrow`}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="border-b border-white/20 mb-12" />

          {/* Hero Content */}
          <div className="mt-10 max-w-xl">
            <p className="text-sm font-light tracking-wide mb-4">
              We Are Creative Digital Agency 🔥
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[78px] font-bold leading-tight mb-6">
              <span className="text-gray-300">Boost Your Digital</span> Strategy
              With Us!
            </h1>
            <p className="text-base font-medium leading-6 text-white mb-6 max-w-md">
              An award-winning SEO agency with disciplines in digital marketing,
              design, and website development. Focused on understanding you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#F5EC3A] text-black font-semibold px-8 py-3 w-full sm:w-[208px] hover:bg-[#e4d82f]">
                Schedule Call
              </button>
              <button className="bg-black text-white px-8 py-3 font-semibold w-full sm:w-[300px] underline underline-offset-4 hover:opacity-90">
                View Case Study
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto">
          <Image
            src="/images/hero-image.png"
            alt="Hero Image"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* COMPANY SECTION */}
      <section className="w-full bg-[#F9F9F9] py-12 px-4 sm:px-10 lg:px-20 flex flex-wrap justify-center gap-6">
        {[1, 2, 3, 4, 5].map((num) => (
          <Image
            key={num}
            src={`/icons/${num}.png`}
            alt={`Company Logo ${num}`}
            width={158}
            height={44}
            className="object-contain"
          />
        ))}
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="w-full px-4 sm:px-10 lg:px-[70px] py-20 overflow-x-hidden">
        <div className="flex flex-col lg:flex-row justify-center items-start mb-20 gap-10">
          <div className="max-w-md">
            <p className="text-xl font-medium mb-6">How we work</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug">
              Provide The Best <br /> Service With Out <br /> Of The Box Ideas
            </h2>
          </div>
          <div className="max-w-2xl text-lg font-medium leading-relaxed">
            <p className="capitalize text-[32px]">
              We are a passionate team of digital marketing enthusiasts
              dedicated to helping businesses succeed in the digital world. With
              years of experience
              <span className="text-gray-400">
                {" "}
                and a deep understanding of the ever-evolving online landscape,
                we stay at the forefront of industry trends and technologies.
              </span>
            </p>
          </div>
        </div>

        {/* Images Row */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          {/* Chart */}
          <div className="w-full lg:w-[481px] h-[300px] sm:h-[350px] lg:h-[418px] relative rounded-3xl overflow-hidden">
            <Image
              src="/images/chart-image.png"
              alt="Chart Image"
              fill
              className="object-cover"
            />
          </div>

          {/* Video */}
          <div className="w-full lg:w-[766px] h-[300px] sm:h-[350px] lg:h-[418px] relative rounded-3xl overflow-hidden">
            <Image
              src="/images/video-image.png"
              alt="Video Preview"
              fill
              className="object-cover"
            />
            <Image
              src="/icons/play-button.png"
              alt="Play Button"
              width={90}
              height={90}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-70 hover:opacity-100"
            />
          </div>
        </div>
      </section>

      {/* OUT TEAM SECTION */}
      <section className="w-full bg-[#FAFAFA] px-4 sm:px-10 lg:px-[70px] py-20 overflow-x-hidden flex flex-col items-center">
        <p className="capitalize text-[18px] sm:text-[20px] font-medium">
          our team
        </p>

        <p className="capitalize text-4xl sm:text-5xl lg:text-6xl font-semibold text-center">
          Engage with Our Creative Team
        </p>

        <p className="text-base sm:text-lg lg:text-xl text-[#667085] font-medium text-center mt-4 max-w-[800px]">
          We work to create the most attractive & meaningful place for <br />
          small businesses. Our Team always ready to help you.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center mt-10 w-full max-w-[880px]">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num, index) => {
            const extraClass = index === 5 ? "lg:col-start-2" : "";

            return (
              <div
                key={num}
                className={`flex flex-col items-center ${extraClass}`}
              >
                {/* Jika bukan index ke-3 (ingat index dimulai dari 0), tampilkan gambar */}
                {index !== 3 ? (
                  <Image
                    src={`/images/pro${num}.png`}
                    alt={`Team Member ${num}`}
                    width={132}
                    height={132}
                    className="object-cover rounded-full w-[88px] h-[88px] sm:w-[100px] sm:h-[100px] lg:w-[132px] lg:h-[132px]"
                  />
                ) : (
                  <Button text="View All" onClick={() => console.log('clicked')} className=""/>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Our device */}
      <section className="w-full px-2.5">
        <div className="w-full bg-black rounded-2xl px-[60px] py-[101px] relative">
          <p className="text-white">Our Services</p>
          {navigationServices.map((service, index) => {
            return (
              <div key={index}>
                <div className="flex lg:flex-row items-center justify-between mt-6 md:flex-col sm:flex-col xs:flex-col sm:text-center">
                  <p className="text-white text-3xl font-medium">
                    {String(index + 1).padStart(2, "0")}.
                  </p>
                  <p className="text-white font-medium text-[80px]">
                    {service.title}
                  </p>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>

                {/* Divider di bawah */}
                <div className="mt-8 mb-20">
                  <hr className="border-t border-gray-600 opacity-50" />
                </div>
              </div>
            );
          })}
          <Image
            src="/images/service2.png"
            alt="Arrow Icon"
            width={225}
            height={225}
            className="object-cover absolute top-200 left-30"
          />
          <Image
            src="/images/service1.png"
            alt="Arrow Icon"
            width={225}
            height={225}
            className="object-cover absolute top-150 right-45"
          />
          </div>
      </section>

      <section className="w-full bg-[#FAFAFA] px-4 sm:px-10 lg:px-[70px] py-20">
          <div className="flex flex-row justify-between">
            <div className="">
              <p className="font-medium text-2xl mb-6">our article</p>
              <p className="text-[64px] font-semibold capitalize leading-tight">Our Article shares <br /> marketing insights.</p>
            </div>
            <div className="flex flex-col justify-between">
              <p className="font-medium text-[16px] ">We are the top digital marketing agency for <br />  branding corp. We offer a full range of services to <br /> help clients improve their search engine rankings.</p>
              <Button text="View all insight" onClick={() => console.log('view all insight')} className=""/>
            </div>
          </div>
          <div className="flex flex-row justify-evenly mt-[80px]">
              <div className="">
                <Card className="" srcCard="/images/card-image1.jpg" srcProfile="/images/card-avatar.png" alt="" category="Business" userProfile="Galuh Haibar"/>
              </div>
              <div className="">
                <Card className="" srcCard="/images/card-image2.jpg" srcProfile="/images/card-avatar.png" alt="" category="Business" userProfile="Galuh Haibar"/>
              </div>
              <div className="">
                <Card className="" srcCard="/images/card-image3.jpg" srcProfile="/images/card-avatar.png" alt="" category="Business" userProfile="Galuh Haibar"/>
              </div>
          </div>
      </section>
    </>
  );
}
