import "./searchItem.css";
import Hotel4 from "../../assets/images/home4.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SearchItem = () => {
  const navigate = useNavigate();

  return (
    <section className="searchItem">
      <img src={Hotel4} alt="" className="siImg" />

      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from Center</span>
        <span className="siTaxiOp">Free Airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air Conditioning
        </span>
        <span className="siFeautures">
          Entire Studio + 1 bathroom + 21m 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <div className="siCancelOpSubtitle">
          You can Cancel later, so Lock in this great price Today
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

export default SearchItem;
