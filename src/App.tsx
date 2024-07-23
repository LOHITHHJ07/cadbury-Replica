import "./App.css";
import Navbar from "../src/Components/Navbar";
import Banner from "../src/Components/Banner";
import NewCreation from "./Components/NewCreation";
import Gifting from "./Components/Gifting";
import Inbox from "./Components/Inbox";
import Competiton from "./Components/Competiton";
import Promotion from "./Components/Promotion";
import Brands from "./Components/Brands";
import Visit from "./Components/Visit";
import Contact from "./Components/Contact";
import Stories from "./Components/Stories";
import Wall from "./Components/Wall";

function App() {
  return (
    <div className="App">
  
   <section> <Navbar></Navbar></section> 
     <section ><Banner></Banner></section>
      <section > <NewCreation></NewCreation></section>
      <section><Gifting></Gifting></section>
      <section>
      <video  autoPlay muted loop className=" inset-0  object-cover h-full w-full">
        <source src="https://videos.ctfassets.net/pmzhtobns06n/2H1d9erd4bkNNwi5x7IKkW/c95acb130d1d9a567eca8f608e693cdb/Purple_wave_Desktop_SectionBreaker_1440x600_v3_03.mp4" type="video/mp4" /> 
      </video>
      </section>
      <section><Inbox></Inbox></section>
      <section><Competiton></Competiton></section>
      <section><Promotion></Promotion></section>
      <section><Brands></Brands></section>
      <section><Wall></Wall></section>
      <section><Stories></Stories></section>
      <section><Visit></Visit></section>
      <section><Contact></Contact></section>
  
    </div>
  );
}

export default App;
