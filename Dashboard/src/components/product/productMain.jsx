import style from "./productMain.module.css";
// import ListProduct from "./productList";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Product() {
  const navigate = useNavigate();

  return (
    <div className={style.main}>
      <div className={style.products}>
        <div className={style.leftBtnOption}>
          <div className={style.prodFunctionBtn}>
            <div className={style.prodBtn}>
              <button
                className={style.actionButton}
                onClick={() => navigate("list-Product")}
              >
                <svg
                  // fill="#000000"
                  // width="20px"
                  // height="20px"s
                  viewBox="0 0 32.00 32.00"
                  // xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="list-2"
                  enable-background="new 0 0 32 32"
                  xml:space="preserve"
                  stroke="#000000"
                  stroke-width="0.00032"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.384"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect x="9" y="18" width="14" height="2"></rect>{" "}
                    <rect x="9" y="22" width="7" height="2"></rect>{" "}
                    <rect x="9" y="14" width="14" height="2"></rect>{" "}
                    <path d="M23 6V4h-6V2h-2v2H9v2H4v24h24V6H23zM11 6h10v2H11V6zM26 28H6V8h3v2h14V8h3V28z"></path>{" "}
                  </g>
                </svg>
                List Product
              </button>
            </div>
            <div className={style.prodBtn}>
              <button
                className={style.actionButton}
                onClick={() => navigate("add-Product")}
              >
                button2
              </button>
            </div>
            <div className={style.prodBtn}>
              <button
                className={style.actionButton}
                onClick={() => navigate("update-product")}
              >
                button3
              </button>
            </div>
            <div className={style.prodBtn}>
              <button
                className={style.actionButton}
                onClick={() => console.log("button CLicked")}
              >
                button4
              </button>
            </div>
            <div className={style.prodBtn}>
              <button
                className={style.actionButton}
                onClick={() => console.log("button CLicked")}
              >
                button5
              </button>
            </div>
            <div className={style.prodBtn}>
              <button
                className={style.actionButton}
                onClick={() => console.log("button CLicked")}
              >
                button6
              </button>
            </div>
          </div>
        </div>
        <div className={style.rightResponce}>
          {/* <Route></Route> */}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
