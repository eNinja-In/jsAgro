import style from "./homeIntro.module.css";

export default function HomeIntro() {
  const auth = JSON.parse(localStorage.getItem("JSteamMember"));

  // Function to capitalize the first letter of a string
  const capitalize = (str) => {
    if (typeof str !== "string") return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className={style.main}>
      <div className={style.home}>
        <div className={style.homeWelcome}>
          <div className={style.welcome}>
            <h1>
              Welcome {auth?.user?.name ? capitalize(auth.user.name) : "Team"}
            </h1>
          </div>
        </div>
        <div className={style.homeMain}>
          <div className={style.homeLeft}></div>
          <div className={style.homeRight}></div>
        </div>
      </div>
    </div>
  );
}
