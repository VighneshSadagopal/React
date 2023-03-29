import React from "react";
import './Carousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function (props) {
  var banners = [
    {
      image:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1664454655771_smotherweb.jpg",
    },
    {
      image:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1664429912341_king.jpg",
    },
    {
      image:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1664435240724_webbanner.jpg",
    },
    {
      image:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1664434161474_web.jpg",
    },
    {
      image:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1661504619972_restaura.jpg",
    },
  ];
  const renderBannerSlides = () =>
  banners.map((data) => {
         return (
          <div className="carousel-images">
               <img src={data.image} />
          </div>
       
         );
       })
 return (
   <>
   <Slider
       dots={true}
       slidesToShow={1}
       slidesToScroll={1}
       autoplay={true}
       autoplaySpeed={3000}
       arrows={true}
       draggable={false}
       centerMode={true}
       initialSlide={0}
     >
       {renderBannerSlides()}
     </Slider>
     </>
 )
}