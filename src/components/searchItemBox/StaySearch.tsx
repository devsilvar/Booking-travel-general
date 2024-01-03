/* eslint-disable @typescript-eslint/no-explicit-any */
import "./listsearchBox.css";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { close, open } from "../../assets";

type SelectionState = Array<{ startDate: Date; endDate: Date; key: string }>;

interface optionProp {
  adult: string;
  children: string;
  room: string;
}
const StaySearch = ({
  destination,
  openDate,
  setopenDate,
  date,
  setdate,
  option,
}: {
  destination: string;
  openDate: boolean;
  setopenDate: any;
  date: SelectionState;
  setdate: any;
  option: optionProp;
}) => {
  const [isOpen, setisOpen] = useState(true);
  return (
    <div className="listSearch ">
      <div className="list-head">
        <h1 className="lsTitle">Search</h1>
        <div className="icon" onClick={() => setisOpen(!isOpen)}>
          {" "}
          {isOpen ? <img src={close} alt="" /> : <img src={open} alt="" />}{" "}
        </div>
      </div>
      <div className={`"listSection"  ${!isOpen && "limitheight"}  `}>
        <div className="lsItem">
          <label htmlFor="Destination">Destination</label>
          <input type="text" placeholder={destination} />
        </div>

        <div className="lsItem">
          <label htmlFor="">{`Check-in-date`}</label>
          <span onClick={() => setopenDate(!openDate)}>{`${format(
            date[0].startDate,
            "dd/MM/yyyy"
          )}   to  ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
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
              <span className="lsOptionText">
                {`Price`} <small>{`Per night`}</small>
              </span>
              <input type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">{Object.keys(option)[0]}</span>
              <input
                type="number"
                min={1}
                className="lsOptionInput"
                placeholder={option.adult}
              />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">{Object.keys(option)[1]} </span>
              <input
                type="number"
                min={0}
                className="lsOptionInput"
                placeholder={option.children}
              />
            </div>
            <div className="lsOptionItem">
              <span className="lsOptionText">{Object.keys(option)[2]} </span>
              <input
                type="number"
                min={0}
                className="lsOptionInput"
                placeholder={option.room}
              />
            </div>
          </div>
        </div>

        <button className="searchbtn">Search</button>
      </div>
    </div>
  );
};

export default StaySearch;
