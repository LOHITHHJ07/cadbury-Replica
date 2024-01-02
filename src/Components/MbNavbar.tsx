
import forward from "../assets/icons8-forward-52.png"
import search from "../assets/icons8-search-50.png";

interface ComponentProps {}

const MbNavBar: React.FC<ComponentProps> = ({}) => {
  return (
    <div className="mobilesubmenubg text-white w-full h-full absolute top-20 py-16  z-40 ">
      <div id="search" className=" flex z-40 ">
        <img src={search} className="h-4 mt-1 mr-2" alt="search" />
        <span className="inline-block ">Search</span>
      </div>
      <ul
        id="mainMenu"
        className="mobilesubmenubg flex flex-col font-semibold h-screen  gap-y-4 px-3 py-8 "
      >
        <li className="flex  flex-col ">
          <div className="flex justify-between flex-row">
            <a href="" className="cursor-pointer">
              {" "}
              ABOUT{" "}
            </a>
            <img src={forward} className="h-5 ml-1 " alt="up" />
          </div>
        </li>
        <li className="flex flex-col ">
          <div className="flex flex-row justify-between">
            <a href="" className="cursor-pointer">
              {" "}
              EXPLORE{" "}
            </a>
            <img src={forward} className="h-5 ml-1" alt="up" />
          </div>
        </li>
        <li className="flex  flex-col ">
          <div className="flex flex-row justify-between">
            <a href="" className="cursor-pointer">
              {" "}
              OUR PRODUCTS{" "}
            </a>
            <img src={forward} className="h-5 ml-1" alt="up" />
          </div>
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

export default MbNavBar;
