import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./errorPage.css";

const ErrorPage = () => {
  return (
    <section className="errorPage">
      <div>
        <h2>Page Not Available</h2>
        <button>Go Back Home</button>
      </div>
    </section>
  );
};

export default ErrorPage;
