import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../Styles/NewCreation.css"
import cbCoins from "../assets/cadbury_coins.png";
import cbDelight from "../assets/cadbury_delights.png";
import cbButtons from "../assets/cadbury-buttons.png";
import cbSalted from "../assets/cadbury-milkSalted.png";
import cbfruitnut from "../assets/cadbury-fruit&nut.png";
import cbOrange from "../assets/cadbury-orange.png";
import cbDelightSalt from "../assets/cadbury-saltedCarmel.png";
import cbChirstmas from "../assets/cadbury-christmas.png";
import cbMoney from "../assets/cadbury-money.png";
import cbButtonselection from "../assets/cadbruy-selection.png";
import cbdelightOrange from "../assets/cadbury-delightOrange.png";

interface NewCreationProps {}

const Chocolates = [
  {
    name: "CADBURY DAIRY MILK CHOCOLATE CHRISTMAS COINS NET 70G",
    tag: "Cadbury dairy milk",
    img: cbCoins,
  },
  {
    name: "CADBURY DELIGHTS HAZELNUT & CARAMEL 91 CALORIE CHOCOLATE NOUGAT BAR 5 PACK MULTIPACK 110G",
    tag: "Cadbury",
    img: cbDelight,
  },
  {
    name: "CADBURY DAIRY MILK TWISTED MILK & WHITE CHOCOLATE BUTTONS BAG, 105G",
    tag: "Cadbury dairy milk",
    img: cbButtons,
  },
  {
    name: "CADBURY DAIRY MILK SALTED CARAMEL CHOCOLATE BAR, 120G",
    tag: "Cadbury dairy milk",
    img: cbSalted,
  },
  {
    name: "CADBURY DAIRY MILK FRUITIER & NUTTIER TRAIL MIX, 100G",
    tag: "Cadbury dairy milk",
    img: cbfruitnut,
  },
  {
    name: "CADBURY DAIRY MILK FRUITIER & NUTTIER ORANGE TRAIL MIX, 100G",
    tag: "Cadbury dairy milk",
    img: cbOrange,
  },
  {
    name: "CADBURY DELIGHTS SALTED CARAMEL 91 CALORIE CHOCOLATE NOUGAT BAR 5 PACK MULTIPACK, 110G",
    tag: "Cadbury",
    img: cbDelightSalt,
  },
  {
    name: "CADBURY CHOCOLATE CHRISTMAS MEDIUM SELECTION BOX 145G",
    tag: "Cadbury",
    img: cbChirstmas,
  },
  {
    name: "CADBURY DAIRY MILK CHOCOLATE CHRISTMAS COINS MONEY TIN 230G",
    tag: "Cadbury dairy milk",
    img: cbMoney,
  },
  {
    name: "CADBURY CHOCOLATE BUTTONS SELECTION BOX 375G",
    tag: "Cadbury",
    img: cbButtonselection,
  },
  {
    name: "CADBURY DELIGHTS ORANGE & CARAMEL 91 CALORIE CHOCOLATE NOUGAT BAR 5 PACK MULTIPACK, 110G",
    tag: "Cadbury",
    img: cbdelightOrange,
  },
];

const NewCreation: React.FC<NewCreationProps> = ({}) => {

  return (
    <div className="flex flex-col   py-6 lg:py-16 justify-center items-center ">
      <h1 className="newcreation text-center text-5xl lg:text-6xl">NEW CREATIONS</h1>
      <p className="description  text-center  text-sm description px-10 ">
        Our chocolate makers are always inventing new ways to enjoy Cadbury
        chocolate. Take a look at our latest products here!
      </p>

      <div className=" slidesContiner flex flex-row items-center justify-center py-12  ">
      <Swiper
      // install Swiper modules
      slidesPerView={5}
      
      initialSlide={1}
      centeredSlides={true}
      pagination={{
        clickable: true
      }}
      breakpoints={{
        0: {
            slidesPerView: 1,
            spaceBetween:10,
          },
          400:{
            slidesPerView:2,
            spaceBetween:10,
          },
  
        639: {
            spaceBetween:20,
          slidesPerView: 2,
          initialSlide:1,
        },
        865:{
            spaceBetween:20,
            slidesPerView:1,
            initialSlide:1
        },
        1000:{
            spaceBetween:10,
            slidesPerView:4
        },
        1500:{
            spaceBetween:10,
            slidesPerView:5
        },
     
      }}
    
    >
      {Chocolates.map((chocolate, index) => (
         <SwiperSlide>
            <div className="card  h-96 w-80 lg:w-72 rounded-xl   ">
                 <p className='tag  text-sm  inline-block   uppercase rounded-lg  ' >{chocolate.tag}</p>
              <div className='flex flex-col items-center justify-center  py-4 lg:py-16'>
              <img src={chocolate.img} className=" h-24 mb-0 md:mb-2 lg:mb-6 " alt={chocolate.name} />
              <h3 className=' name  text-center text-white   text-sm lg:text-l lg:text-2xl mt-12'>{chocolate.name}</h3>
              </div>
             
            </div>
         </SwiperSlide>
            
        ))}
         </Swiper>
      </div>
      

 
       
  
    </div>
  );
};

export default NewCreation;
