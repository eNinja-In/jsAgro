import style from "./navBar.module.css";

import { useState } from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [navTrue, setNavTrue] = useState(true);


  function navBtnHandler() {
    setNavTrue(!navTrue);
    document.querySelector(style.navigation).style = "display:flex;";
  }
  return (
    <>
      <div className={style.main}>
        <div className={style.navbar}>
          <div className={style.navUpper}>
            <div className={style.navContact}>
              <div className={style.contact}>
                <div className={style.contactLink}>
                  <a
                    href="https://www.google.com/maps?ll=29.507967,75.463553&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=3414138182506115894"
                    target="_blank"
                  >
                    <p>
                      <svg
                        fill="#ffffff"
                        version="1.1"
                        // xmlns="http://www.w3.org/2000/svg"
                        // xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="15px"
                        height="15px"
                        viewBox="-39.57 -39.57 474.85 474.85"
                        // xml:space="preserve"
                        stroke="#ffffff"
                        transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"
                      >
                        <g stroke-width="0" />

                        <g stroke-linecap="round" stroke-linejoin="round" />

                        <g>
                          {" "}
                          <g>
                            {" "}
                            <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z" />{" "}
                          </g>{" "}
                        </g>
                      </svg>
                      JS AGRO EQUIPMENT, FATEHABAD
                    </p>
                  </a>
                </div>
                <div className={style.contactLink}>
                  <p>
                    <svg
                      width="22px"
                      height="25px"
                      viewBox="0 -0.5 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"
                      stroke="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.36343 6.36195C7.24343 5.43495 7.55443 5.17495 7.92943 5.05395C8.18895 4.98595 8.46112 4.98217 8.72243 5.04295C9.06643 5.14295 9.15743 5.21895 10.2854 6.34295C11.2764 7.32995 11.3754 7.43695 11.4704 7.62995C11.6521 7.96873 11.6805 8.36894 11.5484 8.72995C11.4484 9.00495 11.3064 9.18695 10.7054 9.78995L10.3134 10.183C10.2105 10.2876 10.1863 10.4464 10.2534 10.577C11.1244 12.0628 12.36 13.3019 13.8434 14.177C14.0142 14.2684 14.2245 14.2389 14.3634 14.104L14.7404 13.733C14.9734 13.4941 15.2202 13.2691 15.4794 13.059C15.8866 12.809 16.3939 12.7867 16.8214 13C17.0304 13.1 17.0994 13.162 18.1214 14.182C19.1754 15.233 19.2054 15.266 19.3214 15.507C19.5397 15.9059 19.5374 16.3891 19.3154 16.786C19.2024 17.01 19.1334 17.091 18.5404 17.697C18.1824 18.063 17.8454 18.397 17.7914 18.446C17.3022 18.851 16.6746 19.0497 16.0414 19C14.883 18.8944 13.7617 18.5363 12.7564 17.951C10.5296 16.7711 8.63383 15.0521 7.24243 12.951C6.93937 12.5112 6.66994 12.0492 6.43643 11.569C5.81001 10.4953 5.48653 9.27189 5.50043 8.02895C5.54825 7.37871 5.86008 6.77637 6.36343 6.36195Z"
                          stroke="#ffffff"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    +918814830805
                  </p>
                </div>
                <div className={style.contactLink}>
                  <a href="mailto:jsagroequipment@gmail.com">
                    <p>
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        // xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            d="M4 7L10.94 11.3375C11.5885 11.7428 12.4115 11.7428 13.06 11.3375L20 7M5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>
                      </svg>
                      jsagroequipment@gmail.com
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className={style.navSocial}>
              <div className={style.socialMedia}>
                <div className={style.sociaLinks}>
                  <a href="/">
                    <svg
                      fill="#FFFFFF"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24px"
                      height="24px"
                    >
                      {" "}
                      <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z" />
                    </svg>
                  </a>
                </div>
                <div className={style.sociaLinks}>
                  <a href="/">
                    <svg
                      fill="#FFFFFF"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24px"
                      height="24px"
                    >
                      {" "}
                      <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z" />
                    </svg>
                  </a>
                </div>
                <div className={style.sociaLinks}>
                  <a href="/">
                    <svg
                      fill="#FFFFFF"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24px"
                      height="24px"
                    >
                      {" "}
                      <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={style.navLower}>
            <div className={style.navLogo}>
              <div className={style.JSAgroLogo}>
                <a href="/">
                  {/* <img src={FLogo} alt="" /> */}
                  <h1>JS-Agro</h1>
                </a>
              </div>
            </div>
            <div className={style.navBtn}>
              <div className={style.navListBtn}>
                <button className={style.MenuBtn} onClick={navBtnHandler}>
                  {!navTrue ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="28px"
                      viewBox="0 -960 960 960"
                      width="28px"
                      fill="blue"
                    >
                      <path d="M666-440 440-666l226-226 226 226-226 226Zm-546-80v-320h320v320H120Zm400 400v-320h320v320H520Zm-400 0v-320h320v320H120Zm80-480h160v-160H200v160Zm467 48 113-113-113-113-113 113 113 113Zm-67 352h160v-160H600v160Zm-400 0h160v-160H200v160Zm160-400Zm194-65ZM360-360Zm240 0Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="28px"
                      viewBox="0 -960 960 960"
                      width="28px"
                      fill="blue"
                    >
                      <path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div
              className={`${style.navigation} ${
                navTrue ? style.navHidden : style.navVisible
              }`}
            >
              <div className={style.navigationLinks}>
                <div className={style.navlink} onClick={navBtnHandler}>
                  <Link to="/" style={{ "--i": 1 }}>
                    <p>Home</p>
                  </Link>
                </div>
                <div className={style.navlink} onClick={navBtnHandler}>
                  <Link to="/about" style={{ "--i": 2 }}>
                    <p>About</p>
                  </Link>
                </div>
                <div className={style.navlink} onClick={navBtnHandler}>
                  <Link to="/product" style={{ "--i": 3 }}>
                    <p>Products</p>
                  </Link>
                </div>
                <div className={style.navlink} onClick={navBtnHandler}>
                  <Link to="/gallery" style={{ "--i": 4 }}>
                    <p>Gallery</p>
                  </Link>
                </div>
                <div className={style.navlink} onClick={navBtnHandler}>
                  <Link to="/contact" style={{ "--i": 5 }}>
                    <p>Contact</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
