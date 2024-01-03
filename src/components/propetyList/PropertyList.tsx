import Hotel from "../../assets/images/Hotels.jpg";
import Apartment from "../../assets/images/Apartments.jpg";
import Villas from "../../assets/images/Villas.jpg";
import Resort from "../../assets/images/resorts.jpg";
import Yatch from "../../assets/images/Yatchs.jpg";
import "./PropertyList.css";
import { useState, useEffect } from "react";
import { businessClass, economyClass, firstClass } from "../../assets";

type PropertyTypeProps = {
  type: string;
  amount?: number;
  image: any;
}[];

const PropertyType = [
  { type: "Hotels", amount: 52, image: Hotel },
  { type: "Apartments", amount: 38, image: Apartment },
  { type: "Resorts", amount: 72, image: Resort },
  { type: "Villas", amount: 116, image: Villas },
  { type: "Yatch", amount: 16, image: Yatch },
];

const FlightType = [
  { type: "Economy Class", image: economyClass },
  { type: "Business Class", image: businessClass },
  { type: "First Class", image: firstClass },
];

const PropertyList = ({ ComponenetType }: { ComponenetType: string }) => {
  const [ChosenComponent, setChosenComponent] = useState<PropertyTypeProps>([]);

  useEffect(() => {
    if (ComponenetType == "Properties") {
      setChosenComponent(PropertyType);
    } else if (ComponenetType == "Flights") {
      setChosenComponent(FlightType);
    }
  }, [ComponenetType]);

  return (
    <div className="pList">
      {ChosenComponent.map((item, index) => {
        return (
          <div className="pListItem" key={index}>
            <img src={item.image} alt="" className="pListImage" />
            <div className="pListDesc">
              <h1>{item.type}</h1>
              <h3>
                {item.type} {item.amount || ""}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PropertyList;
