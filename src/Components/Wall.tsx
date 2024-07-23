

import "../Styles/Wall.css"



interface WallProps {}

const Wall: React.FC<WallProps> = ({}) => {
    return (
        <div className="wall lg:grid flex flex-col justify-center gap-y-8 my-64 lg:my-0 items-center lg:grid-cols-2  px-8 lg:px-56">
          <div className="History rounded-lg flex flex-col justify-end py-12 items-center ">
            <h1 className="WallTitle border-y-2 uppercase mb-4" >History</h1>
            <h1 className="headingWall text-center text-xl lg:text-3xl px-2 mb-4">HOW CADBURY BECAME A FABRIC OF THE NATION BRAND</h1>
            <p className="descriptionWall text-center mb-4 px-14 ">Discover how Cadbury became the ‘glass and a half’ company, and hear about the journey from a grocery shop in Birmingham to the Cadbury we know today.</p>
            <button className="btn w-64 p-2 text-purple-800 rounded-full">READ OUR STORY</button>
          </div>
          <div className="Partner flex flex-col justify-end py-12 items-center">
          <h1 className="WallTitle border-y-2 uppercase mb-4 px-2" >PARTNERSHIP</h1>
            <h1 className="headingWall text-center text-xl lg:text-3xl mb-4">CADBURY FC</h1>
            <p className="descriptionWall text-center mb-4 px-14 ">Find out about the clubs we've teamed up with and the support we give to our football communities - plus regular competitions that give you lots of chances to win fabulous footie prizes.</p>
            <button className="btn w-64 p-2 text-purple-800 rounded-full">VISIT CADBURY FC</button>
          </div>
          <div className="Recipies flex flex-col justify-end py-12 items-center">
          <h1 className="WallTitle border-y-2 uppercase mb-4" >RECIPES</h1>
            <h1 className="headingWall text-center text-xl lg:text-3xl px-2 mb-4">CADBURY CHOCOLATE RECIPES</h1>
            <p className="descriptionWall text-center mb-4 px-14 ">Turn your favourite Cadbury chocolate into delicious brownies, cakes, biscuits and desserts. You'll find all our Cadbury recipes, and loads of recipe inventions shared with us by Cadbury chocolate lovers around the country.</p>
            <button className="btn w-64 p-2 text-purple-800 rounded-full">DISCOVER RECIPIES</button>
          </div>
          <div className="Sustain flex flex-col  justify-end py-12 items-center">
          <h1 className="WallTitle border-y-2 uppercase mb-4" >SUSTAINABILITY</h1>
            <h1 className="headingWall text-center text-xl lg:text-3xl  mb-4">MAKING COCOA MORE SUSTAINABLE</h1>
            <p className="descriptionWall text-center mb-4 px-14 ">Over the last decade, we've been working hard to help make sure the cocoa in the Cadbury chocolate you love is sourced in a more sustainable way, with an aim to be both kind to the planet, and the people who grow it.</p>
            <button className="btn w-64 p-2 text-purple-800 rounded-full">EXPLORE COCOA LIFE</button>
          </div>
        </div>
    )
}

export default Wall