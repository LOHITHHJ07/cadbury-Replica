import "../Styles/Gifting.css"

import gifting from "../assets/Cadbury-Christmas-Hampers-HOME-1440x1200.webp";



interface GiftingProps {}


const Gifting: React.FC<GiftingProps> = ({}) => {
    return (<div className="giftContainer flex flex-col lg:flex-row justify-between items-center ">
        <img src={gifting} className="gift" alt="gift" />
        <div className=" flex flex-col  items-center  justify-start text-start lg:items-start lg:text-center px-4 lg:px-28  py-16  ">
           <div> <h1 className="heading  title border-y-2 text-xl uppercase inline-block mb-4">Gifting</h1></div>
            <p className="text-white title2 text-center lg:text-start text-3xl lg:text-5xl  ">CHRISTMAS CHOCOLATE GIFT IDEAS</p>
            <p className= " description text-white text-center lg:text-start text-sm mb-6">Cadbury can help you find the perfect gift for Christmas…</p>
            <button className="btn  text-purple-800  uppercase rounded-full p-4 w-80"> discover gifts</button>
        </div>


    </div>)
}

export default Gifting;