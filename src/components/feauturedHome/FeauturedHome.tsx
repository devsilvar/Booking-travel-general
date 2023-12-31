import "./FeauturedHome.css";
import { useEffect, useState, useRef } from "react";
import home1 from "../../assets/images/home9.jpg";
import home3 from "../../assets/images/home7.jpg";
import home4 from "../../assets/images/home6.jpg";
import home5 from "../../assets/images/home5.jpg";
import { useSpring, animated } from "@react-spring/web";
import { arrowLeft, arrowRight } from "../../assets";

const HomeList = [
  {
    image: home1,
    name: "Gijon Hotel Ville Stare",
    city: "Bordeaux",
    price: `Starting from $${470}`,
    rating: 8.9,
    remarks: "Excellent",
    order: -1,
  },

  {
    image: home5,
    name: "Apart Hotel Stare Miastor",
    city: "Betis",
    price: `Starting from $${100}`,
    rating: 7.9,
    order: 0,
    remarks: "Excellent",
  },
  {
    image: home3,
    name: "LongVille Hotel Dark",
    city: "Paris",
    price: `Starting from $${500}`,
    rating: 9.9,
    remarks: "Excellent",
    order: 1,
  },
  {
    image: home4,
    name: "Maroch Hotel Mable",
    city: "Barcelona",
    price: `Starting from $${160}`,
    rating: 7.9,
    remarks: "Good",
    order: 2,
  },
  {
    image: home1,
    name: "Gijon Hotel Ville Stare",
    city: "Bordeaux",
    price: `Starting from $${470}`,
    rating: 8.9,
    remarks: "Excellent",
    order: 3,
  },
];

const data = ["1", "2", "3", "4", "5"];
const FeauturedHome = () => {
  const [carousels, setcarousels] = useState(HomeList);
  const [slideNumber, setslideNumber] = useState(0);
  const [swipeDirection, setswipeDirection] = useState("left");
  const [swiped, setSwiped] = useState(false);
  const swipe = useRef(false);
  const [noslide, setnoslide] = useState(0);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [position, setPosition] = useState(0);

  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
    to: { x: 100 },
  }));

  const handleClick = () => {};

  const [slideCount, setSlideCount] = useState(3);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState(0);

  // const animatedCarousels = useAnimated(() => {
  //   return carousels.map((home, index) => {
  //     const translateX = (position * 100) / (carousels.length - 1);
  //     return {
  //       transform: `translateX(${translateX}%)`,
  //       transition: "all 0.5s ease-in-out",
  //     };
  //   });
  // }, [position, carousels]);

  // const carouselScroll = () => {
  //   if (currentIndex == Math.floor(HomeList.length)) {
  //     setcurrentIndex(0);
  //   } else {
  //     setcurrentIndex(currentIndex + 1);
  //   }
  // };

  // const nextCarousel = () => {
  //   setSliding(true);
  //   setDirection(1);
  //   setTimeout(() => {
  //     setcarousels((prevState) => {
  //       const oldSlides = [...prevState];
  //       const hiddenSlide = oldSlides.shift();
  //       const newHiddenSlide: any = {
  //         ...hiddenSlide,
  //         order: oldSlides[oldSlides.length - 1].order + 1,
  //       };
  //       oldSlides.push(newHiddenSlide);
  //       const slides = oldSlides.map((s) => {
  //         return { ...s, order: s.order - 1 };
  //       });
  //       setSliding(false);
  //       return slides;
  //     });
  //   }, 500);
  // };

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
  // const prevCarousel = (state: boolean): void => {
  //   const slides = carousels;
  //   setswipeDirection("left");
  //   setSwiped(false);
  //   setTimeout(() => {
  //     const hiddenSlide = slides.shift();
  //     const newHiddenSlide = {
  //       ...hiddenSlide,
  //       order: slides.slice(-1)[0].order + 1,
  //     };
  //     // api.start({
  //     //   from: {
  //     //     x: 100,
  //     //   },
  //     //   to: {
  //     //     x: 0,
  //     //   },
  //     // });
  //     slides.push(newHiddenSlide);

  //     const updatedSlides = slides.map((slide) => ({
  //       ...slide,
  //       order: slide.order - 1,
  //     }));
  //     setcarousels(updatedSlides);
  //     state == true && setSwiped(true);
  //   }, 400);

  //   // Optimization: Only update the parts of the state that have changed
  // };

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

  // const scrollToCarousel = () => {
  //   scroller.scrollTo("carousel", {
  //     duration: 800, // duration of the scroll animation
  //     smooth: true, // creates a smooth scroll
  //     offset: -50, // optional offset
  //   });
  // };

  // useEffect(() => {
  //   if (swiped == false) {
  //     // Animate the swipe effect
  //     const swipeAnimation = () => {
  //       setSwiped(!swiped);
  //     };
  //     // Wait for 4 seconds before running the animation
  //     setTimeout(swipeAnimation, 2000);
  //   }
  //   // wait for 4 seconds before swiping
  // }, [swiped]);

  // const handleMove = (direction: string) => {
  //   let newSlideNumber;

  //   if (direction == "l") {
  //     newSlideNumber = currentIndex === 0 ? data.length : currentIndex - 1;
  //   } else {
  //     newSlideNumber = currentIndex === data.length ? 0 : currentIndex + 1;
  //   }
  //   setcurrentIndex(newSlideNumber);
  // };

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

        {/* <div className="fpItem">
        <img src={home5} alt="" />
        <span className="fpName">Apart Hotel Stare Miastor</span>
        <span className="fpCity">Madrid</span>

        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={home3} alt="" />
        <span className="fpName">Apart Hotel Stare Miastor</span>
        <span className="fpCity">Madrid</span>

        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img src={home4} alt="" />
        <span className="fpName">Apart Hotel Stare Miastor</span>
        <span className="fpCity">Madrid</span>

        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div> */}
      </section>
      <div className="slide-btn" onClick={() => nextCarousel(true)}>
        {" "}
        <img src={arrowRight} alt="" />{" "}
      </div>
    </section>
  );
};

export default FeauturedHome;
