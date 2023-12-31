import "./List.css";
import { useState } from "react";
import format from "date-fns/format";
import { Outlet, useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import ListSearchBox from "../../components/listSearchBox/ListSearchBox";
import { setDate } from "date-fns";

const List = () => {
  const location = useLocation();

  console.log(location.state);
  const [destination] = useState<string>(location.state.destination);
  const [date, setdate] = useState(location.state.date);
  const [openDate, setopenDate] = useState(false);
  const [option] = useState(location.state.options);
  const [locationType] = useState<string>(location.state.TYPE);
  console.log(location.state.TYPE);
  console.log(location.state.options);
  console.log(option);

  const SearchResults = [{}, {}, {}, {}, {}];

  return (
    <>
      <div>
        <div className="listContainer">
          <div className="listWrapper">
            <ListSearchBox
              destination={destination}
              openDate={openDate}
              setopenDate={setopenDate}
              date={date}
              setdate={setDate}
              option={option}
              locationType={locationType}
            />

            <div className="listResult">
              <SearchItem />

              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default List;
