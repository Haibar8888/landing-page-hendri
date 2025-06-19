import Image from "next/image";

const navigationItems = ["Service", "Agency", "Resource", "Contact"];

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
    </>
  );
}
