import { austin } from "../../assets";
import "./PropertyList.css";
const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={austin} alt="" />
        <div className="pListDesc">
          <h1>Hotels</h1>
          <h3>233 Hotels</h3>
        </div>
      </div>
      <div className="pListItem">
        <img src={austin} alt="" />
        <div className="pListDesc">
          <h1>Apartments</h1>
          <h3>133 Hotels</h3>
        </div>
      </div>
      <div className="pListItem">
        <img src={austin} alt="" />
        <div className="pListDesc">
          <h1>Apartments</h1>
          <h3>133 Hotels</h3>
        </div>
      </div>

      <div className="pListItem">
        <img src={austin} alt="" />
        <div className="pListDesc">
          <h1>Resorts</h1>
          <h3>343 Hotels</h3>
        </div>
      </div>
      <div className="pListItem">
        <img src={austin} alt="" />
        <div className="pListDesc">
          <h1>Villas</h1>
          <h3> 113 Hotels</h3>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
