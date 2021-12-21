import { useState } from "react";
import "./style.css";

const data = [
  {
    question: "Which Wallet can i connect to mint a Greg",
    answer:
      "You can connect metamask and coinbase wallets only. If you don't have it, you create one here : https://metamask.io/",
  },
  {
    question: "How to connect my wallet ?",
    answer:
      "After you created your wallet you will just have to click on the button on the header of this page “connect your wallet” and make sure you are on the ethereum network.",
  },
  {
    question: "What is minting ?",
    answer:
      "Minting a Greg means that you are buying a digital art which becomes a part of the ethereum blockchain. Your digital artwork is represented as an NFT so it can be traded in the market and digitally tracked as it is resold or collected again in the future.",
  },
  {
    question: "How to Mint ?",
    answer:
      "Minting Will Be Announced On Our Discord Group. Please Join Our Discord To Learn How You Can Join The Whitelist. The Whitelist Spots Will Be Very Limited. The Public Sale Will Happen 4h After The Pre-Sale.",
  },
  {
    question: "Where Can I View My Nfts After Minting ?",
    answer:
      "Once You Have Minted The Gregs NFT, You Will Be Able To See It By Connecting Your Metamask Wallet To OpenSea.",
  },
];

const Index = () => {
  const [currentActive, setCurrentActive] = useState(0);

  const toggle = (i) => {
    if (currentActive === i) {
      return setCurrentActive(null);
      // alert(currentActive);
    }
    setCurrentActive(i);
  };

  return (
    <footer>
      <p>Mint through Metamask Wallet or Open in Trust Wallet Browser</p>
      <h2 className="faq-title">FAQs</h2>
      <Faq toggle={toggle} currentActive={currentActive} />
    </footer>
  );
};

export default Index;

const Faq = ({ toggle, currentActive }) => (
  <div className="faq-container">
    {data.map((v, i) => (
      <div className="faq-wrapper">
        <div className="faq-header" onClick={() => toggle(i)}>
          <h2>{v.question}</h2>
          <span>
            <i
              className={`fas ${currentActive === i ? "fa-minus" : "fa-plus"}`}
            ></i>
          </span>
        </div>
        <div className={`faq-answer ${currentActive === i ? "active" : ""}`}>
          <p>{v.answer}</p>
        </div>
      </div>
    ))}
  </div>
);
