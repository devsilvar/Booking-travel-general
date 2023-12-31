import "./attraction.module.css";
import { useState } from "react";
import HeaderTitle from "../../../components/headerTitles/HeaderTitle";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FaBed, FaCalendarCheck } from "react-icons/fa";
import SearchComponent from "../../../components/Search/SearchComponent";
import { useNavigate } from "react-router-dom";

type optionProp = {
  passengers: number | string;
};
type SelectionState = Array<{
  startDate: Date;
  endDate: Date;
  key: string;
}>;

const Attraction = () => {
  const [options] = useState<optionProp | undefined>({
    passengers: 0,
  });

  const navigate = useNavigate();

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

  const TYPE: string = "Rentals";

  const handleSearch = () => {
    setrenderCLicked(!renderCLicked);
    navigate("hotels", { state: { destination, date, options, TYPE } });
  };

  return (
    <>
      <div className="stayHead">
        <div className="staySection">
          <HeaderTitle
            title="Book a Visit to a World Changing Attraction. Takes a few Minutes"
            description="Get points for Booking a Visit to available Attractions, unlock instant savings of 10%"
            buttonText="Sign in / Register"
          />
          {/* <div className="headerSearch">
            <div className="headerSearchItem">
              <FaBed className="icon-input" />
              <input
                type="text"
                placeholder="Where do You want To visit"
                onChange={(e) => setdestination(e.target.value)}
                className="headerSearchInput"
              />
            </div>
            <div className="headerSearchItem">
              <FaCalendarCheck className="icon-input" />
              <span
                onClick={() => setopenDate(!openDate)}
                className="headerSearchText"
              >{`You need This car By ${format(
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

            <SearchComponent searchFunc={handleSearch} />
          </div> */}
        </div>
      </div>
      <div className="Att-container">
        <h2>Attractions will be Available Soon</h2>
      </div>
    </>
  );
};

export default Attraction;
