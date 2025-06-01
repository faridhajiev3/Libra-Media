import { FaHome } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoPerson } from "react-icons/io5"; 

export const SidebarData = [
  {
    path: "/",
    nameKey: "home",
    icon: <FaHome />,
  },
  {
    path: "/category",
    nameKey: "category",
    icon: <BiCategory />,
  },
  {
    path: "/like",
    nameKey: "like",
    icon: <FaRegHeart />,
  },
  {
    path: "/profil",
    nameKey: "profile",
    icon: <IoPerson />,
  },
  {
    path: "/cart",
    nameKey: "cart",
    icon: <TiShoppingCart />,
  },
];