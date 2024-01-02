interface PromotionProps {}

const Promotion: React.FC<PromotionProps> = ({}) => {

    const isMedium = window.innerWidth <= 850;

    return (
        <div className="relative ">
        <div className="InboxContainer flex flex-col items-center pt-96 pb-4 justify-center text-white    lg:pt-48  px-4 ">
          <div className="z-30">
            <h1 className=" PromotionTitle text-color-white  inblock border-y-2 z-30 mb-6 text-2xl uppercase">
              Promotion
            </h1>
          </div>
          <h1 className=" text-center text-2xl  lg:text-4xl z-30  ">
          FAMILY FUN DAYS ARE BACK  <br /> WITH MERLIN
          </h1>
          <p className="description text-center mb-6  z-30 ">
          Don't miss out on big ticket savings to the UK's top attractions, only with promotional packs of Cadbury. Rollercoasters, jousting or coming face-to-fin with majestic sea creatures? They're all just a click away.
          </p>
          <button className="btn rounded-full text-l w-80 p-3 text-purple-900 uppercase  z-30">
            access big ticket savings
          </button>
        </div>
  
        {isMedium ? (
          <img
            src="https://images.ctfassets.net/pmzhtobns06n/26yUBTtcujfKsghfP5XKQs/15a36d49ddb1a7b387d88ff7677a54b5/Full_width_Component.jpg?q=80&fm=webp&q=80"
            className="absolute  top-0 h-96  w-full z-10 "
            alt=""
          />
        ) : (
          <img
            src="https://images.ctfassets.net/pmzhtobns06n/6jOoXiqVyP6EJFBRV5DWR9/b05515a19b3577fe5f9e7e4987032507/Center.jpg?fm=webp&q=80"
            className="absolute  top-0 w-full z-10 "
            alt=""
          />
        )}
      </div>
    )
}

export default Promotion