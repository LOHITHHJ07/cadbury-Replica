import React, { Component } from "react";
import Slider from "react-slick";

import "../Styles/Stories.css"

import  egg from "../assets/egg.jpg";
import coconut from "../assets/coconut.jpg";
import strawberry from "../assets/strawberry.jpg";
import walnut from "../assets/walnut.jpg";
import christmas from "../assets/cbChirstmas.jpg";

const cards =[egg,coconut,strawberry,walnut,christmas];

interface StoriesProps {}

const settings = {
  
  
    speed: 500,
    slidesToShow: 4,
  
  };

const Stories: React.FC<StoriesProps> = ({}) => {
    return (
        <div className="Storiescontainer px-4">
             <div className=" z-40 flex flex-col justify-center  items-center top-0">
                <h1  className="storyHeadline pt-16 text-center mt-64 lg:mt-0 text-2xl lg:text-6xl" >@CADBURYUK STORIES</h1>
                <p className="storyDescription text-center">We love it when you share a Cadbury moment! Follow us on Instagram to share your Cadbury stories and see what we’re up to!
                </p>
            </div>
            <div className="grid grid-cols-2 px-10 lg:px-0 gap-4 lg:flex lg:flex-row gap-x-4 py-16 w-full">
          <div>
           <img src={egg} className="egg" alt="" />
          </div>
          <div>
          <img src={coconut} className="coconut" alt="" />
          </div>
          <div>
            <img src={strawberry} className="strawberry" alt="" />
          </div>
          <div>
           <img src={walnut} className="walnut" alt="" />
          </div>
          <div>
           <img src={christmas} className="christmas" alt="" />
          </div>
            </div>
           
           
        </div>
    )
}

export default Stories