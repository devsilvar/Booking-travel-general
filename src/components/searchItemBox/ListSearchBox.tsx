// import "./listsearchBox.css";
// import { format } from "date-fns";
// import { DateRange } from "react-date-range";
// type SelectionState = Array<{ startDate: Date; endDate: Date; key: string }>;

// interface optionProp {
//   passengers: string | undefined;
//   adult: string;
//   children: string;
//   room: string;
// }
// const ListSearchBox = ({
//   destination,
//   openDate,
//   setopenDate,
//   date,
//   setdate,
//   option,
//   locationType,
// }: {
//   destination: string;
//   openDate: boolean;
//   setopenDate: any;
//   date: SelectionState;
//   setdate: any;
//   option: optionProp;
//   locationType: string;
// }) => {
//   return (
//     <>
//       <div className="listSearch">
//         <h1 className="lsTitle">Search</h1>

//            {/* <div className="lsItem">
//               <label htmlFor="Destination">Destination</label>
//               <input type="text" placeholder={destination} />
//             </div> */}

//         <div className="lsItem">     
//           {locationType == "Rentals" && (
//             <div className="lsItem">
//               <label htmlFor="Destination">Destination</label>
//               <input type="text" placeholder={destination} />
//             </div>
//           )}
//           {locationType == "Flights" && (
//             <div className="lsItem">
//               <label htmlFor="Destination">Destination</label>
//               <input type="text" placeholder={destination} />
//             </div>
//           )}
//           {locationType == "Properties" && (
//             <div className="lsItem">
//               <label htmlFor="Destination">Destination</label>
//               <input type="text" placeholder={destination} />
//             </div>
//           )}
//           {locationType == "Attractions" && (
//             <div className="lsItem">
//               <label htmlFor="Destination">Destination</label>
//               <input type="text" placeholder={destination} />
//             </div>
//           )}
//           {locationType == "Taxi" && (
//             <div className="lsItem">
//               <label htmlFor="Destination">Destination</label>
//               <input type="text" placeholder={destination} />
//             </div>
//           )}
//         </div>

//         {locationType == "Properties" && (
//           <div className="lsItem">
//             <label htmlFor="">{`Check-in-date`}</label>
//             <span onClick={() => setopenDate(!openDate)}>{`${format(
//               date[0].startDate,
//               "dd/MM/yyyy"
//             )}   to  ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
//             {openDate && (
//               <DateRange
//                 onChange={(item) => setdate([item.selection])}
//                 minDate={new Date()}
//                 ranges={date}
//               />
//             )}
//           </div>
//         )}

//         {locationType == "Taxi" && (
//           <div className="lsItem">
//             <label htmlFor="">{`Check-in-date`}</label>
//             <span onClick={() => setopenDate(!openDate)}>{`${format(
//               date[0].startDate,
//               "dd/MM/yyyy"
//             )}   to  ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
//             {openDate && (
//               <DateRange
//                 onChange={(item) => setdate([item.selection])}
//                 minDate={new Date()}
//                 ranges={date}
//               />
//             )}
//           </div>
//         )}
//         {locationType == "Flights" && (
//           <div className="lsItem">
//             <label htmlFor="">Departure Date</label>
//             <span onClick={() => setopenDate(!openDate)}>{`  ${format(
//               date[0].endDate,
//               "dd/MM/yyyy"
//             )}`}</span>
//             {openDate && (
//               <DateRange
//                 onChange={(item) => setdate([item.selection])}
//                 minDate={new Date()}
//                 ranges={date}
//               />
//             )}
//           </div>
//         )}
//         {locationType == "Rentals" && (
//           <div className="lsItem">
//             <label htmlFor="">{`Check-in-date`}</label>
//             <span onClick={() => setopenDate(!openDate)}>{`${format(
//               date[0].startDate,
//               "dd/MM/yyyy"
//             )}   to  ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
//             {openDate && (
//               <DateRange
//                 onChange={(item) => setdate([item.selection])}
//                 minDate={new Date()}
//                 ranges={date}
//               />
//             )}
//           </div>
//         )}
//         {locationType == "Attractions" && (
//           <div className="lsItem">
//             <label htmlFor="">{`Check-in-date`}</label>
//             <span onClick={() => setopenDate(!openDate)}>{`${format(
//               date[0].startDate,
//               "dd/MM/yyyy"
//             )}   to  ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
//             {openDate && (
//               <DateRange
//                 onChange={(item) => setdate([item.selection])}
//                 minDate={new Date()}
//                 ranges={date}
//               />
//             )}
//           </div>
//         )}

//         {locationType == "Properties" && (
//           <div className="lsItem">
//             <label htmlFor="">Options</label>
//             <div className="lsOptions">
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">
//                   {`Price`} <small>{`Per night`}</small>
//                 </span>
//                 <input type="number" className="lsOptionInput" />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">{Object.keys(option)[0]}</span>
//                 <input
//                   type="number"
//                   min={1}
//                   className="lsOptionInput"
//                   placeholder={option.adult}
//                 />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">{Object.keys(option)[1]} </span>
//                 <input
//                   type="number"
//                   min={0}
//                   className="lsOptionInput"
//                   placeholder={option.children}
//                 />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">{Object.keys(option)[2]} </span>
//                 <input
//                   type="number"
//                   min={0}
//                   className="lsOptionInput"
//                   placeholder={option.room}
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {locationType == "Flights" && (
//           <div className="lsItem">
//             <label htmlFor="">Options</label>
//             <div className="lsOptions">
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">Cabin Class</span>

//                 <select name="flightClass" id="" className="lsOptionInput">
//                   <option value="0">Select Cabin Class</option>
//                   <option value="economy">Economy</option>
//                   <option value="business">Business</option>
//                   <option value="firstClass">First Class</option>
//                 </select>
//               </div>

//               <div className="lsOptionItem">
//                 <span className="lsOptionText">{Object.keys(option)[0]} </span>
//                 <input
//                   type="number"
//                   min={1}
//                   placeholder={option.passengers}
//                   className="lsOptionInput"
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {locationType == "Taxi" && (
//           <div className="lsItem">
//             <label htmlFor="">Options</label>
//             <div className="lsOptions">
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">
//                   {`Min price`} <small> {`per night`}</small>
//                 </span>
//                 <input type="number" className="lsOptionInput" />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">
//                   {`Max price`} <small>{`per night`}</small>
//                 </span>
//                 <input type="number" className="lsOptionInput" />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">{Object.keys(option)[0]}</span>
//                 <input
//                   type="number"
//                   min={1}
//                   className="lsOptionInput"
//                   placeholder={option.adult}
//                 />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">{Object.keys(option)[1]} </span>
//                 <input
//                   type="number"
//                   min={0}
//                   className="lsOptionInput"
//                   placeholder={option.children}
//                 />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">{Object.keys(option)[2]} </span>
//                 <input
//                   type="number"
//                   min={1}
//                   placeholder={option.room}
//                   className="lsOptionInput"
//                 />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">{Object.keys(option)[0]} </span>
//                 <input
//                   type="number"
//                   min={1}
//                   placeholder={option.passengers}
//                   className="lsOptionInput"
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {locationType == "Rentals" && (
//           <div className="lsItem">
//             <label htmlFor="">Options</label>
//             <div className="lsOptions">
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">
//                   {`Min price`} <small> {`per night`}</small>
//                 </span>
//                 <input type="number" className="lsOptionInput" />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">
//                   {`Max price`} <small>{`per night`}</small>
//                 </span>
//                 <input type="number" className="lsOptionInput" />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">{Object.keys(option)[0]}</span>
//                 <input
//                   type="number"
//                   min={1}
//                   className="lsOptionInput"
//                   placeholder={option.adult}
//                 />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">{Object.keys(option)[1]} </span>
//                 <input
//                   type="number"
//                   min={0}
//                   className="lsOptionInput"
//                   placeholder={option.children}
//                 />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">{Object.keys(option)[2]} </span>
//                 <input
//                   type="number"
//                   min={1}
//                   placeholder={option.room}
//                   className="lsOptionInput"
//                 />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">{Object.keys(option)[0]} </span>
//                 <input
//                   type="number"
//                   min={1}
//                   placeholder={option.passengers}
//                   className="lsOptionInput"
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         {locationType == "Attractions" && (
//           <div className="lsItem">
//             <label htmlFor="">Options</label>
//             <div className="lsOptions">
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">
//                   {`Min price`} <small> {`per night`}</small>
//                 </span>
//                 <input type="number" className="lsOptionInput" />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">
//                   {`Max price`} <small>{`per night`}</small>
//                 </span>
//                 <input type="number" className="lsOptionInput" />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">{Object.keys(option)[0]}</span>
//                 <input
//                   type="number"
//                   min={1}
//                   className="lsOptionInput"
//                   placeholder={option.adult}
//                 />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">{Object.keys(option)[1]} </span>
//                 <input
//                   type="number"
//                   min={0}
//                   className="lsOptionInput"
//                   placeholder={option.children}
//                 />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">{Object.keys(option)[2]} </span>
//                 <input
//                   type="number"
//                   min={1}
//                   placeholder={option.room}
//                   className="lsOptionInput"
//                 />
//               </div>
//               <div className="lsOptionItem">
//                 <span className="lsOptionText">{Object.keys(option)[0]} </span>
//                 <input
//                   type="number"
//                   min={1}
//                   placeholder={option.passengers}
//                   className="lsOptionInput"
//                 />
//               </div>
//             </div>
//           </div>
//         )}
//         <button>Search</button>
//       </div>
//     </>
//   );
// };

// export default ListSearchBox;
