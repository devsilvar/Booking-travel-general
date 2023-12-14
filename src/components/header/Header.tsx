import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  FaBed,
  FaPlane,
  FaCar,
  FaTaxi,
  FaCalendarCheck,
  FaPersonBooth,
} from "react-icons/fa";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

interface optionProp {
  adult: number;
  children: number;
  room: number;
}

const Header = ({ type }: { type: string }) => {
  const [options, setoptions] = useState<optionProp | any>({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const [openDate, setopenDate] = useState<boolean>(false);
  const [destination, setdestination] = useState("");
  const [isOpenOption, setisOpenOption] = useState<boolean>(false);
  const [date, setdate] = useState<object>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
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
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div className="headerList">
            <div className="headerListItem active">
              <FaBed className="text" />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FaPlane className="text" />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FaCar className="text" />
              <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
              <FaBed className="text" />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FaTaxi className="text" />
              <span>Taxi</span>
            </div>
          </div>

          {type !== "list" && (
            <>
              <h1 className="headerTitle">
                A Lifetime of Booking. Its a Genuis
              </h1>
              <p className="headerDesc">
                Get rewarded for your Travels, Unlock instant savings of 10% or
                more with a Free LamaBooking
              </p>
              <button className="headerBtn">Sign in / Register</button>
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
                <div className="headerSearchItem">
                  <button className="headerBtn Round" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>{" "}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
