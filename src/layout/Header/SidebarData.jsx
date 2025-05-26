import { FaCreditCard, FaFileContract, FaHome, FaLanguage, FaSignOutAlt, FaUser } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaLocationDot, FaPerson } from "react-icons/fa6";

export const SidebarData = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/category",
    name: "Category",
    icon: <BiCategory />,
  },
  {
    path: "/like",
    name: "Like",
    icon: <FaRegHeart />,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <FaUser />,
  },
    {
    path: "/personal-info",
    name: "Personal Information",
    icon: <FaPerson />,
  },
  {
    path: "/addresses",
    name: "Addresses",
    icon: <FaLocationDot />,
  },
    {
    path: "/payment-methods",
    name: "My payment methods",
    icon: <FaCreditCard />,
  },
    {
    path: "/terms",
    name: "Terms and conditions",
    icon: <FaFileContract />,
  },
    {
    path: "/language",
    name: "Language",
    icon: <FaLanguage />,
  },
    {
    path: "/logout",
    name: "Logout",
    icon: <FaSignOutAlt />,
  },
];

