import style from "./aboutIntro.module.css";
import Owner from "/team/Team.jpeg"; // Ensure this path is correct based on your project structure
// import Owner from "/team/Team.jpeg"; // Ensure this path is correct based on your project structure
import SocialLinks from "../other/SocialLinks";
export default function AboutIntro() {
  const owner = "/team/JS.png"; // Example path, ensure it's valid, or set to `null`/`undefined` for testing fallback

  // Check if owner is a valid URL or path
  const isOwnerAvailable = owner && owner.trim() !== "";

  const fbLink = "/";
  const inLink = "/";
  const eLink = "/";

  return (
    <div className={style.main}>
      <div className={style.aboutJS}>
        <div className={style.aboutJSWelcome}>
          <div className={style.welcomeAboutLeft}>
            <img src={owner} alt="" />
          </div>
          <div className={style.welcomeAboutIngo}>
            <div className={style.JSAgro}>
              <h2>About JS-Agro</h2>
            </div>
            <div className={style.JSAgro}>
              <h3>
                "India's Largest Combine Harvester & Tractor Manufacturers"
              </h3>
            </div>
          </div>
          <div className={style.welcomeAbouRight}>
            <img src={owner} alt="" />
          </div>
        </div>
        <div className={style.aboutJSOwner}>
          <div className={style.Owner}>
            <div className={style.ownerInfo}>
              <div className={style.info}>
                {/* <h2>Rakesh Penshia</h2> */}
                <h2>Owner</h2>
              </div>
              <div className={style.info}>
                <h4>
                  "Empowering farmers with innovative technology for a
                  prosperous future ahead."
                </h4>
              </div>
              <div className={style.info}>
                <p>
                  Founded by Rakesh Painshia in 2020, JS-Agro Equipment is an
                  innovative agriculture company based in Fatehabad. We create
                  advanced tech products to enhance farming efficiency and
                  productivity. Our mission is to provide reliable, high-quality
                  equipment that addresses modern farming challenges. From
                  machinery to irrigation systems, our solutions optimize
                  agricultural processes. Our dedicated team is passionate about
                  agriculture and committed to delivering exceptional service
                  and support.
                </p>
              </div>
              <div className={style.info}>
                <div className={style.social}>
                  <SocialLinks
                    instagram={inLink}
                    facebook={fbLink}
                    email={eLink}
                  />
                </div>
              </div>
            </div>
            <div className={style.ownerImg}>
              <div className={style.Image}>
                {/* Conditional rendering for the owner image */}
                <img src={isOwnerAvailable ? owner : Owner} alt="Owner" />
                <h3>Rakesh Penshia</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
