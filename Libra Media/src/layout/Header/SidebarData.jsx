import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoPerson } from "react-icons/io5";

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
    path: "/profil",
    name: "Profile",
    icon: <IoPerson />,
  },
  {
    path: "/cart",
    name: "Cart",
    icon: <TiShoppingCart />,
  },
];
