import { useState, useEffect, useRef, ComponentType } from "react";
import {
  austin,
  ontario,
  greece,
  flight1,
  flight2,
  flight3,
} from "../../assets";
import "./Feautured.css";

type FeaturedItem = {
  image: string;
  name: string;
  properties: number;
  type: string;
};
const Feautured = ({ ComponenetType }: { ComponenetType: string }) => {
  const [ChosenComponent, setChosenComponent] = useState<any[]>([]);

  const feauturedHomeList = [
    {
      image: ontario,
      name: "Ontario",
      properties: 122,
      type: ComponenetType,
    },
    {
      image: austin,
      name: "Austin",
      properties: 134,
      type: ComponenetType,
    },
    {
      image: greece,
      name: "Greece",
      properties: 532,
      type: ComponenetType,
    },
  ];

  const feauturedCarRenatlList = [
    {
      image: ontario,
      name: "Ontario",
      properties: 122,
      type: ComponenetType,
    },
    {
      image: austin,
      name: "Austin",
      properties: 134,
      type: ComponenetType,
    },
    {
      image: greece,
      name: "Greece",
      properties: 532,
      type: ComponenetType,
    },
  ];

  const FeuturedFlightList = [
    {
      image: flight1,
      name: "United Airways",
      properties: 122,
      type: ComponenetType,
    },
    {
      image: flight2,
      name: "JetStar Airways",
      properties: 134,
      type: ComponenetType,
    },
    {
      image: flight3,
      name: "Luftsana Airways",
      properties: 532,
      type: ComponenetType,
    },
  ];
  useEffect(() => {
    if (ComponenetType == "Flights") {
      setChosenComponent(FeuturedFlightList);
    } else if (ComponenetType == "Properties") {
      setChosenComponent(feauturedHomeList);
    } else if (ComponenetType == "Rentals") {
      setChosenComponent(feauturedCarRenatlList);
    }
  }, [ComponenetType]);
  return (
    <>
      <div className="featured">
        {ChosenComponent.map((item, index) => {
          const { image, name, properties, type } = item;
          return (
            <div className="featuredItem" key={index}>
              <img src={image} alt="" height={320} className="feuturedImg" />
              <div className="feuturedTitles">
                <h1>{name}</h1>
                <h2>
                  {properties} {type}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Feautured;
