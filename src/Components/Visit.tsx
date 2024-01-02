import  cbFC from "../assets/Cadbury-fc.webp";
import cbWorld from "../assets/cbWorld.webp";
import coco from "../assets/cocoaLife.webp";
import gifts from "../assets/Cadbury_Tile_Gifting.webp";

const tiles= [
    {
        name:"CADBURY FC",
        img:cbFC,
    },
    {
        name:"CADBURY WORLD",
        img:cbWorld,
    },
    {
        name:"COCOA LIFE",
        img:coco
    },
    {
        name:"CADBURY GIFTS DIRECT",
        img:gifts
    }
]


interface VisitProps {}

const Visit: React.FC<VisitProps> = ({}) => {
    return (
        <div className=" flex flex-col py-10 justify-center items-center ">
    
                <h1 className="newBrands text-center text-5xl lg:text-6xl py-8">WHY NOT VISIT</h1>
              <div className=" grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10  lg:gap-5" >
              {
                    tiles.map((el, index) => (
                        <div className=" card flex flex-col items-center  rounded-lg    md:w-30 h-64  md:h-72  lg:h-80  lg:w-72" key={index}>
                            <img src={el.img}  className=" rounded-lg h-36 w-full lg:h-auto  " alt="" />
                            <h1 className="text-white text-lg lg:text-2xl  mb-0 lg:mb-8  mt-8 lg:mt-6  text-center">{el.name}</h1>
                        </div>
                    ))
                }
              </div>
        </div>
    )
}

export default Visit;