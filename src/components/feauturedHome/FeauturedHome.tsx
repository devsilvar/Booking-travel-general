import "./FeauturedHome.css";
import home1 from "../../assets/images/home9.jpg";
import home3 from "../../assets/images/home7.jpg";
import home4 from "../../assets/images/home6.jpg";
import home5 from "../../assets/images/home5.jpg";
const FeauturedHome = () => {
  return (
    <section className="fp">
      <div className="fpItem">
        <img src={home1} alt="" />
        <span className="fpName">Apart Hotel Stare Miastor</span>
        <span className="fpCity">Madrid</span>

        <span className="fpPrice">Starting from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
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
      </div>
    </section>
  );
};

export default FeauturedHome;
