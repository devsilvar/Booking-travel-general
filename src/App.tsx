import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
//import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Layout from "./layout/Layout";
import Stay from "./pages/miniPages/stays/Stay";
import Flights from "./pages/miniPages/flights/Flights";
import Taxi from "./pages/miniPages/taxi/Taxi";
import Rentals from "./pages/miniPages/rentals/Rentals";
import Attraction from "./pages/miniPages/attraction/Attraction";
import List from "./pages/list/List";
import ErrorPage from "./pages/errorPage/ErrorPage";
// import Stay from "./pages/miniPages/stays/Stay";
// import Flights from "./pages/miniPages/flights/Flights";
// import Taxi from "./pages/miniPages/taxi/Taxi";
// import Attraction from "./pages/miniPages/attraction/Attraction";
// import Rentals from "./pages/miniPages/rentals/Rentals";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="*" element={<ErrorPage />}/>
      <Route index element={<Stay />} />

      <Route path="Flights" element={<Outlet />}>
        <Route index element={<Flights />} />
        <Route path="hotels" element={<Outlet />}>
          <Route index element={<List />} />
          <Route path=":id" element={<Hotel />} />
        </Route>
      </Route>

      <Route path="Stays" element={<Outlet />}>
        <Route index element={<Stay />} />
        <Route path="hotels" element={<Outlet />}>
          <Route index element={<List />} />
          <Route path=":id" element={<Hotel />} />
        </Route>
      </Route>

      <Route path="Rentals" element={<Outlet />}>
        <Route index element={<Rentals />} />
        <Route path="hotels" element={<Outlet />}>
          <Route index element={<List />} />
          <Route path=":id" element={<Hotel />} />
        </Route>
      </Route>

      <Route path="Taxi" element={<Taxi />} />
      <Route path="Attractions" element={<Attraction />} />
      <Route path="Rentals" element={<Rentals />} />

      {/* <Route path="/" element={<Home />}>
        <Route index element={<Stay />} />
        </Route> */}
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
