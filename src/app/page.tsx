"use client";

import Navbar from "@/components/Navbar";
import Testimonial from "./pages/testimonial/page";
import AboutMe from "./pages/aboutMe/page";
import Footer from "@/components/Footer";
import Logo from "../public/react-svgrepo-com (1).svg";
import Logo1 from "../public/nextjs-svgrepo-com.svg";
import Logo2 from "../public/express-svgrepo-com.svg";
import Logo3 from "../public/mysql-svgrepo-com.svg";
import Logo4 from "../public/light-prisma-svgrepo-com.svg";
import Image from "next/image";
import { useState } from "react";

// Define interface for logo
interface LogoData {
  id: number;
  imageUrl: string;
  title: string;
}

export default function Home() {
  const [selectedLogo, setSelectedLogo] = useState<number | null>(null); // Manage the clicked state

  const logos: LogoData[] = [
    {
      id: 1,
      imageUrl: Logo, // Directly use the imported image reference
      title: "React",
    },
    {
      id: 2,
      imageUrl: Logo1,
      title: "Next.js",
    },
    {
      id: 3,
      imageUrl: Logo2,
      title: "Express",
    },
    {
      id: 4,
      imageUrl: Logo3,
      title: "MySQL",
    },
    {
      id: 5,
      imageUrl: Logo4,
      title: "Prisma",
    },
  ];

  const handleClick = (id: number) => {
    setSelectedLogo(id); // Set the selected logo id when clicked
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="mb-20">
          <div className="grid grid-cols-2 h-52 justify-center items-center ">
            {/* Avatar */}
            <div className="avatar flex justify-end items-end mr-20">
              <div className="w-2/4 sm:w-1/3 md:w-44 rounded-full">
                <Image src="https://i.pinimg.com/736x/26/c9/73/26c973f54ad473a4f4dfb11f8930f14d.jpg" width={300} height={300} className="w-full h-auto rounded-full" alt="Avatar" />
              </div>
            </div>
            <div>
              {/* Title */}
              <div>
                <h1 className="text-3xl">Charles</h1>
              </div>
              {/* text 1 */}
              <div>
                <h4>Junior Web Developer</h4>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center items-start">
              <h4>Junior fullstack developer skilled in building scalable web applications</h4>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {logos.map((logo) => (
                <div
                  key={logo.id}
                  className={`flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    selectedLogo === logo.id
                      ? "bg-gray-800 text-white" // Dark background when selected
                      : "bg-transparent text-black hover:bg-white/40" // 40% white background on hover
                  }`}
                  onClick={() => handleClick(logo.id)}
                >
                  <Image src={logo.imageUrl} width={50} height={50} alt={logo.title} />
                  <h4>{logo.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <AboutMe />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}
