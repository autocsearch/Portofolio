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

export default function Home() {
  const logos = [
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

  return (
    <>
      <Navbar />
      <div>
        <div className="mb-20">
          <div className="grid grid-cols-2 h-52 justify-center items-center ">
            {/* Avatar */}
            <div className="avatar flex justify-end items-end mr-20">
              <div className="w-2/4 sm:w-1/3 md:w-44 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className="w-full h-auto rounded-full " alt="Avatar" />
              </div>
            </div>
            <div className="">
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
                <div key={logo.id} className="flex flex-col items-center">
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

// {/* Avatar */}
// <div className="avatar flex justify-center items-center">
// <div className="w-44 rounded-full">
//   <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
// </div>
// </div>
// {/* Description */}
// <div>
// <div className=" justify-center items-center gap-3 my-60">
//   <h1 className="text-2xl">Junior Fullstack Developer</h1>
//   <h1 className="text-2xl">Charles</h1>
// </div>
// </div>
