import "../Styles/Banner.css"
import Navbar from "./Navbar";
interface BannerProps {}

const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <div >
         
      <div className="bannerContainer flex flex-col  items-center lg:items-start text-center gap-y-4 lg:gap-y-2 lg:text-start  pt-16 lg:pt-36 lg:justify-start   lg:px-56 z-80  "> 
      <p className="topHeading  heading  text-l lg:text-2xl mb-2  font-semibold inline-block uppercase text-center z-30  ">new product</p>
      <p className="heading  text-4xl lg:text-7xl font-semibold px-16 lg:px-0 lg:w-7/12 z-30 ">FRUITIER & NUTTIER</p>
      <p className="description text-l  text-white px-4 lg:px-0 w-auto lg:w-96 mb-5 z-30 ">
      Our new range; a delicious mix of fruits, nuts and chocolate buttons, all dusted with cocoa powder for extra chocolatey goodness.
      </p >
      <button className="btn text-purple-800   text-l uppercase rounded-full font-semibold  w-auto lg:w-80 p-3 z-30 ">discover frutier & NUTTIER </button></div>     
      <span className="banner absolute inset-0  object-center top-[2px] lg:top-0 left-0 w-screen h-full ">
      </span>    
    </div>
  );
};

export default Banner;
