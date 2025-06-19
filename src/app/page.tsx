import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-full h-[1000px] flex bg-black text-white py-2.5">
        {/* Left hero */}
        <div className="w-1/2 flex flex-col">
          {/* Header left */}
          <div className="flex flex-row items-center justify-between mx-[70px] my-[40px]">
            <div className="flex flex-row items-center gap-2">
              <Image
                src="/icons/Logomark.png"
                width={30}
                height={30}
                alt="Lumion Logo"
              />
              <p className="text-white font-semibold text-[20px]">Lumion</p>
            </div>
            <div className="">
              <ul className="flex flex-row gap-8">
                <li className="text-[#FFFFFF]-500 text-[14px] hover:text-white cursor-pointer flex flex-row items-center gap-1">
                  Service
                  <Image
                    src="/icons/chevron-down.png"
                    width={20}
                    height={20}
                    alt="Arrow"
                  />
                </li>
                <li className="text-[#FFFFFF]-500 text-[14px] hover:text-white cursor-pointer flex flex-row items-center gap-1">
                  Agency
                  <Image
                    src="/icons/chevron-down.png"
                    width={20}
                    height={20}
                    alt="Arrow"
                  />
                </li>
                <li className="text-[#FFFFFF]-500 text-[14px] hover:text-white cursor-pointer flex flex-row items-center gap-1">
                  Resource
                  <Image
                    src="/icons/chevron-down.png"
                    width={20}
                    height={20}
                    alt="Arrow"
                  />
                </li>
                <li className="text-[#FFFFFF]-500 text-[14px] hover:text-white cursor-pointer flex flex-row items-center gap-1">
                  Contact
                  <Image
                    src="/icons/chevron-down.png"
                    width={20}
                    height={20}
                    alt="Arrow"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="border-b border-white/20 mx-[70px]"></div>
          {/* Content hero left */}
          <div className="mt-[98px] w-[596px] h-[509px] ml-[120px]">
            <p className="text-[14px] font-normal tracking-wider">
              We Are creative digital Agency 🔥
            </p>
            <div className="text-[78px] leading-tight font-bold">
              <span className="text-gray-300">Boost Your Digital</span> strategy
              With Us!
            </div>
            <p className="w-[429px] text-[16px] font-medium text-[#FFFFFF] leading-[24px] mb-[40px]">
              An award-winning SEO agency with disciplines in digital marketing,
              design, and website development. focused on understanding you.
            </p>
            {/* button cta */}
            <div className="flex flex-row gap-4">
              <button className="bg-[#F5EC3A] text-black font-semibold w-[208px] hover:bg-[#e4d82f] px-12 py-3">
                Schedule Call
              </button>
              <button className="bg-black text-white px-12 py-3 font-semibold w-[300px] flex flex-row items-center underline underline-offset-4">
                View Case Study
              </button>
            </div>
          </div>
        </div>

        {/* Right hero */}
        <div className="w-1/2 relative ml-2.5 rounded-md overflow-hidden">
          <Image
            src="/images/hero-image.png"
            alt="Hero"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="w-full bg-[#F9F9F9] h-[140px] px-20 py-12 flex flex-row items-center justify-between">
        <Image
          src="/icons/1.png"
          alt="Hero"
          className="object-cover"
          width={158}
          height={44}
        />
        <Image
          src="/icons/2.png"
          alt="Hero"
          className="object-cover"
          width={158}
          height={44}
        />
        <Image
          src="/icons/3.png"
          alt="Hero"
          className="object-cover"
          width={158}
          height={44}
        />
        <Image
          src="/icons/4.png"
          alt="Hero"
          className="object-cover"
          width={158}
          height={44}
        />
        <Image
          src="/icons/5.png"
          alt="Hero"
          className="object-cover"
          width={158}
          height={44}
        />
      </section>
    </>
  );
}
