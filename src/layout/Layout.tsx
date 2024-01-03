import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import MailList from "../components/mailList/MailList";
import Footer from "../components/footer/Footer";
import "./layout.css";

const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/Stays", { replace: true });
  }, []);

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
