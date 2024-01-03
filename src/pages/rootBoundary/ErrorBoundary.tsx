import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
const ErrorBoundary = () => {
  return (
    <>
      <Navbar />
      <Header />

      <section className="errorPage">
        <div>
          <h2>Page Not Available</h2>

          <button>
            <Link to={`/`}>Go Back Home</Link>
          </button>
        </div>
      </section>

      <MailList />
      <Footer />
    </>
  );
};

export default ErrorBoundary;
