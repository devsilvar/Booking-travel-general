import "./attraction.module.css";
import HeaderTitle from "../../../components/headerText/HeaderText";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

//const TYPE: string = "Rentals";

const Attraction = () => {
  // const handleSearch = () => {
  //   setrenderCLicked(!renderCLicked);
  //   navigate("hotels", { state: { destination, date, options, TYPE } });
  // };

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
