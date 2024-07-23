import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubMenu from "../Components/SubMenu";
import LgNavBar from "./LgNavBar";
import MbNavBar from "./MbNavbar";
import "../Styles/Navbar.css";
import menu from "../assets/icons8-hamburger-menu-48.png";
import logo from "../assets/Cadbury_GlobalNavigation_BrandLogo_Desktop.svg";
import up from "../assets/up.png";
import down from "../assets/down.png";
import search from "../assets/icons8-search-50.png";
import close from "../assets/icons8-close-50.png";

interface NavbarProps {}

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

const Navbar: React.FC<NavbarProps> = ({}) => {
  const [showSubMenu, setShowSubMenu] = useState({
    about: false,
    explore: false,
    products: false,
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  isOpen&&document.getElementById("hamburger")?.classList.add("bg-purple-950");
  !isOpen&&document.getElementById("hamburger")?.classList.remove("bg-purple-950");

  const islarge = window.innerWidth <= 1024;
  const isMedium= window.innerWidth <= 850;

  const handleMouseEnter = (menu: any) => {
    document.getElementById("Nav")?.classList.add("bg-nav");

    setShowSubMenu({ ...showSubMenu, [menu]: true });
  };

  const handleMouseLeave = (menu: any) => {
    document.getElementById("Nav")?.classList.remove("bg-nav");

    setShowSubMenu({ ...showSubMenu, [menu]: false });
  };
  return (
    <div
     
      className="navBar flex items-center bg-purple-900  flex-col justify-center  "
    >
      <div
        id="main-nav"
        className="font-semibold flex flex-row w-full justify-center  "
      >
        {islarge ? (
          <div id="hamburger" className="flex flex-row items-center w-full justify-between py-4 px-4 z-40 ">
            <img src={logo} className="h-12 " alt="cadbury" />
            <img
              src={isOpen ? close : menu}
              onClick={toggleMenu}
              className=" h-8 lg:h-10  "
              alt="cadbury"
            />
          </div>
        ) : (
          <div id="Nav" className=" text-l flex flex-row items-center  px-36 gap-x-16  py-6 w-full text-white z-40  ">
            <div className="z-40 h-full flex justfy-center items-center max-w-[267px] tb:max-w-[271px] ">
              <img src={logo} className="h-10 lg:h-20 " alt="cadbury" />
            </div>
            <ul id="mainMenu" className="flex flex-row  font-semibold gap-x-8 ">
              <li
                className="flex  "
                onMouseEnter={() => {
                  handleMouseEnter("about");
                  
                }}
                onMouseLeave={() => handleMouseLeave("about")}
              >
                <a href="" className="cursor-pointer ">
                  ABOUT  
                  {showSubMenu.about?<i className="fa-solid fa-chevron-up ml-2" style={{color:"#d8a246"}}>
                  </i>:
                  <i className="fa-solid fa-chevron-down ml-2" style={{color: "white"}}></i>}
                </a>
                <SubMenu menus={AboutData}></SubMenu>
              </li>
              <li
                className="flex "
                onMouseEnter={() => handleMouseEnter("explore")}
                onMouseLeave={() => handleMouseLeave("explore")}
              >
                <a href="" className="cursor-pointer">
                  {" "}
                  EXPLORE
                  {showSubMenu.explore?<i className="fa-solid fa-chevron-up ml-2" style={{color:"#d8a246"}}>
                  </i>:
                  <i className="fa-solid fa-chevron-down ml-2" style={{color: "white"}}></i>}
                </a>
                 
                <SubMenu menus={ExploreData}></SubMenu>
              </li>
              <li
                className="flex cursor-pointer"
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={() => handleMouseLeave("products")}
              >
                <a href="" className="cursor-pointer">
                  {" "}
                  OUR PRODUCTS
                  {showSubMenu.products?<i className="fa-solid fa-chevron-up ml-2" style={{color:"#d8a246"}}>
                  </i>:
                  <i className="fa-solid fa-chevron-down ml-2" style={{color: "white"}}></i>}
                </a>
                
                <SubMenu menus={ourProductsData}></SubMenu>
              </li>
              <li className="flex cursor-pointer">
                <a href="">RECIPES</a>
              </li>
              <li className="flex cursor-pointer">
                <a href="">GIFTING</a>
              </li>
              <li className="flex cursor-pointer">
                <a href="">CADBURY FC</a>
              </li>
            </ul>
            <div id="search" className=" flex z-40 mb-4 ml-4 ">
              <img src={search} className="h-4 mt-1 mr-2" alt="search" />
              <span className="inline-block font-mono font-thin  text-gray-300">Search</span>
            </div>
          </div>
        )}
      </div>
      {isOpen && (isMedium? <MbNavBar></MbNavBar>: <LgNavBar></LgNavBar>)}
    </div>
  );
};

export default Navbar;
