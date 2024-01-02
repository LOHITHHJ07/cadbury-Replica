import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../Styles/NewCreation.css"

import "../Styles/Brands.css";

import cameos from "../assets/Cameos.webp";
import brand1 from "../assets/brand1.webp";
import brand2 from "../assets/brand2.webp";
import brand3 from "../assets/brand3.webp";
import brand4 from "../assets/brand4.webp";
import brand5 from "../assets/brand5.webp";
import brand6 from "../assets/brand6.webp";
import brand7 from "../assets/brand7.webp";
import brand8 from "../assets/brand8.webp";
import brand9 from "../assets/brand9.webp";
import brand10 from "../assets/brand10.webp";
import brand11 from "../assets/brand11.webp";
import brand12 from "../assets/brand12.webp";



const brands=[brand1,brand2,brand3,brand4,brand5,brand6,brand7,brand8,brand9,brand10,brand11,brand12]

interface BrandsProps {}


const Brands: React.FC<BrandsProps> = ({}) => {
    return (
        <div className=' relative flex flex-col pt-40 justify-center items-center'>
           <img src={cameos} className=' absolute right-0 lg:left-60  top-24 lg:top-36 h-28' alt="" />
            <div>
             
                <h1 className="newBrands text-center text-5xl lg:text-6xl">CADBURY BRANDS</h1>
                <p  className="description text-center  text-sm description px-10 ">Learn more about your favourites and discover our latest creations.</p>
            </div>
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
            spaceBetween:0,
          },
          400:{
            slidesPerView:1,
            spaceBetween:10,
          },
  
        639: {
            spaceBetween:20,
          slidesPerView: 2,
          initialSlide:1,
        },
        865:{
            spaceBetween:10,
            slidesPerView:3,
            initialSlide:3
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
      {brands.map((chocolate, index) => (
         <SwiperSlide>
            <div className=" m-3 h-72 w-72 rounded-lg   ">
              <img src={chocolate} className='rounded-lg' alt={chocolate} />
            </div>
         </SwiperSlide>
            
        ))}
         </Swiper>
      </div>
    

        </div>
    
    )
      
}

export default Brands