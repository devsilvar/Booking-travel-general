import home1 from "../assets/images/home9.jpg";
import home3 from "../assets/images/home7.jpg";
import home4 from "../assets/images/home6.jpg";
import home5 from "../assets/images/home5.jpg";

import {
  austin,
  ontario,
  greece,
  flight1,
  flight2,
  flight3,
  qatarAir,
  tigerAir,
  elvaneAir,
  lionAir,
} from "../assets";

//function that deals with refresh scenarios whne navigating through the page
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function TrimLink4Refresh(pathname: string, pathLists: any[]) {
  pathname = pathname.substr(1);
  const getCorrectPathName = pathLists.filter((object) => {
    const pathLength = object.link.length;
    pathname = pathname.substr(0, pathLength);
    return object.link.toLowerCase().includes(pathname.toLowerCase());
  });
  return Number(getCorrectPathName[0]?.id);
}

export const HomeList = [
  {
    image: home1,
    name: "Gijon Hotel Ville Stare",
    city: "Bordeaux",
    price: `Starting from $${470}`,
    rating: 8.9,
    remarks: "Excellent",
    order: -1,
  },

  {
    image: home5,
    name: "Apart Hotel Stare Miastor",
    city: "Betis",
    price: `Starting from $${100}`,
    rating: 7.9,
    order: 0,
    remarks: "Excellent",
  },
  {
    image: home3,
    name: "LongVille Hotel Dark",
    city: "Paris",
    price: `Starting from $${500}`,
    rating: 9.9,
    remarks: "Excellent",
    order: 1,
  },
  {
    image: home4,
    name: "Maroch Hotel Mable",
    city: "Barcelona",
    price: `Starting from $${160}`,
    rating: 7.9,
    remarks: "Good",
    order: 2,
  },
  {
    image: home1,
    name: "Gijon Hotel Ville Stare",
    city: "Bordeaux",
    price: `Starting from $${470}`,
    rating: 8.9,
    remarks: "Excellent",
    order: 3,
  },
];

export const FlightList = [
  {
    image: qatarAir,
    name: "Qatar AirPort ",
    city: "Qatar",
    price: `Starting from $${870}`,
    rating: 9.9,
    remarks: "Excellent",
    order: -1,
  },

  {
    image: tigerAir,
    name: "Tiger Airport England",
    city: "England",
    price: `Starting from $${200}`,
    rating: 8.9,
    order: 0,
    remarks: "Excellent",
  },
  {
    image: elvaneAir,
    name: "Elvane Airport France park",
    city: "Paris",
    price: `Starting from $${500}`,
    rating: 9.9,
    remarks: "Excellent",
    order: 1,
  },
  {
    image: lionAir,
    name: "LionAir Airport Ontario Mable",
    city: "Ontario",
    price: `Starting from $${160}`,
    rating: 7.9,
    remarks: "Good",
    order: 2,
  },
];

export const feauturedHomeList = [
  {
    image: ontario,
    name: "Ontario",
    properties: 122,
    type: "Properties",
  },
  {
    image: austin,
    name: "Austin",
    properties: 134,
    type: "Properties",
  },
  {
    image: greece,
    name: "Greece",
    properties: 532,
    type: "Properties",
  },
];

export const feauturedCarRenatlList = [
  {
    image: ontario,
    name: "Ontario",
    properties: 122,
    type: "Rentals",
  },
  {
    image: austin,
    name: "Austin",
    properties: 134,
    type: "Rentals",
  },
  {
    image: greece,
    name: "Greece",
    properties: 532,
    type: "Rentals",
  },
];

export const FeuturedFlightList = [
  {
    image: flight1,
    name: "United Airways",
    properties: 122,
    type: "Flights",
  },
  {
    image: flight2,
    name: "JetStar Airways",
    properties: 134,
    type: "Flights",
  },
  {
    image: flight3,
    name: "Luftsana Airways",
    properties: 532,
    type: "Flights",
  },
];
