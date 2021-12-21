import React from "react";
import "./popup.css";

const Popup = () => {
  return (
    <>
      <div className="swal-overlay swal-overlay--show-modal" tabIndex={-1} style={{display:'block'}}>
        <div className="swal-modal" role="dialog" aria-modal="true">
          <div className="swal-icon swal-icon--error">
            <div className="swal-icon--error__x-mark">
              <span className="swal-icon--error__line swal-icon--error__line--left" />
              <span className="swal-icon--error__line swal-icon--error__line--right" />
            </div>
          </div>
          <div className="swal-text" style={{}}>
            Please install an Ethereum-compatible browser or extension like
            MetaMask to use this dApp!
          </div>
          <div className="swal-footer">
            <div className="swal-button-container">
              <button className="swal-button swal-button--confirm">OK</button>
              <div className="swal-button__loader">
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
