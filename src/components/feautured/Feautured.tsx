import { austin, ontario, greece } from "../../assets";
import "./Feautured.css";

const Feautured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={ontario} alt="" height={320} className="feuturedImg" />
        <div className="feuturedTitles">
          <h1>Ontario</h1>
          <h2>922, Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={austin} alt="" height={320} className="feuturedImg" />
        <div className="feuturedTitles">
          <h1>Austin</h1>
          <h2>134, Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={greece} alt="" height={320} className="feuturedImg" />
        <div className="feuturedTitles">
          <h1>Greece</h1>
          <h2>5564, Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Feautured;
