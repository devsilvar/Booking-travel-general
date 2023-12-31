import { FaBed, FaCalendarCheck, FaPersonBooth } from "react-icons/fa";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const Search = ({ destination, setdestination }) => {
  type SelectionState = Array<{ startDate: Date; endDate: Date; key: string }>;

  const [date, setDate] = useState<SelectionState | any>([
    {
      startDate: new Date(),
      endDate: new Date(),
    },
  ]);

  const [isOpenOption, setIsOpenOption] = useState(false);
  const [options, setOptions] = useState({ adult: 2, children: 2, room: 1 });

  const handleOption = (type: string, direction: string) => {
    if (direction === "i") {
      switch (type) {
        case "adult":
          setOptions((prevOptions) => ({
            ...prevOptions,
            adult: prevOptions.adult + 1,
          }));
          break;
        case "children":
          setOptions((prevOptions) => ({
            ...prevOptions,
            children: prevOptions.children + 1,
          }));
          break;
        case "room":
          setOptions((prevOptions) => ({
            ...prevOptions,
            room: prevOptions.room + 1,
          }));
          break;
      }
    } else if (direction === "d") {
      switch (type) {
        case "adult":
          setOptions((prevOptions) => ({
            ...prevOptions,
            adult: Math.max(prevOptions.adult - 1, 1),
          }));
          break;
        case "children":
          setOptions((prevOptions) => ({
            ...prevOptions,
            children: Math.max(prevOptions.children - 1, 0),
          }));
          break;
        case "room":
          setOptions((prevOptions) => ({
            ...prevOptions,
            room: Math.max(prevOptions.room - 1, 1),
          }));
          break;
      }
    }
  };

  return (
    <>
      <div className="headerSearch">
        <div className="headerSearchItem">
          <FaBed className="icon-input" />
          <input
            type="text"
            placeholder="Where are you going To"
            value={destination}
            onChange={setdestination}
            className="headerSearchInput"
          />
        </div>
        <div className="headerSearchItem">
          <FaCalendarCheck className="icon-input" />
          <span
            onClick={() => setIsOpenOption(!isOpenOption)}
            className="headerSearchText"
          >
            {format(date[0].startDate, "dd/MM/yyyy")} to{" "}
            {format(date[0].endDate, "dd/MM/yyyy")}
          </span>
          {isOpenOption && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate(item)}
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
            onClick={() => setIsOpenOption(!isOpenOption)}
            className="headerSearchText"
          >
            {options.adult} Adult - {options.children} Children - {options.room}{" "}
            Room
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
                  <span className="optionCounterNumber">{options.adult}</span>
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
                  <span className="optionCounterNumber">{options.room}</span>
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
      </div>
    </>
  );
};
export default Search;
