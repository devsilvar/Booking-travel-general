import Feautured from "../../../components/feautured/Feautured";
import FeauturedHome from "../../../components/feauturedHome/FeauturedHome";
import PropertyList from "../../../components/propetyList/PropertyList";
import "./stay.module.css";
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
  adult: number | string;
  children: number | string;
  room: number | string;
}
const Stay = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [options, setoptions] = useState<optionProp | any | undefined>({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  type SelectionState = Array<{ startDate: Date; endDate: Date; key: string }>;

  const [openDate, setopenDate] = useState<boolean>(false);
  const [destination, setdestination] = useState("");
  const [isOpenOption, setisOpenOption] = useState<boolean>(false);
  const [renderCLicked, setrenderCLicked] = useState(false);
  const [date, setdate] = useState<SelectionState>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const TYPE: string = "Properties";

  const handleSearch = () => {
    setrenderCLicked(!renderCLicked);
    navigate("hotels", { state: { destination, date, options, TYPE } });
  };

  const closeAll = () => {
    setopenDate(false);
    setisOpenOption(false);
  };

  const handleOption = (name: string, operation: string): void => {
    setoptions((prev: optionProp) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <>
      <div className="overlay" onClick={closeAll}></div>
      <div className="stayHead">
        <div className="staySection">
          <HeaderTitle
            title="Book Your Home Now. It's a Genius"
            description="Get rewarded for Booking for Home with Our Platform , unlock instant savings of 10% or more with a free booking"
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
              >{`${format(date[0].startDate, "dd/MM/yyyy")}   to  ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>
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
                {options.adult} Adult - {options.children} Children -{" "}
                {options.room} Room{" "}
              </span>
              {isOpenOption && (
                <div className="options">
                  <div className="optionItems">
                    <span className="optiontext">Adults</span>
                    <div className="counterSection">
                      <button
                        className="optionCounter"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                      <span className="optionCounterNumber">
                        {" "}
                        {options.adult}
                      </span>
                      <button
                        disabled={options.adult <= 1}
                        className="optionCounter"
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="optionItems">
                    <span className="optiontext">Children</span>
                    <div className="counterSection">
                      <button
                        className="optionCounter"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        disabled={options.children <= 0}
                        className="optionCounter"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="optionItems">
                    <span className="optiontext">Rooms</span>
                    <div className="counterSection">
                      <button
                        className="optionCounter"
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                      <span className="optionCounterNumber">
                        {options.room}
                      </span>
                      <button
                        disabled={options.room <= 1}
                        className="optionCounter"
                        onClick={() => handleOption("room", "d")}
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
        <h1 className="homeTitle1">Popular Locations </h1>
        <Feautured ComponenetType={TYPE} />
        <h1 className="homeTitle">Browse by Propety Type</h1>
        <PropertyList ComponenetType={TYPE} />
        <h1 className="homeTitle">Home Guest Love</h1>
        <FeauturedHome ComponenetType={TYPE} />
      </div>
    </>
  );
};

export default Stay;
