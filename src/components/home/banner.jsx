import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ImgBanner from "../../assets/banner.jpg";

function Banner() {
  const texts = [
    {
      title:
        "DIGITAL MARKETING COURSE IN BHOPAL | POWERED BY ARTIFICIAL INTELLIGENCE",
      description:
        "Welcome to The DigitalFlix Institute of Digital Marketing – where innovation meets education. Our AI-enabled digital marketing courses equip you with cutting-edge tools and strategies to excel in the digital world. Master in-demand skills like SEO, social media marketing, PPC, and AI-driven strategies to stay ahead in the industry.",
    },
    {
      title:
        "WEBSITE DEVELOPMENT | SEO | SOCIAL MEDIA | PPC | ARTIFICIAL INTELLIGENCE  ",
      description:
        "Our AI-powered courses are designed to equip you with cutting-edge skills in Website Development, Search Engine Optimization (SEO), Social Media Marketing, Pay-Per-Click (PPC) Advertising, and Artificial Intelligence applications in marketing. Gain hands-on experience with real-world projects and industry-recognized certifications.",
    },
    {
      title:
        "ONLINE/OFFLINE CLASSES | JOB OPPORTUNITIES & CERTIFICATIONS",
      description:
        "Whether you prefer online or offline classes, we offer flexible learning options tailored to your needs. Unlock exclusive scholarships, access to top job opportunities, and earn industry-recognized certifications to boost your career.",
    },
    {
      title: "COURSES FOR STUDENTS, PROFESSIONALS, ENTREPRENEURS & JOB SEEKERS",
      description:
        "No matter where you are in your career, TheDigitalFlix has the perfect course for you! Whether you’re a student looking to start early, a professional aiming to upskill, an entrepreneur ready to grow your business, or a job seeker searching for high-demand skills, our expert-led training will equip you for success.",
    },
    {
      title:
        "GET JOBS IN DIGITAL MARKETING | BECOME A FREELANCER | START YOUR OWN DIGITAL AGENCY",
      description:
        "TheDigitalFlix empowers you with in-demand digital marketing skills to land high-paying jobs, work independently as a freelancer, or build your own successful digital agency. Learn from industry experts, gain hands-on experience, and unlock endless career opportunities in the digital world.",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % texts.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? texts.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 7500);
    return () => clearInterval(interval);
  });

  return (
    <div className="p-4 bg-black overflow-x-hidden">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:grid-cols-1 lg:gap-8">
        <div className="flex flex-col">
        <h2 className="text-gray-300 mb-8 pl-1">Connect with us <span className="text-red-600 cursor-pointer">@thedigitalflix</span></h2>

          <div className="lg:h-60 sm:h-auto rounded-lg">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-start"
              >
                <h1 className="text-4xl font-bold font-sans text-white">{texts[index].title}</h1>
                <p className="text-lg mt-2 text-gray-300">{texts[index].description}</p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
          </div>
         <div className="flex items-center justify-start mt-10 gap-5">
           <button
            onClick={prevSlide}
            className="text-white"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            className="text-white"
          >
            <FaArrowRight />
          </button>
          </div>
          <button className="flex items-center justify-center mt-6 bg-red-600 w-1/4 p-2 text-white border-none rounded-lg">Enroll Now</button>
        </div>
        <div className="h-auto rounded-lg bg-gray-200">
          <img src={ImgBanner} alt="banner" title="banner" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
