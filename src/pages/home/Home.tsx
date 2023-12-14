import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Feautured from "../../components/feautured/Feautured";
import "./Home.css";
import PropertyList from "../../components/propetyList/PropertyList";
import FeauturedHome from "../../components/feauturedHome/FeauturedHome";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header type="" />
      <div className="homeContainer">
        <Feautured />
        <h1 className="homeTitle">Browse by Propety Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home Guest Love</h1>
        <FeauturedHome />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
