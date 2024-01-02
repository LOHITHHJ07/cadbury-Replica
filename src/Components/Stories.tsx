import "../Styles/Stories.css"

interface StoriesProps {}

const Stories: React.FC<StoriesProps> = ({}) => {
    return (
        <div className="Storiescontainer">
             {/* <img src={img} className="absolute top-0" alt="" /> */}
             <div className="e z-40 flex flex-col justify-center items-center top-0">
                <h1  className="storue text-center text-2xl lg:text-6xl" >@CADBURYUK STORIES</h1>
                <p>We love it when you share a Cadbury moment! Follow us on Instagram to share your Cadbury stories and see what we’re up to!
                </p>
            </div>
           
           
        </div>
    )
}

export default Stories