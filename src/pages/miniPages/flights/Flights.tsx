/* eslint-disable @typescript-eslint/no-explicit-any */
import Feautured from "../../../components/feautured/Feautured";
import FeauturedHome from "../../../components/feauturedHome/FeauturedHome";
import "./flights.module.css";
import PropertyList from "../../../components/propetyList/PropertyList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import SearchComponent from "../../../components/Search/SearchComponent";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { FaBed, FaCalendarCheck, FaPersonBooth } from "react-icons/fa";
import HeaderTitle from "../../../components/headerText/HeaderText";

interface optionProp {
  passengers: number | string;
}
type SelectionState = Array<{
  startDate: Date;
  endDate: Date;
  key: string;
}>;
const TYPE: string = "Flights";

const Flights = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navigate = useNavigate();

  const [isOpenOption, setisOpenOption] = useState(false);
  const [options, setoptions] = useState<optionProp | any | undefined>({
    passengers: 0,
  });
  const [openDate, setopenDate] = useState<boolean>(false);
  const [destination, setdestination] = useState("");
  const [renderCLicked, setrenderCLicked] = useState(false);
  const [date, setdate] = useState<SelectionState>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSearch = () => {
    setrenderCLicked(!renderCLicked);
    navigate("hotels", { state: { destination, date, options, TYPE } });
  };

  const handleOption = (name: string, operation: string): void => {
    setoptions((prev: optionProp) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const closeAll = () => {
    setopenDate(false);
    setisOpenOption(false);
  };

  return (
    <>
      <div className="overlay" onClick={closeAll}></div>
      <div className="stayHead">
        <div className="staySection">
          <HeaderTitle
            title="Book Your Flights Without any Hassles."
            description="Get rewarded for your flights booking on our website, unlock instant savings of 10% or more with a free Yusuf booking"
            buttonText="Sign in / Register"
          />
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FaBed className="icon-input" />
              <input
                type="text"
                placeholder="Where are you going To"
                onChange={(e) => setdestination(e.target.value)}
                className="headerSearchInput"
              />
            </div>
            <div className="headerSearchItem">
              <FaCalendarCheck className="icon-input" />
              <span
                onClick={() => setopenDate(!openDate)}
                className="headerSearchText"
              >{`  ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onChange={(item: any) => setdate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="dateRange"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="headerSearchItem">
              <FaPersonBooth className="icon-input" />
              <span
                className="headerSearchText"
                onClick={() => setisOpenOption(!isOpenOption)}
              >
                {options.passengers} Passengers
              </span>
              {isOpenOption && (
                <div className="options">
                  <div className="optionItems">
                    <span className="optiontext">Passengers</span>
                    <div className="counterSection">
                      <button
                        className="optionCounter"
                        onClick={() => handleOption("passengers", "i")}
                      >
                        +
                      </button>
                      <span className="optionCounterNumber">
                        {" "}
                        {options.passengers}
                      </span>
                      <button
                        disabled={options.passengers <= 1}
                        className="optionCounter"
                        onClick={() => handleOption("passengers", "d")}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <SearchComponent searchFunc={handleSearch} />
          </div>
        </div>
      </div>
      <div className="Container">
        <h1 className="homeTitle1">Feautured Airports </h1>
        <Feautured ComponenetType={TYPE} />
        <h1 className="homeTitle">Browse by Flight Type</h1>
        <PropertyList ComponenetType={TYPE} />
        <h1 className="homeTitle">Choose the Flight you Love</h1>
        <FeauturedHome ComponenetType={TYPE}  />
      </div>
    </>
  );
};

export default Flights;
