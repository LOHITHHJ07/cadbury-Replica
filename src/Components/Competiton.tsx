import "../Styles/Competition.css"

interface CompetitonProps {}

const isMedium = window.innerWidth <= 850;

const Competiton: React.FC<CompetitonProps> = ({}) => {
  return (
    <div className="image relative ">
      <div className=" flex flex-col items-center lett justify-center mb-6 pt-72 lg:pt-48 text-white    px-4 ">
        <div className="z-30">
          <h1 className=" heading inblock border-y-2 z-30 mb-6 text-xl lg:text-2xl uppercase">
            Competition
          </h1>
        </div>
        <h1 className="title1 tracking-wider text-center text-2xl lg:text-4xl z-30 ">
          MATCH THE MINUTE TO WIN IT
        </h1>
        <p className="description text-center mb-4  z-30 ">
          Get involved in Cadbury's BIGGEST EVER football ticket giveaway, with
          chances to win every game week!
        </p>
        <button className="btn rounded-full text-l w-48 p-3 text-purple-900 uppercase  z-30">
          discover more
        </button>
      </div>

      {isMedium ? (
        <img
          src="https://images.ctfassets.net/pmzhtobns06n/4NvKb8WJ9ZNhaGFokOKsnc/939aa1ded060807b26efa1e642edc3ce/56023288-023_2a_CadburyFC_Min2Win_Mobile_Homepage_P375x750px_sRGB_SHJ.jpg?q=80&fm=webp&q=80"
          className="absolute  top-0 h-7/12 lg:h-auto w-full  z-10 "
          alt=""
        />
      ) : (
        <img
          src="https://images.ctfassets.net/pmzhtobns06n/5QmODBc1fX6G4oW41tHZvk/6db747e55bcb949b43d6692037d4784c/56023288-023_1a_CadburyFC_Min2Win_Desktop_Homepage_L1440x600px_sRGB_SHJ.jpg?fm=webp&q=80"
          className=" absolute  top-0 w-full px-10 lg:bg-white z-10 "
          alt=""
        />
      )}
    </div>
  );
};

export default Competiton;
