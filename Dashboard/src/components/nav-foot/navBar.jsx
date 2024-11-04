import style from "./navBar.module.css";
import { useNavigate, Link } from "react-router-dom";


function NavBar() {
  const navigate = useNavigate(); // Hook to access navigate function
  const auth = JSON.parse(localStorage.getItem("JSteamMember")); // Parse localStorage 'user' item

  const logout = () => {
    localStorage.clear(); // Clear localStorage
    navigate("/JSlogin"); // Navigate to signup page after logout
  };
  const handleNavigationButtonClick = () => {
    console.log("Navigation button clicked");
  };

  return (
    <div className={style.main}>
      <div className={style.navbar}>
        <div className={style.navBarLogo}>
          <div className={style.navLogo}>
            <div className={style.logo}>
              <h1>JS-Agro</h1>
            </div>
          </div>
          <div className={style.navButton}>
            <div className={style.navigateMenu}>
              {/* Add a proper image source or an icon */}
              <img
                src="path/to/your-icon.png"
                alt="Navigation Menu"
                onClick={handleNavigationButtonClick}
              />
            </div>
          </div>
        </div>
        <div className={style.navBarNavigation}>
          <div className={style.navigation}>
            <div className={style.navLink}>
              <Link to="/">Home</Link>
            </div>
            <div className={style.navLink}>
              <Link to="/JSproducts">Product</Link>
            </div>
            <div className={style.navLink}>
              <Link to="/JSDataanalyse">Analyse</Link>
            </div>
            <div className={style.navLink}>
              <Link to="/JSsales">Sales</Link>
            </div>
            {!true ? (
              <div className={style.other}></div>
            ) : (
              <div className={style.navLink}>
                <Link to="/settings">Settings</Link>
              </div>
            )}
          </div>
          <div className={style.navSignIn}>
            {auth ? (
                <button className={style.navBarLogout} onClick={logout}>
                  Logout
                </button>
            ) : (
                <button
                  className={style.loginButton}
                  onClick={() => navigate("/JSlogin")}
                >
                  SignIn
                </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
