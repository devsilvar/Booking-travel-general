import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.css";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import home3 from "../../assets/images/home3.jpg";
import home1 from "../../assets/images/home1.jpg";
import home2 from "../../assets/images/home2.jpg";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
const Hotel = () => {
  const [slideNumber, setslideNumber] = useState<number>(0);
  const [isSliderOpen, setisSliderOpen] = useState<boolean>(false);
  const photos = [
    { src: home1 },
    { src: home2 },
    { src: home3 },
    { src: home2 },
    { src: home1 },
    { src: home3 },
  ];

  const handleOpen = (i: number) => {
    setisSliderOpen(true);
    setslideNumber(i);
  };

  const handleMove = (direction: string) => {
    let newSlideNumber;

    if (direction == "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setslideNumber(newSlideNumber);
  };

  return (
    <div>
      <div className="hotelContainer">
        {isSliderOpen && (
          <div className="slider">
            <TiDelete
              className="close"
              onClick={() => setisSliderOpen(false)}
            />
            <FaArrowCircleLeft
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FaArrowCircleRight
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>

          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent Location - 500m from Center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free Airport Taxi
          </span>
          <div className="hotelImages">
            {photos.map((item, index) => {
              return (
                <div className="hotelImageWrapper">
                  <img
                    onClick={() => handleOpen(index)}
                    src={item.src}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              );
            })}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailtext">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio ratione hic earum error tenetur! Doloribus
                perspiciatis, facere praesentium esse, a nostrum repellendus
                alias expedita odit consectetur ut. Veniam, harum officiis.lore
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
                vel quo laboriosam atque sequi id unde debitis quam beatae
                libero! Quidem rem delectus quam repellat sequi quos quo,
                facilis esse. Amet obcaecati facilis dolorum nulla quasi! Maxime
                dignissimos fugit sint, doloribus error rem porro ratione a
                nihil esse magni ab reiciendis, ea placeat voluptatem quos? Nemo
                beatae eligendi veritatis dolores. Consectetur, fuga cupiditate?
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for a 9-night Stay</h1>
              <span>
                Located in teh real heart of Krakow, this Property has an
                Excellent location score of 9.8
              </span>
              <h2>
                <b>$945</b> (9 night)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
