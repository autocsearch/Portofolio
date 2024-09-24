import Navbar from "@/components/Navbar";
import Testimonial from "./pages/testimonial/page";
import AboutMe from "./pages/aboutMe/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" ">
        {/* Avatar */}
        <div className="avatar flex justify-center items-center my-3">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        {/* Description */}
        <div>
          <div className="flex justify-center items-center">
            <h1>Junior Fullstack Developer</h1>
          </div>
          <div className="flex justify-center items-center card card-body">
            <div className="flex justify-center items-start card card-body">
              <p>● Technologies: Next.js, MySQL, Prisma (Database), Express (Server)</p>
              <p>● Building dynamic and responsive user interfaces with Next.js while ensuring seamless communication between front and back end through Express.</p>
              <p>● Developing fullstack web applications with a focus on scalable server-side logic and efficient database management using Prisma and MySQL.</p>
            </div>
          </div>
        </div>
        {/* Title */}

        {/* Card */}
        <AboutMe />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}
