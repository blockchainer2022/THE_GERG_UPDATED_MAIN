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
      "Minting will be announced on our discord group. We will be holding a presale 1 day prior to the public launch for our Whitelist members. Please join our Discord to learn how you can join the Whitelist. The Whitelist spots will be very limited.The public sale will happen 24h after the pre-sale.",
  },
  {
    question: "Where can i view my afts after minting ?",
    answer:
      "Once you have minted a Meka Ape NFT, you will be able to see it by connecting your Metamask wallet to OpenSea.",
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
