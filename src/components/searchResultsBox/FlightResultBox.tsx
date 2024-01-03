import "./searchItem.css";
import { Link } from "react-router-dom";
import { flight2 } from "../../assets";

const FlightResultBox = () => {
  return (
    <section className="searchItem">
      <img src={flight2} alt="" className="siImg" />

      <div className="siDesc">
        <h1 className="siTitle">LuftSana Airport</h1>
        <span className="siDistance">500m from Center</span>
        <span className="siTaxiOp">Free taxi on Departure</span>
        <span className="siFeautures">
          Economy, Firstclass and Business Class Available
        </span>
        <span className="siCancelOp">Free Cancellation</span>
        <div className="siCancelOpSubtitle">
          You can Cancel later, but you could lose the discount
        </div>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailtext">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>

          <Link to={`2`}>
            <button className="siCheckBtn">See Availability</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FlightResultBox;
