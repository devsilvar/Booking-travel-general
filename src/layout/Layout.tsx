import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import MailList from "../components/mailList/MailList";
import Footer from "../components/footer/Footer";
import "./layout.css";
const Layout = () => {
  return (
    <section>
      <Navbar />
      <Header />

      <div className="homeContainer">
        <Outlet />
      </div>

      <MailList />
      <Footer />
    </section>
  );
};

export default Layout;
