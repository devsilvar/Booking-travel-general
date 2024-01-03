import { useState, useEffect } from "react";
import {
  feauturedHomeList,
  FeuturedFlightList,
  feauturedCarRenatlList,
} from "../../utils/Data";
import "./Feautured.css";

const Feautured = ({ ComponenetType }: { ComponenetType: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [ChosenComponent, setChosenComponent] = useState<any[]>([]);

  useEffect(() => {
    if (ComponenetType == "Flights") {
      setChosenComponent(FeuturedFlightList);
    } else if (ComponenetType == "Properties") {
      setChosenComponent(feauturedHomeList);
    } else if (ComponenetType == "Rentals") {
      setChosenComponent(feauturedCarRenatlList);
    }
  }, []);
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
