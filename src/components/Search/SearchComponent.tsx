import { search } from "../../assets";
import "./SearchComponenet.css";

const SearchComponent = ({ searchFunc }: { searchFunc: any }) => {
  return (
    <div className="headerSearchItem">
      <div onClick={searchFunc}>
        <button className="headerBtn Round">
          {" "}
          <span className="icon">
            {" "}
            <img src={search} alt="" />{" "}
          </span>{" "}
          <span>Search</span>{" "}
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
