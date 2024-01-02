import { useState } from "react";
import SubMenu from "../Components/SubMenu";
import "../Styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import up from "../assets/up.png";
import down from "../assets/down.png";
import search from "../assets/icons8-search-50.png";

interface LgNavBarProps {}

const LgNavBar: React.FC<LgNavBarProps> = ({}) => {
  const [showSubMenu, setShowSubMenu] = useState({
    about: false,
    explore: false,
    products: false,
  });



  const AboutData = [
    {
      heading: "HISTORY",
      items: ["Our Story", "Timeline"],
    },
    {
      heading: "IMPACT",
      items: ["Cadbury Foundation", "Cocoa Life", "Sustainability"],
    },
    {
      heading: "NEED TO KNOW",
      items: ["FAQs", "Product Information"],
    },
  ];

  const ExploreData = [
    {
      heading: "PROMOTIONS",
      items: ["Competitions"],
    },
    {
      heading: "ADVERTISING",
      items: ["Latest Campaigns"],
    },
    {
      heading: "PARTNERSHIPS",
      items: ["Cadbury World"],
    },
  ];

  const ourProductsData = [
    {
      heading: "Flavours",
      items: [
        "Milk Chocolate",
        "Dark Chocolate",
        "Caramilk Chocolate",
        "White Chocolate",
        "Caramel chocolate",
        "Orange Chocolate",
        "Mint Chocolate",
        "Fruit & Nut Chocolate",
        "Nutty Chocolate",
      ],
    },
    {
      heading: "DIETARY",
      items: [
        "Vegetarian Chocolate",
        "Under 100 Calories",
        "Vegan Chocolate",
        "Reduced Sugar Chocolate",
      ],
    },
    {
      heading: "PRODUCT TYPE",
      items: ["Chocolate", "Biscuits", "Hot Chocolate"],
    },
    {
      heading: "BRAND",
      items: [
        "View all brands",
        "Cadbury Dairy Milk",
        "Freddo",
        "Twirl",
        "Wispa",
        "Crunchie",
        "Fingers",
        "Heroes",
        "Roses",
        "Milk Tray",
        "Bournville",
        "Creme Egg",
      ],
    },
    {
      heading: "OCCASION",
      items: [
        "Birthday",
        "Christmas",
        "Easter",
        "Valentine's Day",
        "Mother's Day",
        "Father's Day",
      ],
    },
  ];

  const handleMouseEnter = (menu: any) => {
    document.getElementById("Nav")?.classList.add("bg-purple-900");

    setShowSubMenu({ ...showSubMenu, [menu]: true });
  };

  const handleMouseLeave = (menu: any) => {
    document.getElementById("Nav")?.classList.remove("bg-purple-900");

    setShowSubMenu({ ...showSubMenu, [menu]: false });
  };
  return (
    <div className=" text-white w-full  bg-purple-950  z-40  ">
      <div id="search" className=" flex z-40 ">
        <img src={search} className="h-4 mt-1 mr-2" alt="search" />
        <span className="inline-block ">Search</span>
      </div>
      <ul id="mainMenu" className="lgsubmenubg flex flex-col font-semibold px-10  py-8">
        <li
          className="flex  flex-col "
          onMouseEnter={() => {
            handleMouseEnter("about");
          }}
          onMouseLeave={() => handleMouseLeave("about")}
        >
           <div className="flex flex-row"><a href="" className="cursor-pointer">
            {" "}
            ABOUT{" "}
          </a>
          <i className="fa-solid fa-chevron-down ml-2" style={{color: "#ffffff"}}></i>
         </div>
          <SubMenu menus={AboutData}></SubMenu>
        </li>
        <li
          className="flex flex-col "
          onMouseEnter={() => handleMouseEnter("explore")}
          onMouseLeave={() => handleMouseLeave("explore")}
        >
          <div className="flex flex-row"><a href="" className="cursor-pointer">
            {" "}
            EXPLORE{" "}
          </a>
          <i className="fa-solid fa-chevron-down ml-2" style={{color: "#ffffff"}}></i>
          </div>
      <SubMenu menus={ExploreData}></SubMenu>
        </li>
        <li
          className="flex  flex-col "
          onMouseEnter={() => handleMouseEnter("products")}
          onMouseLeave={() => handleMouseLeave("products")}
        >
          <div className="flex flex-row"><a href="" className="cursor-pointer">
            {" "}
            OUR PRODUCTS{" "}
          </a>
          <i className="fa-solid fa-chevron-down ml-2" style={{color: "#ffffff"}}></i>
          </div>
          <SubMenu menus={ourProductsData}></SubMenu>
        </li>
        <li className="flex cursor-pointer">
          <a href="">RECIPIES</a>
        </li>
        <li className="flex cursor-pointer">
          <a href="">GIFTING</a>
        </li>
        <li className="flex cursor-pointer">
          <a href="">CADBURY FC</a>
        </li>
      </ul>
    </div>
  );
};

export default LgNavBar;
