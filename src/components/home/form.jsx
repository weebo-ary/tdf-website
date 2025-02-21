import { BiUserCircle } from "react-icons/bi";
import FormImg from "../../assets/form.jpg";
import Logo from "../../assets/logo/2.svg";
import { MdMail, MdPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { BsSpeedometer } from "react-icons/bs";
function Form() {
  const [selected, setSelected] = useState("");

  const options = ["Employed", "Student", "Freelancer", "Other"];

  return (
    <div className="p-4 bg-black">
      <section className="">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12 ">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 ">
            <img
              alt="FormImage"
              src={FormImg}
              className="absolute inset-0 h-full w-full object-cover opacity-80"
              title="FormImage"
            />

            <img
              alt="Logo FormImage"
              src={Logo}
              className=" absolute lg:bottom-26 sm:bottom-0 left-8 w-1/2 object-cover opacity-80"
              title="Logo FormImage"
            />
            <div className="hidden lg:relative lg:block lg:p-12">
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Unlock your Digital future with{" "}
                <span className="text-red-600">TheDigitalFlix</span>
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Start Your Journey with Us: Fill out the form and step into a
                world of Digital Marketing excellence
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl ">
              <form action="#" className="mt-8 grid grid-cols-6 gap-6 ">
                <div className="col-span-6">
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-white mb-4"
                  >
                    <span className="flex items-center gap-2">
                      {" "}
                      <BiUserCircle className="text-2xl animate-bounce" /> Start
                      your digital journey with TheDigitalFlix! Enter your name
                      to begin
                    </span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs p-3"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="Phone"
                    className="block text-sm font-medium text-white mb-4"
                  >
                    <span className="flex items-center gap-2">
                      {" "}
                      <MdPhone className="text-2xl animate-bounce" /> Your
                      digital marketing breakthrough awaits! Share your number
                      to stay in the loop
                    </span>
                  </label>

                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs p-3"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-white mb-4"
                  >
                    <span className="flex items-center gap-2">
                      {" "}
                      <MdMail className="text-2xl animate-bounce" /> Unlock
                      digital success! Share your email for expert tips and
                      updates
                    </span>
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs p-3"
                    placeholder="Enter your Email Address"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="Address"
                    className="block text-sm font-medium text-white"
                  >
                    <span className="flex items-center gap-2 mb-4">
                      {" "}
                      <FaLocationDot className="text-2xl animate-bounce" />{" "}
                      Where’s the magic going? Enter your address for updates
                    </span>
                  </label>

                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs p-3"
                    placeholder="Enter your Address"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="Address"
                    className="block text-sm font-medium text-white"
                  >
                    <span className="flex items-center gap-2 mb-4">
                      {" "}
                      <BsSpeedometer className="text-2xl animate-bounce" />{" "}
                      Working Status
                    </span>
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 text-black bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    value={selected}
                    onChange={(e) => setSelected(e.target.value)}
                  >
                    <option value="" disabled>
                      Choose an option
                    </option>
                    {options.map((option, index) => (
                      <option key={index} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4 flex">
                  <button className="inline-block shrink-0 rounded-md border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-red-600 focus:ring-3 focus:outline-hidden cursor-pointer">
                    Submit your query
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export default Form;
