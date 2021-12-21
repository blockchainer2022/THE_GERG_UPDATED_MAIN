import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopSection from "../../components/topSection";
import "./home.css";
import Footer from "../../components/footer";

toast.configure();

const Home = ({
  account,
  mint,
  totalSupply,
  displayPrice,
  loadWeb3,
  maxSupply,
}) => {
  return (
    <div className="home-container">
      <div className="topsection-container">
        <TopSection
          mint={mint}
          totalSupply={totalSupply}
          price={displayPrice}
          account={account}
          loadWeb3={loadWeb3}
          maxSupply={maxSupply}
        />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
