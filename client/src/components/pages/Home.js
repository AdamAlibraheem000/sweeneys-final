import React from "react";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in/lib/FadeIn";
import { Carousel } from "react-bootstrap";
import outsidePicSmall from '../../imgs/outsidePicSmall.jpg'
import outsidePic from '../../imgs/outsidePic.jpg'
import fishPic from '../../imgs/fishPic.jpg'
import BarPic from '../../imgs/barPic.jpg'
import WhiskeyPic from '../../imgs/WhiskeyPic.jpg'



export default function Home() {


  return (
    <>
      <Helmet>
        <title>Sweeney's Seafood Bar & Grill</title>
      </Helmet>

      <FadeIn>


      <main className="main-section">       
        <Carousel className=" carousel-fade " >
         
          <Carousel.Item className="background-pics">
            <img className="scroll-pics" src={outsidePic} alt="" />
             <Carousel.Caption className="carousel-flex">
              <h1 className="title-font">Permanently closing</h1>
              <h1 className="sub-title">Dec 3rd</h1>
            </Carousel.Caption>
          </Carousel.Item>
        

          <Carousel.Item className="background-pics">
            <img src={fishPic}
              className='scroll-pics'
              alt="Sweeney's Fish Mascot"
            />
            <Carousel.Caption className="carousel-flex">
              <h1 className="title-font">Permanently closing </h1>
              <h1 className="sub-title">Dec 3rd</h1>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="background-pics">
            <img src={BarPic}
              className='scroll-pics'
              aria-label="Locals at Sweeneys Bar"
              // alt="Locals at Sweeney's Bar"
            />
            <Carousel.Caption>
              <div className="carousel-flex">
                <h1 className="dan-font">Come Visit Doug's Bar for the last time...</h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="background-pics">
            <img src={WhiskeyPic}
              className='scroll-pics'
              alt="Sweeney's Whiskey Selection"
            />
            <Carousel.Caption>
              <div className="carousel-flex">
                <h1 className="dansub-title">
                Permanently closing Dec 3rd
                </h1>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> 
        </main>
      </FadeIn>
    </>
  );
}
