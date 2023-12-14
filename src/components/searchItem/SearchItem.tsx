import "./searchItem.css";
import Hotel4 from "../../assets/images/home4.jpg";

const SearchItem = () => {
  return (
    <section className="searchItem">
      <img src={Hotel4} alt="" className="siImg" />

      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from Center</span>
        <span className="siTaxiOp">Free Airport taxi</span>
        <span>Studio Apartment with Air Conditioning</span>
        <span className="siFeautures">
          Entire Studio + 1 bathroom + 21m 1 full bed
        </span>
        <span>Free cancellation</span>
        <div className="siCancelOpSubtitle">
          You can Cancel later, so Locak in this great price Today
        </div>
      </div>
      <div className="siDetails"></div>
    </section>
  );
};

export default SearchItem;
