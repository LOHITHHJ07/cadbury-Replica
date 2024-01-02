import "../Styles/Inbox.css"

interface InboxProps {}



const Inbox: React.FC<InboxProps> = ({}) => {
    return (<div className="relative">
          <div className="InboxContainer flex flex-col items-center justify-center text-white py-20 px-16 ">
        <h1 className="title1 text-center text-4xl lg:text-6xl z-30 ">TREAT YOUR INBOX</h1>
        <p className="description text-center mb-8  z-30 ">Want to know about all the latest goodies from Cadbury? Sign up and you'll be the first to hear about exclusive offers, new delicious chocolate treats, gifts and more.</p>
        <button className="btn rounded-full text-l w-48 p-3 text-purple-900 uppercase  z-30">sign up</button>
    </div>
        <img src="https://images.ctfassets.net/pmzhtobns06n/2zucab1BXSMzhuMBP3YFO7/97032ff8653740eaca7d96438a175133/CDM_Logo_Plain_Chunk1.png?fm=webp&q=80" className="absolute  h-48 lg:h-96  top-0 lg:top-10 left-0 lg:left-20  z-20" alt="" />
    <img src="https://images.ctfassets.net/pmzhtobns06n/4TlLYppAUZ1QbkBoEPSivG/8fe56b9e75fa7adadde1f07030bf45e1/Pieces__1_.png?fm=webp&q=80" className="absolute h-36  lg:h-36 right-0 lg:right-10 bottom-20 z-20 " alt="" />
    </div>)
}

export default Inbox