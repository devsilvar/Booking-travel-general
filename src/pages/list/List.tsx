import "./List.css";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import StaySearch from "../../components/searchItemBox/StaySearch";
import FlightSearch from "../../components/searchItemBox/FlightSearch";
import RentalSearch from "../../components/searchItemBox/RentalSearch";
import AttractionBox from "../../components/searchItemBox/AttractionBox";
import StayResultBox from "../../components/searchResultsBox/StayResultBox";
import FlightResultBox from "../../components/searchResultsBox/FlightResultBox";

const List = () => {
  const location = useLocation();

  console.log(location.state);
  const [destination] = useState<string>(location.state.destination);
  const [date, setdate] = useState(location.state.date);
  const [openDate, setopenDate] = useState(false);
  const [option] = useState(location.state.options);
  const [locationType] = useState<string>(location.state.TYPE);
  // console.log(location.state.TYPE);
  // console.log(location.state.options);
  // console.log(option);

  return (
    <>
      <div>
        <div className="listContainer">
          <div className="listWrapper">
            {locationType === "Properties" && (
              <div className="listWrapper">
                <StaySearch
                  destination={destination}
                  openDate={openDate}
                  setopenDate={setopenDate}
                  date={date}
                  setdate={setdate}
                  option={option}
                />
                <div className="listResult">
                  <StayResultBox />
                  <StayResultBox />
                  <StayResultBox />
                  <StayResultBox />
                  <StayResultBox />
                  <StayResultBox />
                </div>
              </div>
            )}
            {locationType === "Flights" && (
              <>
                <FlightSearch
                  destination={destination}
                  openDate={openDate}
                  setopenDate={setopenDate}
                  date={date}
                  setdate={setdate}
                  option={option}
                />
                <div className="listResult">
                  <FlightResultBox />
                  <FlightResultBox />
                  <FlightResultBox />
                  <FlightResultBox />
                  <FlightResultBox />
                </div>
              </>
            )}
            {locationType === "Rentals" && <RentalSearch />}
            {locationType == "Attractions" && <AttractionBox />}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default List;
