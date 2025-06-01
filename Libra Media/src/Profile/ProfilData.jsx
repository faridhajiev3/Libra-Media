import { FaHome } from "react-icons/fa";

import flowerDress from "../../src/assets/flower_dress.png"
import menJacket from "../../src/assets/men_jacket.png";
import womanFlowerDress from "../../src/assets/woman_flower_dress.png";

export const ProfilData = [
  {
    path: "myorder",
    name: "My Order",
    icon: <FaHome />,
  },
  {
    path: "myreturn",
    name: "My returns",
    icon: <FaHome />,
  },
  {
    path: "information",
    name: "Personal information",
    icon: <FaHome />,
  },
  {
    path: "address",
    name: "Addresses",
    icon: <FaHome />,
  },
  {
    path: "language",
    name: "Select language",
    icon: <FaHome />,
  },
];


export const dataOrders = [
  {
    id: 1,
    date: "13 December 2024",
    price: 122,
    status: "Completed",
    checkState: "Completed",
    images: [flowerDress, womanFlowerDress, menJacket],
  },
  {
    id: 2,
    date: "14 December 2024",
    price: 98,
    status: "Completed",
    checkState: "Completed",
    images: [flowerDress, menJacket],
  },
  {
    id: 3,
    date: "15 December 2024",
    price: 55,
    status: "Completed",
    checkState: "Completed",
    images: [flowerDress],
  },
  {
    id: 4,
    date: "16 December 2024",
    price: 80,
    status: "Returned",
    images: [menJacket],
  },
];
