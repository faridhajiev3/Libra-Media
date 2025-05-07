import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";

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
];

