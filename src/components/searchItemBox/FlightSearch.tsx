import "./listsearchBox.css";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { close, open } from "../../assets";
type SelectionState = Array<{ startDate: Date; endDate: Date; key: string }>;

interface optionProp {
  passengers: string | undefined;
  adult: string;
  children: string;
  room: string;
}
const FlightSearch = ({
  destination,
  openDate,
  setopenDate,
  date,
  setdate,
  option,
}: {
  destination: string;
  openDate: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setopenDate: any;
  date: SelectionState;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setdate: any;
  option: optionProp;
}) => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <>
      <div className="listSearch">
        <div className="list-head">
          <h1 className="lsTitle">Search</h1>
          <div className="icon" onClick={() => setisOpen(!isOpen)}>
            {" "}
            {isOpen ? (
              <img src={close} alt="" />
            ) : (
              <img src={open} alt="" />
            )}{" "}
          </div>
        </div>

        <div className={`"listSection"  ${!isOpen && "limitheight"}  `}>
          <div className="lsItem">
            <div className="lsItem">
              <label htmlFor="Destination">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
          </div>
          <div className="lsItem">
            <label htmlFor="">Departure Date</label>
            <span onClick={() => setopenDate(!openDate)}>{`  ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )}`}</span>
            {openDate && (
              <DateRange
                onChange={(item) => setdate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />
            )}
          </div>

          <div className="lsItem">
            <label htmlFor="">Options</label>
            <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">Cabin Class</span>

                <select name="flightClass" id="" className="lsOptionInput">
                  <option value="0">Select Cabin Class</option>
                  <option value="economy">Economy</option>
                  <option value="business">Business</option>
                  <option value="firstClass">First Class</option>
                </select>
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">{Object.keys(option)[0]} </span>
                <input
                  type="number"
                  min={1}
                  placeholder={option.passengers}
                  className="lsOptionInput"
                />
              </div>
            </div>
          </div>
          <button className="searchbtn">Search</button>
        </div>
      </div>
    </>
  );
};

export default FlightSearch;
