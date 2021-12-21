/* eslint-disable react/jsx-no-target-blank */
import React from "react";
// import { withStyles } from "@material-ui/core";
// import logo from "../../assets/Logo.png";
// import Slider from "@material-ui/core/Slider";
// import logo from "../../assets/logo-2.svg";
import "./topSection.css";
import { Button } from "@material-ui/core";
import logotopbrimg from "../../assets/WhiteWebsiteLogo.svg";
import greg1 from "../../assets/For_Website.png";

// const PrettoSlider = withStyles({
//   // eslint-disable-next-line no-unused-vars
//   root: {
//     color: "#ff5706",
//     width: "100%",
//     height: 8,
//     marginTop: "50px",
//   },
//   thumb: {
//     height: 24,
//     width: 24,
//     backgroundColor: "#fff",
//     border: "2px solid #ff5706",
//     marginTop: -8,
//     marginLeft: -12,
//     "&:focus, &:hover, &$active": {
//       boxShadow: "inherit",
//     },
//   },
//   active: {},
//   valueLabel: {
//     left: "calc(-50% + 4px)",
//   },
//   track: {
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#ff5706",
//   },
//   rail: {
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#fff",
//   },
// })(Slider);

const TopSection = ({
  mint,
  totalSupply,
  price,
  account,
  loadWeb3,
  maxSupply,
}) => {
  const [value, setValue] = React.useState(1);
  const handleChange = (e, newValue) => {
    const reg = /^[0-9\b]+$/;
    if (e.target.value === "") {
      setValue(0);
    } else {
      if (reg.test(Number(e.target.value))) {
        if (Number(e.target.value) <= 5) {
          setValue(e.target.value);
        }
      }
    }
  };
  const increse = () => {
    if (value < 5) {
      setValue((prev) => Number(prev) + 1);
    }
  };
  const decrese = () => {
    if (value > 1) {
      setValue((prev) => Number(prev) - 1);
    }
  };
  return (
    <div className="topsection-main-wrapper">
      <div className="topsection-inner-wrapper">
        <div className="topsection-bootom-box-wrapper">
          <div className="topsection-bootom-inner-box-wrapper">
            <div className="topb-left-wrapper">
              <div className="buy-nowbtn-wrapper">
                <button onClick={() => loadWeb3()}>
                  {account
                    ? account.slice(0, 8) +
                      "..." +
                      account.slice(account.length - 5)
                    : "CONNECT WALLET"}
                </button>
              </div>

              <div className="topsection-slider-wrapper">
                {/* <PrettoSlider
                  value={value}
                  min={1}
                  step={1}
                  max={5}
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  defaultValue={5}
                  onChange={handleChange}
                  className="slidercustome"
                /> */}
                <div className="value-input-container">
                  <button className="value-btn" onClick={decrese}>
                    <i className="fas fa-minus"></i>
                  </button>
                  <div className="input-wrapper">
                    <input type="text" value={value} onChange={handleChange} />
                  </div>
                  <button className="value-btn" onClick={increse}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>

              <p className="slider-below-text">
                Buy {value} Greg(s){" "}
                <span className="big-font">
                  {(value * price).toFixed(4)} Ether
                </span>
              </p>

              <div className="mint-buton-wrapper">
                <Button
                  variant="contained"
                  color="secondary"
                  className="muiBtn"
                  onClick={() => {
                    mint(value);
                  }}
                  style={
                    !account || totalSupply === 2000
                      ? {
                          backgroundColor: "grey",

                          cursor: "default",

                          fontFamily: '"Poppins", sans-serif',
                        }
                      : null
                  }
                  disabled={!account ? true : false}
                >
                  {totalSupply === 2000 ? "All Sold" : "Mint Gregs"}
                </Button>
                <br />
                <span
                  style={
                    !account
                      ? {
                          color: "#fff",
                          marginTop: "5px",
                          display: "inline-block",
                          fontFamily: '"Poppins", sans-serif',
                        }
                      : { display: "none" }
                  }
                >
                  Connect Wallet to Buy NFT
                </span>
              </div>

              <p>
                Total Gregs Sold{" "}
                <span className="linebreak">
                  {totalSupply}/{maxSupply}
                </span>
              </p>
              <br />
              <br />
              <br />
            </div>
            <div className="topb-right-wrapper">
              <img src={logotopbrimg} alt="logotopbrimg" />
            </div>
            <img src={greg1} alt="logotopbrimg" className="background-greg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
