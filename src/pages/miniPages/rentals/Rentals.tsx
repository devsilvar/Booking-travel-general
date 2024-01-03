import "./rentals.module.css";
import HeaderTitle from "../../../components/headerText/HeaderText";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Rentals = () => {
  // const TYPE: string = "Rentals";

  return (
    <>
      <div className="stayHead">
        <div className="staySection">
          <HeaderTitle
            title="Rent a Car without Excessive Paperwork. Takes Less than a Week"
            description="Get points for getting your renting a car on our website, unlock instant savings of 10%"
            buttonText="Sign in / Register"
          />
        </div>
      </div>
      <div className="rental-container">
        <h2>Coming Soon</h2>
        <p>
          Do you want us To keep you posted when we have available Renatals? if
          yes Enter Your Email Adress below
        </p>
      </div>
    </>
  );
};

export default Rentals;
