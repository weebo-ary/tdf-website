import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdOutlineWifiCalling3 } from "react-icons/md";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";

function header() {
  return (
    <div>
            <div className="hidden md:block lg:flex lg:items-center lg:justify-center bg-gray-800 h-10">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-lg">
                  <li>
                    <a
                      className="text-white transition  flex items-center gap-1"
                    >
                      {" "}
                      <span className="text-xs pb-0.5">Connect with us @</span>
                    </a>
                  </li>
                 
                  <li>
                    <a
                      className="text-white transition hover:text-green-600/75 flex gap-1"
                      href="#"
                    >
                      {" "}
                      <span className="text-xs"> Whatsapp: </span><RiWhatsappFill />{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-pink-600/75 flex gap-1"
                      href="#"
                    >
                      {" "}
                      <span className="text-xs">Instagram: </span><RiInstagramFill />{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-blue-600/75 flex gap-1"
                      href="#"
                    >
                      {" "}
                      <span className="text-xs">Facebook: </span><FaFacebook />{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-blue-400/75 flex gap-1"
                      href="#"
                    >
                      {" "}
                      <span className="text-xs">Linkedin: </span><FaLinkedin />{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition hover:text-red-600/75 flex gap-1"
                      href="#"
                    >
                      {" "}
                      <span className="text-xs">X (Twitter): </span><FaXTwitter />{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition hover:text-red-600/75 flex items-center gap-1"
                    >
                      {" "}
                      |
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition hover:text-red-600/75 flex gap-1"
                      href="#"
                    >
                      <span className="text-xs"> Call Us: </span><MdOutlineWifiCalling3 />
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition hover:text-red-600/75 flex gap-1"
                      href="#"
                    >
                      {" "}
                      <span className="text-xs">Mail Us: </span><MdEmail />{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition hover:text-red-600/75 flex gap-1"
                      href="#"
                    >
                      {" "}
                      <span className="text-xs">Our Location: </span><FaLocationDot />{" "} 
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
    </div>
  );
}

export default header;
