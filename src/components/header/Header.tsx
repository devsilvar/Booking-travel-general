import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { TrimLink4Refresh } from "../../utils/Data";
import { FaBed, FaPlane, FaCar, FaTaxi } from "react-icons/fa";

const Header = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const location = useLocation();

  const chosen = (index: number) => {
    setSelectedIndex(index);
  };

  const navItems = [
    { id: 0, icon: FaBed, text: "Stays", link: "Stays" },
    { id: 1, icon: FaPlane, text: "Flights", link: "Flights" },
    { id: 2, icon: FaCar, text: "Car Rentals", link: "Rentals" },
    { id: 3, icon: FaBed, text: "Attractions", link: "Attractions" },
  ];

  useEffect(() => {
    setSelectedIndex(TrimLink4Refresh(location.pathname, navItems));
  }, [selectedIndex]);

  type navProps = {
    active: string;
    icon: React.FC<
      typeof FaBed | typeof FaPlane | typeof FaCar | typeof FaTaxi
    >;
    label: string;
  };

  function NavItem(props: navProps) {
    return (
      <div className={`headerListItem ${props.active ? "active" : ""}`}>
        {React.createElement(props.icon, {
          className: "text",
        })}
        <span className="active">{props.label}</span>
      </div>
    );
  }
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            {navItems.map((item, index) => {
              const { icon, text, link } = item;
              return (
                <NavLink
                  to={`${link}`}
                  key={index}
                  onClick={() => chosen(index)}
                  className={`headerListItem   ${
                    selectedIndex === index ? "activeBtn" : ""
                  }`}
                >
                  <NavItem
                    icon={icon}
                    label={text}
                    active={selectedIndex === index ? "activeBtn" : ""}
                  />
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
