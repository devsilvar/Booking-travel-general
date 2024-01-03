/* eslint-disable @typescript-eslint/no-explicit-any */
import "./FeauturedHome.css";
import { useEffect, useState } from "react";
import { HomeList, FlightList } from "../../utils/Data";
import { arrowLeft, arrowRight } from "../../assets";
import { FlightPropertyTypeProps } from "../../utils/Types";

const FeauturedHome = ({ ComponenetType }: { ComponenetType: string }) => {
  const [carousels, setcarousels] = useState<FlightPropertyTypeProps>([]);
  const [swipeDirection, setswipeDirection] = useState("left");
  const [swiped, setSwiped] = useState(false);

  useEffect(() => {
    if (ComponenetType == "Properties") {
      setcarousels(HomeList);
    } else if (ComponenetType == "Flights") {
      setcarousels(FlightList);
    }
  }, [ComponenetType]);

  const prevCarousel = (state: boolean) => {
    setSwiped(true);
    setswipeDirection("left");
    setTimeout(() => {
      setcarousels((prev) => {
        let newslides = [...prev];
        const hiddenSlide = newslides.shift();

        const newHiddenSlide: any = {
          ...hiddenSlide,
          order: newslides.slice(-1)[0].order + 1,
        };

        newslides.push(newHiddenSlide);

        newslides = newslides.map((s) => {
          return { ...s, order: s.order - 1 };
        });
        return newslides;
      });
      state && setSwiped(false);
    }, 400);
  };

  const nextCarousel = (state: boolean) => {
    let slides;
    setSwiped(false);
    setswipeDirection("right");
    setTimeout(() => {
      setcarousels((prevSlides) => {
        slides = [...prevSlides];
        const lastSlide = slides.pop();
        const newlastSlide: any = { ...lastSlide, order: -1 };
        slides.unshift(newlastSlide);
        slides = slides.map((s) => {
          return { ...s, order: s.order + 1 };
        });
        return slides;
      });
      state == true && setSwiped(true);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCarousel(true);
    }, 4000);

    return () => clearInterval(interval);
  });

  return (
    <section className="flex-container">
      <div className="slide-btn" onClick={() => prevCarousel(true)}>
        {" "}
        <img src={arrowLeft} alt="" />{" "}
      </div>
      {/* <Element name="myScrollToElement" scrollSpy={true}> */}
      <section className="carousel-container">
        {carousels.map((home, index) => {
          const { image, name, city, price, rating, remarks } = home;
          return (
            <div
              className={`carousel-item  ${
                swiped
                  ? swipeDirection == "left"
                    ? "swipeLeft"
                    : "swipeRight"
                  : "carousel-item"
              }`}
              key={index}
            >
              <img src={image} alt="" />
              <span className="fpName">{name}</span>
              <span className="fpCity">{city}</span>

              <span className="fpPrice">{price}</span>
              <div className="fpRating">
                <button>View Availability</button>

                <div>
                  <span>{rating}</span>
                  <sub>{remarks}</sub>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <div className="slide-btn" onClick={() => nextCarousel(true)}>
        {" "}
        <img src={arrowRight} alt="" />{" "}
      </div>
    </section>
  );
};

export default FeauturedHome;
