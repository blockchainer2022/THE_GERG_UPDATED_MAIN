import React, { useState } from "react";
import SelectWalletpopup from "../selectWalletPopup";
import "./mainConnectWalletPopup.css";

const MainConnectWalletPopup = ({ open, setOpen, canClose }) => {
  const [eatherConnect, setEatherConnect] = useState(false);

  const handleEatherConnectSelect = () => {
    setOpen(false);
    setEatherConnect(true);
  };

  const handleEatherConnectClose = () => {
    setOpen(true);
    setEatherConnect(false);
  };

  return (
    <>
      <aside
        className="bn-onboard-custom bn-onboard-modal svelte-rntogh"
        style={open ? { zIndex: "100" } : { display: "none" }}
      >
        <section className="bn-onboard-custom bn-onboard-modal-content svelte-rntogh bn-onboard-dark-mode">
          <header className="bn-onboard-custom bn-onboard-modal-content-header svelte-8i8o6j">
            <div className="bn-onboard-custom bn-onboard-modal-content-header-icon svelte-8i8o6j bn-onboard-dark-mode-background">
              <svg
                height={18}
                viewBox="0 0 19 18"
                width={19}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="currentColor" fillRule="evenodd">
                  <path
                    d="m15.7721618.00006623h-13.27469839c-.86762065
		0-1.48592681.3078086-1.89741046.76113193-.40615823.44745064-.60839063
		1.04661988-.59978974
		1.64464107.00029187.005124.00040335.01025653.00033423.01538822v3.66899811c.06682404-.11685776.14162507-.22938827.22533894-.33628895.36778845-.46959466.90812952-.82116145
		1.61866132-.95623339v-.59093422c0-.55214353.17649657-1.05790163.47278173-1.43388645.29630745-.37596275.72292065-.62513272
		1.19969088-.62513272h11.23546239c.4765474 0 .9032497.24850764
		1.199624.62424961.2963743.37574196.4728709.88161045.4728709
		1.43476956v.4652895c.5235626-.11047728.9266682-.35445897
		1.2246022-.6733727.4116397-.44060653.6210469-1.03392515.6210469-1.63015804s-.2094072-1.18955151-.6210469-1.63018011c-.4116396-.44060653-1.0238627-.73834765-1.877468-.73834765z"
                  />
                  <path
                    d="m14.6096047 2.57151734h-11.21914267c-.32073002
		0-.6185428.16561433-.84722564.45769739s-.37782286.70763901-.37782286
		1.16808814v.53953924c.06265527-.0036172.12640078-.00570319.19125878-.00616921.00518482-.00032924.01037961-.00047727.01557482-.00044383h.01326084
		13.24215593c.0706652 0
		.1395281-.00228571.2069226-.00630235v-.52671262c0-.46164746-.1491623-.87711464-.3777561-1.16884264-.2286161-.29175019-.5263622-.45694289-.8473147-.45694289z"
                  />
                  <path
                    d="m18.2706767
		3.92481203c-.0857195.13278047-.1837832.25906993-.2945478.376829-.495466.52680184-1.2439236.87400468-2.2045296.87400468h-13.26144765c-.93286471
		0-1.53628777.33766369-1.93268731.8403655s-.57746434
		1.18877443-.57746434
		1.87212785v.41252951c.13725808.14817467.29229732.20450824.50016754.23211693.21170276.02811305.46814809.01403459.74212947.02170977h5.25979191c.94146564
		0 1.67588548.36084271 2.15878435.90341155.48289887.54259078.7188669
		1.25649138.7188669 1.96738768s-.23596803 1.4247969-.7188669
		1.9673877c-.48289887.5425689-1.21731871.9033896-2.15878435.9033896h-5.25979191c-.25038458
		0-.55749953-.0171046-.84908381-.0866198-.13520812-.0322576-.27003744-.0756114-.3932132-.1380653v1.5302318c0
		1.3201295 1.09561358 2.3983815 2.43697706
		2.3983815h13.39672254c1.3413635 0 2.4369771-1.078252
		2.4369771-2.3983815z"
                  />
                  <path
                    d="m0
		8.79699248c.14260628.06959022.29864665.11050376.44557501.1299645.2753208.03649163.54484912.01335327.79368049.02057717.002302.00003506.00460441.00003506.00690641
		0h5.25640383c.82827939 0 1.4220972.30156492
		1.8240727.75248941.40199777.45094634.60569239 1.06221954.60569239
		1.67601014 0 .6137467-.20369462 1.2250637-.60569239
		1.6759882-.4019755.4509463-.99579331.7524894-1.8240727.7524894h-5.25640383c-.22831264
		0-.50846792-.0188259-.74493458-.075238-.23646666-.0563245-.41416197-.1517676-.48734767-.2599728-.00440013-.0047203-.00900883-.0092487-.01387966-.0135722v-4.65860448zm6.42601595
		1.42288912c-.62979799 0-1.14873693.5024111-1.14873693 1.1218933 0
		.6211677.51893894 1.128745 1.14873693 1.128745.62984256 0
		1.14178597-.5082122 1.14178597-1.128745
		0-.6188692-.51194341-1.1218933-1.14178597-1.1218933z"
                  />
                </g>
              </svg>
            </div>{" "}
            <h3
              className="bn-onboard-custom bn-onboard-modal-content-header-heading svelte-8i8o6j"
              style={{ color: "#fff" }}
            >
              Select a Wallet
            </h3>
          </header>{" "}
          <p className="bn-onboard-custom bn-onboard-select-description svelte-w9ftfy">
            Please select a wallet to connect to this dapp:
          </p>{" "}
          <ul className="bn-onboard-custom bn-onboard-modal-select-wallets svelte-q1527">
            <li className="svelte-q1527">
              <button
                className="bn-onboard-custom bn-onboard-icon-button svelte-1799bj2 bn-onboard-dark-mode-background-hover"
                onClick={() => handleEatherConnectSelect()}
              >
                <div className="svelte-1799bj2">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAoCAMAAACl6XjsAAABfVBMVEVHcEx/Rh2ARx2ESiLwiCLMu67cfCagZDOddlJ+Rx7pgiPlfyPshSN/Rxx+Rh2CSB6ASB2JTR7gkkl1SCbQciPUwLLMu6+BSB5/Rx2DSR5+RxzefR3ogCPlfiPGuLHhfiP2jCTvhyN/Rx3nfyPfo2/lfCTIuK7kfyP2jCPkfiPuhSTFtKjogSThfCR/Rx5+Rx3lfiPeeiTDs6koIR2DSh/ifCajWx6qYCDckVOBSR7jfiTyiCOYYTXLcCKpXiHEs6fDs6fCsKYjHBwhHx8iHR0iICB1a2ZyaGIiHyCPTx7ogSTlfyTwhyOASB7ziSTngCTrgyT2jCTthCT1iyPuhCX4jSSESh5/Rx6ITR/+kSTYbyDheSLjfSPBaiPacSDdcyCvYSK0ZCGTVSPGcSblhi/ngSPqgSTdu56mXSDaeSP6jiPmfSD5jSQcGhvimFdqUj/TbSJARUsyQE6tbDLOeyzZx7nayr7hsog7Nza/raDjjUF/VTjFtKhKNCB0amRMd0DeAAAASnRSTlMAe/oOkv4TAwgrpnA9n1n9vkYfHPv+xu2r9mgN6uI4Us5ji/n9Ln7G7pO61/K35ZXYiUji5s21zMnb0/r5aMipm2UkYjSGnPy0/l1QcU4AAALOSURBVHhehdJXXxpNFAbwBYIgoICCIKhgi91ETe/9fZ3ZXui92bvp5bPnzCwzK79c+Fxws3/mOXN2BSe+0Tnh1oBKTI7eqvypSUnaHP4XDIVeRn1cucKSJIUj4wMF6cVgYDr2KsrVXE4imUx6mEmHgoH786ZZ3b3H/usZAWW7R3fsAFFNhCrVwmaKdY4ylZdaqEgjI4yxUm7mpAjvjABjbt/QIIZJ1MF+Pu+eY3MMuwEwl2sfEidiBcdaeUl6yrcEkzks38IWMBnG2gUVTrIljSco4LUNGZxRaeZASW4X63Q5hznHyTGqpAfRwU5+WKGtaxC1SQsSKb+tfOyeTHWRDEyuNGhpf7me5EBjoYowFoEZ+gFx7pH+FYaTA0qBfSG6ErI2KcxZJMxVDhSkS1sV4twuNls0wVi4CYpEJ6yHwXEmpHJ5OxJTGNHhMLjH/BP0uQp2GpTwVhHY+orAExLt9ChxWhFWprYcFihaNKLDegZt7U4FuRpbPtbssONgRNECVjm6wYJFrR+5XK/VavVa9byO4L3qpWqMl/qznGlipV46b5xdturYIK//54sND7sAR3SnlfbZxeVFFYkw3MHV9dIQv8CAQ7qlXl+1kUoO78mMsQvwXiRbh8VjEenEqat9NlvUBmLJol2v6jDe89U0Vb7sDQa7k/UjxZSp04mjpw1ewBBRuV6qVbCCRFmzNNE0rOVZP2EZE9F0u10F10qQsr1hVTQ0WTSs7KwP2NA0wjxlUHWCmJRlo5jNELdlYidQaR92RINRp1P4vfPxnSAszis3XLkMD3Gn8+P0dGHh697e3vdvJyf/f4CrLqm8xFx/+IQ+jH/+QgK/wHbek9ZZwhSkq1MbwUW/f+buRJyIfn79+e/TuGBfomfi6UBmjH3NIL19Ffd6J2YEmhX92UqGbpEHzlzzeuNxL6ht9lmG0g5w5PbrtbWJN2/HyGB/AYd1QUewqrrRAAAAAElFTkSuQmCC"
                    srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABQCAMAAACEXWP5AAABfVBMVEVHcEzffSL3jCOASB3hfSLkgCJxQyKdW0QhHh6hZj9qPyB/Rx3jfiSBSR+ARx3vhyN9Rhx8Rht/Rh1/Rx3jfSPpgiJ/RhzmgSPmgCPHtqqARx1+Rxx+Rx1+Rh18RBzifyPkfiPDsqjCsqbEs6nFtazmfyN9Rh31iyPlfiO8s7HceiTAsKXkfSOBSBzFtajsjjfaeiXifSLGtajogyIgHh4vJR7ffCfDsqbDsaaTUx4hHx8iHx8oIyPDsaaXioK9aCBaOx/PcyjZx7nYbyDHtqrddSEiHx/+kCTjeiLbcSDLuq7geCLayr3QvrElPFHWxLYaGRraw7BzVD02QU3khjLhmlzbtZbgq31dU0qdYTLfomzjj0VKSUhuZV+RZTqPWjSLf3emmI6ASB7lfyTngCR9Rh6FSh6DSR7ogSSMTx7JcSPsgyT4jSTqgiTffSStYCC1ZiWhWR+aVh/1iyTziiTwhiSVVB+/aiLXeSTlfiPxiCTuhST6jiT2jCTUbyHcqlRkAAAAQnRSTlMAE/DlIzgVA4YJI/DKWvqma0vPs5VQO2m65tvCkYMxRfBt/Y5K53fh+Bq0LeKnrdKi3MWGRvnAv9LD3bJmuczD09A0/4S4AAAGXElEQVR4XqyWyW6jQBCGHSEbATFjg+JE3iYnKxrF0kg5zWnepXd272syzz4mELppGpyDvyOHT1V/d1XTUtNxJnrrRpgusbu3cwGgTW/i6jsXF6DDwS1cQwJSyKjzbcHd49+B0qVRkEFm39Dod3cPv16ffc1UuLoWBQXdawW122+vCDG492Yqlw0ErIbYjPbD4xPaBgiyOMGkX3VNSi5AtRpb++33/XOwDeAF5q+wKt+xTUEJOjIVYT/dv8IgYDDD9zAg80rhEwoq/Hkr8+P++YVFDOUmdNxfXMCS09UnpOrCXvweigQIQQ6Lk88GnMo8WkABTjYfAmEABdhhiUHKWC6sR4EK7H+IbIXCUBpXilWJfwjUeJEo23BZFldKpcu+DWpIQtHGchWKF7T2co9onYwc3gVZUMQFvrDlLqdarQzvmFDbOXftMMihc0OK3yWgFpysuW2TulAWVwYdqAtTg8mBy9YMwuOCCK6hKd8LAhrAyzOXRSiNi0N6etnV4fGr2a95aP92GHCoLS+M/hUX3p34DCxxqTBHOktjTJpdns/73PhEtNnyKBnz5sroHjGhz4UYMHUN+c1tli0QRKdCdoILMRUyLtsMrdl1hBCeQ2E8F2JpVvmFHdhNgSUwhfe5YfCYYL7ae4a4YF2t2ZVxCvl4IsFmzQSZ3tcaRynOF855Lew0FBcXhNql16Qz0ezaux8X635TnED6idvkB6Cr0RrXgS9Dfp5R6o5XOB+n8pSPHUvtWgkuGH31GWZrKN9CpFSYbs40Uu/ilPuE6LDCvDKO2bPoVRc8C2sos+1w9f9Gn7qgiie5YFTZ3b6HqfxDYrhENdwMSpz4RBU2u9eSmDoVm8IFg5Dv7gzkz1sVzCG57oJozfvMefnZUtoIpZRkUM//34jZ9aaNRGE4IFPKihU3oIarAKEiJFHShH6p3V3txiH4I0ALSQjZtN3VzIUVeyok213swfz2tQfPgEdjdh+BfAE8es8cnWNkCAS4NJpL9bXMjoBi4DB8HwtdHqIy34tlL0WuvdYi2ARxHm6kHCOWnQlc+VIvSOALZR6rE3srWVEgk1pUtj2aaXOHtiuQVZhrezToJ/8NQYEsw6pk2OaqsCQKZhOlKLre1Q/zOzy5rBXw+F745QSqqsoKrVORZXkpy3884135DgnG4SqqzFDV6bdleFXiOi2kyrOR2q39xMsyLRqM66hOdepsNB7PIhmmwbvydDxTDn7m66xQF2+D3irdP6PxYDC4X8pdj96lLF3+NhjNwSs+WUkgY1tQUZfTSDUYj6eqzvppecvR+Ot3yHdAIscvxIUegPOvo/vHyPf4pEBgxjJ3OZ33sFHkZKWARE/Nhno96/vTbDp6HIUyg/VTCY2IG4HMKR1LcTZS2aLXW+A52SXrFiiWg94mZS9YlWIb8Ghli4WNAYAu/UR3LXQonvF0m2En6mY9wJ5tvuJmfBFsBxvOZofROhvCuJyskgZLx/c33VGpOM7qJmWZ3f+WuabPNwXHYj8hy20v0naw11UVaGCHhGGLllZa2hinQictmGUFjovIOHVBBHId22ILKrZZ2c7alslaYgIHIzrnOgQEaPpOEPtwbFtkK+sqXRNHmBxI6cqULmB4EGFnpfMNk7dJB0CIt3bJXuIDABHJZDkmJrZeK0fP7BCl21gwHoh8O7BsvLItWhK9YZpAjKeyYCIMM2yv79pkbE/jfSudISBGiU8fpIGw4/uBNX+a/fj9dYGM5gsMUtDJwvZSghMM0529ufr06erq42vSz5oBtjRBEVvAzZ+3t7cPk7u7+9AU8ZxE2zVB+rGpHv11xM1N6Hh4mEzuPkcMLy6utVj2ZnVsHQBTbTowiIHG+Hyx4jq+rmXPV4OQOxa3AGJce3s6mUSO64iL8EXhZR/o/bMEBSbTrXUquUK7uV/lHbws5OoXumr3DpI2CKFRK+dyUfDwfdTcv+z3hyk27cvjl7/+/u0ZW9zFtQwaCNSOy1KmsLnZ281fq5f9oUA41BqNhlatbyxbg04JBi+LZWlHRP1dtdEPE24qh/1LQuhiSDVI9pVxvNvZS3+ofVQ/qWp9TaNCqtL2E08PyiY0jWKnIlGTkHw+H55flSi0fp9cG8zF2ANn5ZxEj2mrsHDUfBca1mgn/HMlcuD/l0K7/r76/vz8/GS/3my3metfQ4SXfUiW+00AAAAASUVORK5CYII="
                    alt="MetaMask"
                    className="svelte-1799bj2"
                  />
                </div>{" "}
                <span className="svelte-1799bj2">MetaMask </span>
              </button>
            </li>
            <li className="svelte-q1527">
              <button
                className="bn-onboard-custom bn-onboard-icon-button svelte-1799bj2 bn-onboard-dark-mode-background-hover"
                style={{ cursor: "default" }}
              >
                <div className="svelte-1799bj2">
                  <svg
                    height={25}
                    viewBox="0 0 40 25"
                    width={40}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m8.19180572 4.83416816c6.52149658-6.38508884 17.09493158-6.38508884 23.61642788 0l.7848727.76845565c.3260748.31925442.3260748.83686816 0 1.15612272l-2.6848927 2.62873374c-.1630375.15962734-.4273733.15962734-.5904108 0l-1.0800779-1.05748639c-4.5495589-4.45439756-11.9258514-4.45439756-16.4754105 0l-1.1566741 1.13248068c-.1630376.15962721-.4273735.15962721-.5904108 0l-2.68489263-2.62873375c-.32607483-.31925456-.32607483-.83686829 0-1.15612272zm29.16903948 5.43649934 2.3895596 2.3395862c.3260732.319253.3260751.8368636.0000041 1.1561187l-10.7746894 10.5494845c-.3260726.3192568-.8547443.3192604-1.1808214.0000083-.0000013-.0000013-.0000029-.0000029-.0000042-.0000043l-7.6472191-7.4872762c-.0815187-.0798136-.2136867-.0798136-.2952053 0-.0000006.0000005-.000001.000001-.0000015.0000014l-7.6470562 7.4872708c-.3260715.3192576-.8547434.319263-1.1808215.0000116-.0000019-.0000018-.0000039-.0000037-.0000059-.0000058l-10.7749893-10.5496247c-.32607469-.3192544-.32607469-.8368682 0-1.1561226l2.38956395-2.3395823c.3260747-.31925446.85474652-.31925446 1.18082136 0l7.64733029 7.4873809c.0815188.0798136.2136866.0798136.2952054 0 .0000012-.0000012.0000023-.0000023.0000035-.0000032l7.6469471-7.4873777c.3260673-.31926181.8547392-.31927378 1.1808214-.0000267.0000046.0000045.0000091.000009.0000135.0000135l7.6473203 7.4873909c.0815186.0798135.2136866.0798135.2952053 0l7.6471967-7.4872433c.3260748-.31925458.8547465-.31925458 1.1808213 0z"
                      fill="#3b99fc"
                    />
                  </svg>
                </div>{" "}
                <span className="svelte-1799bj2" style={{ color: "darkgrey" }}>
                  WalletConnect{" "}
                </span>
              </button>
            </li>
            <li className="svelte-q1527">
              <button
                className="bn-onboard-custom bn-onboard-icon-button svelte-1799bj2 bn-onboard-dark-mode-background-hover"
                style={{ cursor: "default" }}
              >
                <div className="svelte-1799bj2">
                  <svg
                    width="40px"
                    height="40px"
                    viewBox="0 0 114 166"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="Styles"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <path
                        d="M17,51.453125 L17,40 C17,17.90861 34.90861,-1.0658141e-14 57,-1.0658141e-14 C79.09139,-1.0658141e-14 97,17.90861 97,40 L97,51.453125 L113.736328,51.453125 L113.736328,139.193359 L57.5,166 L0,139.193359 L0,51.453125 L17,51.453125 Z M37,51.453125 L77,51.453125 L77,40 L76.9678398,40 C76.3750564,29.406335 67.6617997,21 57,21 C46.3382003,21 37.6249436,29.406335 37.0321602,40 L37,40 L37,51.453125 Z M23,72 L23,125 L56.8681641,140.966797 L91,125 L91,72 L23,72 Z"
                        id="Trezor-logo"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </div>{" "}
                <span className="svelte-1799bj2" style={{ color: "darkgrey" }}>
                  Trezor{" "}
                </span>
              </button>
            </li>
            <li className="svelte-q1527">
              <button
                className="bn-onboard-custom bn-onboard-icon-button svelte-1799bj2 bn-onboard-dark-mode-background-hover"
                style={{ cursor: "default" }}
              >
                <div className="svelte-1799bj2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 450 450"
                    width={37}
                    height={37}
                  >
                    <style
                      dangerouslySetInnerHTML={{
                        __html: ".st0{fill:currentColor}",
                      }}
                    />
                    <g id="squares_1_">
                      <path
                        className="st0"
                        d="M578.2 392.7V24.3h25.6v344.1h175.3v24.3H578.2zm327.5 5.1c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5H804.6c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.3 2.6-28.9 3.9-43.5 3.8zM898 135.6c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm238-21.8c19.2 0 37.1 3.8 51.2 10.2 14.1 7.7 26.9 19.2 38.4 37.1h1.3c-1.3-21.7-1.3-42.2-1.3-62.7V0h24.3v392.7h-16.6l-6.4-42.2c-20.5 30.7-51.2 47.3-89.6 47.3s-66.5-11.5-87-35.8c-20.5-23-29.4-57.6-29.4-102.3 0-47.3 10.2-83.2 29.4-108.7 19.2-25.6 48.6-37.2 85.7-37.2zm0 21.8c-29.4 0-52.4 10.2-67.8 32-15.3 20.5-23 51.2-23 92.1 0 78 30.7 116.4 90.8 116.4 30.7 0 53.7-9 67.8-26.9 14.1-17.9 21.7-47.3 21.7-89.6v-3.8c0-42.2-7.7-72.9-21.7-90.8-12.8-20.5-35.8-29.4-67.8-29.4zm379.9-16.6v17.9l-56.3 3.8c15.3 19.2 23 39.7 23 61.4 0 26.9-9 47.3-26.9 64-17.9 16.6-40.9 24.3-70.4 24.3-12.8 0-21.7 0-25.6-1.3-10.2 5.1-17.9 11.5-23 17.9-5.1 7.7-7.7 14.1-7.7 23s3.8 15.3 10.2 19.2c6.4 3.8 17.9 6.4 33.3 6.4h47.3c29.4 0 52.4 6.4 67.8 17.9s24.3 29.4 24.3 53.7c0 29.4-11.5 51.2-34.5 66.5-23 15.3-56.3 23-99.8 23-34.5 0-61.4-6.4-80.6-20.5-19.2-12.8-28.1-32-28.1-55 0-19.2 6.4-34.5 17.9-47.3s28.1-20.5 47.3-25.6c-7.7-3.8-15.3-9-19.2-15.3-5-6.2-7.7-13.8-7.7-21.7 0-17.9 11.5-34.5 34.5-48.6-15.3-6.4-28.1-16.6-37.1-30.7-9-14.1-12.8-30.7-12.8-48.6 0-26.9 9-49.9 25.6-66.5 17.9-16.6 40.9-24.3 70.4-24.3 17.9 0 32 1.3 42.2 5.1h85.7v1.3h.2zm-222.6 319.8c0 37.1 28.1 56.3 84.4 56.3 71.6 0 107.5-23 107.5-69.1 0-16.6-5.1-28.1-16.6-35.8-11.5-7.7-29.4-11.5-55-11.5h-44.8c-49.9 1.2-75.5 20.4-75.5 60.1zm21.8-235.4c0 21.7 6.4 37.1 19.2 49.9 12.8 11.5 29.4 17.9 51.2 17.9 23 0 40.9-6.4 52.4-17.9 12.8-11.5 17.9-28.1 17.9-49.9 0-23-6.4-40.9-19.2-52.4-12.8-11.5-29.4-17.9-52.4-17.9-21.7 0-39.7 6.4-51.2 19.2-12.8 11.4-17.9 29.3-17.9 51.1z"
                      />
                      <path
                        className="st0"
                        d="M1640 397.8c-39.7 0-70.4-12.8-93.4-37.1-21.7-24.3-33.3-58.8-33.3-103.6 0-43.5 10.2-79.3 32-104.9 21.7-26.9 49.9-39.7 87-39.7 32 0 57.6 11.5 76.8 33.3 19.2 23 28.1 53.7 28.1 92.1v20.5h-197c0 37.1 9 66.5 26.9 85.7 16.6 20.5 42.2 29.4 74.2 29.4 15.3 0 29.4-1.3 40.9-3.8 11.5-2.6 26.9-6.4 44.8-14.1v24.3c-15.3 6.4-29.4 11.5-42.2 14.1-14.1 2.6-28.2 3.8-44.8 3.8zm-6.4-262.2c-26.9 0-47.3 9-64 25.6-15.3 17.9-25.6 42.2-28.1 75.5h168.9c0-32-6.4-56.3-20.5-74.2-12.8-18-32-26.9-56.3-26.9zm245.6-21.8c11.5 0 24.3 1.3 37.1 3.8l-5.1 24.3c-11.8-2.6-23.8-3.9-35.8-3.8-23 0-42.2 10.2-57.6 29.4-15.3 20.5-23 44.8-23 75.5v149.7h-25.6V119h21.7l2.6 49.9h1.3c11.5-20.5 23-34.5 35.8-42.2 15.4-9 30.7-12.9 48.6-12.9zM333.9 12.8h-183v245.6h245.6V76.7c.1-34.5-28.1-63.9-62.6-63.9zm-239.2 0H64c-34.5 0-64 28.1-64 64v30.7h94.7V12.8zM0 165h94.7v94.7H0V165zm301.9 245.6h30.7c34.5 0 64-28.1 64-64V316h-94.7v94.6zm-151-94.6h94.7v94.7h-94.7V316zM0 316v30.7c0 34.5 28.1 64 64 64h30.7V316H0z"
                      />
                    </g>
                  </svg>
                </div>{" "}
                <span className="svelte-1799bj2" style={{ color: "darkgrey" }}>
                  Ledger{" "}
                </span>
              </button>
            </li>{" "}
            <div className="svelte-q1527">
              <button
                className="bn-onboard-custom bn-onboard-prepare-button svelte-fnc3e1 cta bn-onboard-prepare-button-center bn-onboard-dark-mode-link bn-onboard-dark-mode-background-hover"
                style={{
                  cursor: "default",
                  borderColor: "grey",
                  color: "darkgrey",
                }}
                disabled
              >
                Show More
              </button>
            </div>{" "}
          </ul>{" "}
          {/* <div className="bn-onboard-custom bn-onboard-select-info-container svelte-w9ftfy">
            <span className="bn-onboard-custom bn-onboard-select-wallet-info svelte-w9ftfy">
              What is a wallet?
            </span>{" "}
          </div> */}
          <div
            className="bn-onboard-custom bn-onboard-modal-content-close svelte-rntogh bn-onboard-dark-mode-close-background"
            style={!canClose ? { display: "none" } : null}
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 47.971 47.971"
              fill="#9B9B9B"
              xmlSpace="preserve"
              className="svelte-rntogh"
              style={{ transition: "fill 150ms ease-in-out 0s" }}
            >
              <g>
                <path
                  d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
        c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
        C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
        s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"
                />
              </g>
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>
          </div>
        </section>
      </aside>
      <SelectWalletpopup
        eatherConnect={eatherConnect}
        onClose={handleEatherConnectClose}
      />
    </>
  );
};

export default MainConnectWalletPopup;
