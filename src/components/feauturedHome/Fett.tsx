import { useState } from "react";
type slideProps = {
  order: number | undefined;
  text: string | undefined; // removed optional chaining as the tex property should be mandatory
};

const Fett = () => {
  const [slides, setslides] = useState([
    { order: -1, text: "6" },
    { order: 0, text: "1" },
    { order: 1, text: "2" },
    { order: 2, text: "3" },
    { order: 3, text: "4" },
    { order: 4, text: "5" },
  ]);

  const handleSubmit = () => {
    let oldSlides;
    setslides((prev) => {
      oldSlides = [...prev];
      console.log(oldSlides);
      let hiddenSlide = oldSlides.shift();

      const newHiddenSlide: slideProps | any = {
        ...hiddenSlide,
        order: oldSlides[oldSlides.length - 1].order + 1,
      };
      oldSlides.push(newHiddenSlide);

      const slides = oldSlides.map((s) => {
        return { ...s, order: s.order - 1 };
      });
      console.log(slides);
      return slides; // removed unnecessary object notation
    });
  };

  const handleNext = () => {
    setTimeout(() => {
      setslides((prevSlides) => {
        let slides = [...prevSlides];

        let lastSlide = slides.pop();
        lastSlide = { ...lastSlide, order: -1 };
        slides = slides.map((s) => {
          return { ...s, order: s.order + 1 };
        });
        slides.unshift(lastSlide);

        return slides;
      });
    }, 500);
  };

  console.log(slides);
  return (
    <div>
      <button onClick={handleSubmit}>prev</button>
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export default Fett;
