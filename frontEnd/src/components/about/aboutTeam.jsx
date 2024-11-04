import style from "./aboutTeam.module.css";
import SocialLinks from "../other/SocialLinks";
import Team from "/team/Team.jpeg";
import eNinja from '/team/eNinja.png'
export default function AboutTeam() {
  const fbLink = "/";
  const inLink = "/";
  const eLink = "/";
  return (
    <div className={style.main}>
      <div className={style.team}>
        <div className={style.JSteamUpper}>
          <h1>Team</h1>
        </div>
        <div className={style.JSteamLeaders}>
          <div className={style.TeamLeaders}>
            <div className={style.leaderCard}>
              <div className={style.Leader}>
                <img src={Team} alt="" />
                <h2>Kuldeep Pensia</h2>
                <h4>cofounder</h4>
                <p>
                  Kuldeep, co-founder, manages import-export, ensuring efficient
                  logistics. His leadership and expertise maintain a reliable
                  supply chain, delivering products timely to farmers and
                  upholding high standards.
                </p>
                <div className={style.social}>
                  <SocialLinks
                    instagram={inLink}
                    facebook={fbLink}
                    email={eLink}
                  />
                </div>
              </div>
            </div>
            <div className={style.leaderCard}>
              <div className={style.Leader}>
                <img src={Team} alt="" />
                <h2>Vipin Pensia</h2>
                <h4>cofounder</h4>
                <p>
                  Vipin, co-founder, oversees customer service and accounts. He
                  ensures exceptional customer support and precise financial
                  management, focusing on satisfaction and transparency, which
                  are crucial to our company’s success.
                </p>
                <div className={style.social}>
                  <SocialLinks
                    instagram={inLink}
                    facebook={fbLink}
                    email={eLink}
                  />
                </div>
              </div>
            </div>
            <div className={style.leaderCard}>
              <div className={style.Leader}>
                <img src={eNinja} alt="" />
                <h2>eNinja-In</h2>
                <h4>cofounder</h4>
                <p>
                  eNinja, our skilled website designer, leads the tech
                  department, ensuring a visually appealing and online presence.
                  Their expertise in web development enhances user experience,
                  supporting our mission to deliver advanced agricultural
                  technology.
                </p>
                <div className={style.social}>
                  <SocialLinks
                    instagram={inLink}
                    facebook={fbLink}
                    email={eLink}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
